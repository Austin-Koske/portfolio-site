#!/usr/bin/env bash
# Builds and pushes the portfolio site image to GHCR.
# Usage: ./docker-stuff/publish.sh [tag]
#
# Reads credentials from .env.local in the repo root:
#   GHCR_USER=your-github-username
#   GHCR_PAT=github_pat_...   (write:packages scope)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMAGE="ghcr.io/fds-dark/portfolio-site"
TAG="${1:-latest}"

# Load .env.local
if [[ -f "$REPO_ROOT/.env.local" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$REPO_ROOT/.env.local"
  set +a
else
  echo "Error: .env.local not found at $REPO_ROOT/.env.local" >&2
  exit 1
fi

: "${GHCR_USER:?GHCR_USER not set in .env}"
: "${GHCR_PAT:?GHCR_PAT not set in .env}"

echo "Logging in to ghcr.io..."
echo "$GHCR_PAT" | docker login ghcr.io -u "$GHCR_USER" --password-stdin

echo "Building $IMAGE:$TAG ..."
docker build --no-cache \
  --build-arg NEXT_PUBLIC_NODE_ENV=production \
  -t "$IMAGE:$TAG" \
  "$REPO_ROOT"

echo "Pushing $IMAGE:$TAG ..."
docker push "$IMAGE:$TAG"

echo "Done. Image pushed to $IMAGE:$TAG"
