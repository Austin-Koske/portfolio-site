# Portfolio Site Docker Deployment Script
# Usage: .\deploy.ps1 [tag]

param(
    [string]$Tag = "latest"
)

# Configuration
$IMAGE_NAME = "portfolio-site"
$REGISTRY   = "docker.io"   # Change to your registry (e.g., ghcr.io, your-registry.com)
$USERNAME   = "fdsdark"    # Change to your Docker Hub username

$FULL_IMAGE_NAME = "$REGISTRY/$USERNAME/${IMAGE_NAME}:${Tag}"

Write-Host "Deploying Docker image for $IMAGE_NAME with tag '$Tag'..." -ForegroundColor Cyan
Write-Host "Full image name: $FULL_IMAGE_NAME" -ForegroundColor Yellow

# Build the Docker image
Write-Host "Building Docker image..." -ForegroundColor Green
docker build -t "${IMAGE_NAME}:${Tag}" .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to build Docker image" -ForegroundColor Red
    exit 1
}

# Tag the image for registry
Write-Host "Tagging image..." -ForegroundColor Green
docker tag "${IMAGE_NAME}:${Tag}" $FULL_IMAGE_NAME
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to tag Docker image" -ForegroundColor Red
    exit 1
}

# Push to registry
Write-Host "Pushing Docker image to registry..." -ForegroundColor Green
docker push $FULL_IMAGE_NAME
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push Docker image" -ForegroundColor Red
    exit 1
}

# Success message
Write-Host "Successfully pushed ${FULL_IMAGE_NAME}" -ForegroundColor Green
Write-Host ""
Write-Host "To deploy on your Raspberry Pi, run:" -ForegroundColor Cyan
Write-Host "  curl -sSL https://raw.githubusercontent.com/${USERNAME}/portfolio-site/main/pi-deploy.sh | bash -s ${Tag}"
Write-Host ""
