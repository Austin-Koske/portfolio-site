# Portfolio Site Docker Deployment Script
# Usage: .\deploy.ps1 [tag]

param(
    [string]$Tag = "latest"
)

# Configuration
$IMAGE_NAME = "portfolio-site"
$REGISTRY   = "docker.io"    # e.g., ghcr.io or your-registry.com
$USERNAME   = "fdsdark"      # Your Docker Hub username

$FULL_IMAGE_NAME = "$REGISTRY/$USERNAME/${IMAGE_NAME}:${Tag}"

Write-Host "Deploying Docker image for $IMAGE_NAME with tag '$Tag'..." -ForegroundColor Cyan
Write-Host "Full image name: $FULL_IMAGE_NAME" -ForegroundColor Yellow

# Ensure buildx builder exists
Write-Host "Ensuring Docker Buildx is initialized..." -ForegroundColor Green
docker buildx create --use --name multi 2>$null | Out-Null
docker buildx inspect --bootstrap | Out-Null

# Build & push multi-arch image (amd64 + arm64)
Write-Host "Building multi-arch image (amd64 + arm64)..." -ForegroundColor Green
docker buildx build `
    --platform linux/amd64,linux/arm64 `
    -t $FULL_IMAGE_NAME `
    --push .

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to build/push multi-arch Docker image" -ForegroundColor Red
    exit 1
}

Write-Host "Successfully built and pushed $FULL_IMAGE_NAME" -ForegroundColor Green
Write-Host ""
Write-Host "To deploy on your Raspberry Pi, run:" -ForegroundColor Cyan
Write-Host "  curl -sSL https://raw.githubusercontent.com/${USERNAME}/portfolio-site/main/pi-deploy.sh | bash -s ${Tag}"
Write-Host ""
