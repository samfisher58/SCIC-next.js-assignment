#!/bin/bash

echo "🚀 Restaurant App Deployment Script"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit for deployment"
fi

echo "📦 Installing dependencies..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd Backend
npm install --production
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install --production
cd ..

echo "🏗️  Building frontend..."
cd frontend
npm run build
cd ..

echo "✅ Project ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Choose a deployment platform:"
echo "   - Vercel (frontend) + Railway (backend) - Recommended"
echo "   - Render (full stack)"
echo "   - Netlify (frontend) + Heroku (backend)"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"