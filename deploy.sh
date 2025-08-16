#!/bin/bash

# Portfolio Site Docker Deployment Script
# Usage: ./deploy.sh [tag]

set -e

# Configuration
IMAGE_NAME="portfolio-site"
REGISTRY="docker.io"  # Change to your registry (e.g., ghcr.io, your-registry.com)
USERNAME="fds-dark"  # Change to your Docker Hub username

# Get tag from argument or use 'latest'
TAG=${1:-latest}
FULL_IMAGE_NAME="${REGISTRY}/${USERNAME}/${IMAGE_NAME}:${TAG}"

echo "🐳 Building and pushing Docker image..."
echo "Image: ${FULL_IMAGE_NAME}"

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t ${IMAGE_NAME}:${TAG} .

# Tag the image for registry
echo "🏷️  Tagging image..."
docker tag ${IMAGE_NAME}:${TAG} ${FULL_IMAGE_NAME}

# Push to registry
echo "🚀 Pushing to registry..."
docker push ${FULL_IMAGE_NAME}

echo "✅ Successfully pushed ${FULL_IMAGE_NAME}"
echo ""
echo "To deploy on your Raspberry Pi, run:"
echo "  curl -sSL https://raw.githubusercontent.com/${USERNAME}/portfolio-site/main/pi-deploy.sh | bash -s ${TAG}"
echo ""
echo "Or manually:"
echo "  docker pull ${FULL_IMAGE_NAME}"
echo "  docker stop portfolio-site || true"
echo "  docker rm portfolio-site || true"
echo "  docker run -d --name portfolio-site -p 3000:3000 --restart unless-stopped ${FULL_IMAGE_NAME}"