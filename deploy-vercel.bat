@echo off
title Deploy Jeet Shah Portfolio to Vercel
cd /d "%~dp0"

echo ===================================================
echo   Deploying Jeet Shah Portfolio to Vercel Production
echo ===================================================
echo.
echo Current Directory: %CD%
echo.

call vercel --prod

if %errorlevel% neq 0 (
    echo.
    echo [NOTE] If needed, log in when prompted, then select defaults.
    pause
)
