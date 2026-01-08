# Docker Troubleshooting Guide

Common Docker issues and solutions for the Weezard project.

## Network Timeout Issues

### Error: TLS handshake timeout

**Error Message:**
```
failed to solve: node:20-alpine: failed to resolve source metadata for docker.io/library/node:20-alpine: failed to do request: Head "https://registry-1.docker.io/v2/library/node/manifests/20-alpine": net/http: TLS handshake timeout
```

**Solutions:**

1. **Retry the build** (most common fix):
   ```bash
   docker compose --profile dev up --build
   ```

2. **Pre-pull the base image**:
   ```bash
   docker pull node:20-alpine
   docker compose --profile dev up --build
   ```

3. **Use BuildKit with retry**:
   ```bash
   DOCKER_BUILDKIT=1 docker compose --profile dev up --build
   ```

4. **Check Docker daemon**:
   ```bash
   docker info
   ```

5. **Restart Docker Desktop** (if on Windows/Mac)

6. **Use a different registry mirror** (if available):
   Add to `~/.docker/daemon.json`:
   ```json
   {
     "registry-mirrors": ["https://your-mirror.com"]
   }
   ```

### Error: Connection refused

**Solutions:**
- Ensure Docker daemon is running
- Check Docker Desktop status
- Restart Docker service

## Build Issues

### Error: Port already in use

**Error Message:**
```
Error response from daemon: ports are not available: exposing port TCP 0.0.0.0:3000 -> 127.0.0.1:0: listen tcp 0.0.0.0:3000: bind: Only one usage of each socket address
```

**Solutions:**

1. **Stop existing containers**:
   ```bash
   docker compose down
   ```

2. **Use a different port** (edit `docker-compose.yml`):
   ```yaml
   ports:
     - "3001:3000"  # Change host port
   ```

3. **Find and stop the process using port 3000**:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   
   # Linux/Mac
   lsof -ti:3000 | xargs kill -9
   ```

### Error: Build context too large

**Solutions:**
- Check `.dockerignore` includes all unnecessary files
- Exclude `node_modules`, `.next`, `.git` in `.dockerignore`
- Use multi-stage builds (already implemented)

## Container Issues

### Container exits immediately

**Check logs:**
```bash
docker logs weezard-dev
```

**Common causes:**
- Application crash on startup
- Missing environment variables
- Port conflicts

### Container won't start

**Check status:**
```bash
docker ps -a | grep weezard
```

**Restart container:**
```bash
docker compose restart dev
```

**Rebuild and restart:**
```bash
docker compose --profile dev up --build --force-recreate
```

## Performance Issues

### Slow builds

**Solutions:**
- Use BuildKit cache: `DOCKER_BUILDKIT=1`
- Pre-pull base images
- Use `.dockerignore` effectively
- Use Docker layer caching

### High memory usage

**Solutions:**
- Limit container memory in `docker-compose.yml`:
  ```yaml
  services:
    dev:
      mem_limit: 2g
  ```

## Quick Fixes

### Complete reset:
```bash
# Stop and remove containers
docker compose down

# Remove images
docker rmi weezard-dev weezard-prod

# Clean build cache
docker builder prune

# Rebuild
docker compose --profile dev up --build
```

### Check Docker health:
```bash
# Docker version
docker --version

# Docker info
docker info

# Test Docker
docker run hello-world
```

## Common Commands

```bash
# Build and start dev
docker compose --profile dev up --build

# Start in background
docker compose --profile dev up -d

# View logs
docker logs -f weezard-dev

# Stop containers
docker compose down

# Rebuild without cache
docker compose --profile dev build --no-cache

# Execute command in container
docker exec -it weezard-dev sh

# Check container status
docker ps
```

## Still Having Issues?

1. Check Docker Desktop is running
2. Verify network connectivity
3. Check Docker daemon logs
4. Try restarting Docker Desktop
5. Update Docker to latest version

