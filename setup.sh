#!/bin/bash
set -e

echo "Updating system..."
sudo apt update && sudo apt upgrade -y

echo "Installing Chromium and Puppeteer dependencies"
sudo apt install -y chromium-browser \
    libnss3 libatk-bridge2.0-0 libatk1.0-0 libcups2 libdbus-1-3 \
    libgdk-pixbuf2.0-0 libnspr4 libx11-xcb1 libxcomposite1 \
    libxdamage1 libxrandr2 xdg-utils libasound2 libgbm1


echo "Running npm install"
npm install

echo "Setup completed! Now you can run the bot with: npm start or node index.js"
