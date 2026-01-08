#!/bin/bash

# Docker Build Retry Script
# Retries Docker build with exponential backoff on network failures

MAX_RETRIES=3
RETRY_DELAY=5

echo "Starting Docker build with retry logic..."

for i in $(seq 1 $MAX_RETRIES); do
  echo "Attempt $i of $MAX_RETRIES..."
  
  if docker compose --profile dev up --build; then
    echo "✅ Build successful!"
    exit 0
  fi
  
  if [ $i -lt $MAX_RETRIES ]; then
    echo "❌ Build failed. Retrying in ${RETRY_DELAY} seconds..."
    sleep $RETRY_DELAY
    RETRY_DELAY=$((RETRY_DELAY * 2)) # Exponential backoff
  fi
done

echo "❌ Build failed after $MAX_RETRIES attempts"
echo "Trying to pre-pull base image..."
docker pull node:20-alpine

echo "Retrying build with pre-pulled image..."
docker compose --profile dev up --build

exit $?

