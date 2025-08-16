This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker Deployment

This project includes Docker deployment scripts for easy containerized deployment.

### Prerequisites

- Docker installed on your local machine
- Docker Hub account (or other container registry)
- Docker installed on your Raspberry Pi

### Setup

1. Edit the configuration in both deployment scripts:
   - Open `deploy.sh` and `pi-deploy.sh`
   - Update `USERNAME="your-username"` with your Docker Hub username
   - Optionally change `REGISTRY` if using a different container registry

### Deploy to Docker Hub

To build and push your image to Docker Hub:

```bash
./deploy.sh [tag]
```

Examples:
```bash
./deploy.sh          # Uses 'latest' tag
./deploy.sh v1.0.0   # Uses 'v1.0.0' tag
```

### Deploy on Raspberry Pi

On your Raspberry Pi, run:

```bash
./pi-deploy.sh [tag]
```

Or download and run directly:
```bash
curl -sSL https://raw.githubusercontent.com/your-username/portfolio-site/main/pi-deploy.sh | bash -s [tag]
```

The site will be available at `http://your-pi-ip:3000`

### Manual Docker Commands

If you prefer manual deployment:

```bash
# Build locally
docker build -t portfolio-site .

# Run locally
docker run -p 3000:3000 portfolio-site

# Push to registry
docker tag portfolio-site your-username/portfolio-site:latest
docker push your-username/portfolio-site:latest

# Deploy on Pi
docker pull your-username/portfolio-site:latest
docker run -d --name portfolio-site -p 3000:3000 --restart unless-stopped your-username/portfolio-site:latest
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
