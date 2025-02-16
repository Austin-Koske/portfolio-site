#!/bin/bash

# Pull the latest image
docker pull ghcr.io/fds-dark/portfolio-site

# Stop and remove existing container
docker stop portfolio-site
docker rm portfolio-site

# Start new container
docker run -d -p 3000:3000 --name portfolio-site ghcr.io/fds-dark/portfolio-site