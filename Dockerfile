# syntax=docker.io/docker/dockerfile:1
FROM oven/bun:1-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

# 🛑 Force Next.js to Ignore `.env` Files

ARG NEXT_PUBLIC_NODE_ENV=development

# Inject Build Arguments as Environment Variables
ENV NEXT_PUBLIC_NODE_ENV=${NEXT_PUBLIC_NODE_ENV}

# Delete `.env` files to prevent conflicts
RUN rm -f .env .env.local .env.production .env.development

# Build the application using only Build Args
RUN bun run build

# Production image, copy all the files and run Next.js
FROM base AS runner
WORKDIR /app

# Disable telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expose port 3000
EXPOSE 3000

# Start Next.js
CMD ["node", "server.js"]
