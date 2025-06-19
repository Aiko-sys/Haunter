#!/bin/bash
set -e

echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

echo "Updating bot repository..."
git pull

echo "Installing/updating npm dependencies..."
npm install

echo "Update completed! You can restart the bot if needed."
