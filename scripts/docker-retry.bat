@echo off
REM Docker Build Retry Script for Windows
REM Retries Docker build with exponential backoff on network failures

set MAX_RETRIES=3
set RETRY_DELAY=5

echo Starting Docker build with retry logic...

for /L %%i in (1,1,%MAX_RETRIES%) do (
    echo Attempt %%i of %MAX_RETRIES%...
    
    docker compose --profile dev up --build
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Build successful!
        exit /b 0
    )
    
    if %%i LSS %MAX_RETRIES% (
        echo ❌ Build failed. Retrying in %RETRY_DELAY% seconds...
        timeout /t %RETRY_DELAY% /nobreak >nul
        set /a RETRY_DELAY*=2
    )
)

echo ❌ Build failed after %MAX_RETRIES% attempts
echo Trying to pre-pull base image...
docker pull node:20-alpine

echo Retrying build with pre-pulled image...
docker compose --profile dev up --build

exit /b %ERRORLEVEL%

