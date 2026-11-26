@echo off
title Jeet Shah Portfolio - Local Dev Server
cd /d "%~dp0"

echo ============================================
echo   Starting Jeet Shah Portfolio...
echo ============================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js was not found in PATH.
    echo Please install Node.js from https://nodejs.org/ and try again.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing dependencies first...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed.
        pause
        exit /b 1
    )
)

echo Starting Vite dev server and opening your browser...
echo Keep this window open while viewing your site. Press Ctrl+C to stop.
echo.

call npm run dev -- --open

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Dev server exited with an error.
    pause
)
