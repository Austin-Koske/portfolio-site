# syntax=docker.io/docker/dockerfile:1

# -------- deps --------
  FROM node:20-alpine AS deps
  WORKDIR /app
  
  # If you have native deps, uncomment:
  # RUN apk add --no-cache libc6-compat
  
  COPY package.json package-lock.json* ./
  RUN npm ci
  
  # -------- builder --------
  FROM node:20-alpine AS builder
  WORKDIR /app
  
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  
  ENV NEXT_TELEMETRY_DISABLED=1
  
  # Build args -> env
  ARG NEXT_PUBLIC_NODE_ENV=development
  ENV NEXT_PUBLIC_NODE_ENV=${NEXT_PUBLIC_NODE_ENV}
  
  # Delete `.env` files to prevent conflicts
  RUN rm -f .env .env.local .env.production .env.development
  
  # Build
  RUN npm run build
  
  # -------- runner --------
  FROM node:20-alpine AS runner
  WORKDIR /app
  
  ENV NODE_ENV=production
  ENV NEXT_TELEMETRY_DISABLED=1
  
  RUN addgroup --system --gid 1001 nodejs \
   && adduser  --system --uid 1001 nextjs
  
  COPY --from=builder /app/public ./public
  
  # Set correct permission for prerender cache
  RUN mkdir .next && chown nextjs:nodejs .next
  
  # Next.js standalone output
  COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
  COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
  
  USER nextjs
  EXPOSE 3000
  
  CMD ["node", "server.js"]