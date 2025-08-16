#!/bin/bash

# Raspberry Pi Deployment Script for Portfolio Site
# Usage: ./pi-deploy.sh [tag]

set -e

# Configuration
IMAGE_NAME="portfolio-site"
REGISTRY="docker.io"  # Change to match your registry
USERNAME="fdsdark"  # Change to your Docker Hub username
CONTAINER_NAME="portfolio-site"
PORT="3000"

# Get tag from argument or use 'latest'
TAG=${1:-latest}
FULL_IMAGE_NAME="${REGISTRY}/${USERNAME}/${IMAGE_NAME}:${TAG}"

echo "Deploying Portfolio Site on Raspberry Pi..."
echo "Image: ${FULL_IMAGE_NAME}"

# Pull the latest image
echo "Pulling latest image..."
docker pull ${FULL_IMAGE_NAME}

# Stop and remove existing container if it exists
echo "Stopping existing container..."
docker stop ${CONTAINER_NAME} 2>/dev/null || echo "No existing container to stop"
docker rm ${CONTAINER_NAME} 2>/dev/null || echo "No existing container to remove"

# Run the new container
echo "Starting new container..."
docker run -d \
  --name ${CONTAINER_NAME} \
  -p ${PORT}:3000 \
  --restart unless-stopped \
  ${FULL_IMAGE_NAME}

# Show container status
echo "Deployment complete!"
echo ""
echo "Container status:"
docker ps | grep ${CONTAINER_NAME} || echo "Container not found"
echo ""
echo "Your portfolio site should be available at:"
echo "  http://localhost:${PORT}"
echo "  http://$(hostname -I | awk '{print $1}'):${PORT}"
echo ""
echo "To view logs: docker logs -f ${CONTAINER_NAME}"
echo "To stop: docker stop ${CONTAINER_NAME}"