# Restaurant App Deployment Guide

## Prerequisites
- Git repository (GitHub, GitLab, etc.)
- Node.js project ready for deployment

## Option 1: Vercel (Frontend) + Railway (Backend) - Recommended

### Deploy Backend to Railway

1. **Sign up at [Railway](https://railway.app)**
2. **Connect your GitHub repository**
3. **Create new project from GitHub repo**
4. **Configure environment variables:**
   ```
   NODE_ENV=production
   PORT=5000
   CORS_ORIGIN=https://your-frontend-domain.vercel.app
   ```
5. **Railway will auto-deploy from Backend folder**

### Deploy Frontend to Vercel

1. **Sign up at [Vercel](https://vercel.com)**
2. **Import your GitHub repository**
3. **Configure build settings:**
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Add environment variables:**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-domain.railway.app
   ```

## Option 2: Render (Full Stack)

1. **Sign up at [Render](https://render.com)**
2. **Create Web Service from GitHub**
3. **Use the render.yaml configuration provided**
4. **Both frontend and backend will deploy together**

## Option 3: Netlify (Frontend) + Heroku (Backend)

### Deploy Backend to Heroku

1. **Install Heroku CLI**
2. **Login and create app:**
   ```bash
   heroku login
   heroku create your-restaurant-backend
   ```
3. **Deploy:**
   ```bash
   cd Backend
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a your-restaurant-backend
   git push heroku main
   ```
4. **Set environment variables:**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set CORS_ORIGIN=https://your-frontend.netlify.app
   ```

### Deploy Frontend to Netlify

1. **Sign up at [Netlify](https://netlify.com)**
2. **Drag and drop the `frontend` folder after building:**
   ```bash
   cd frontend
   npm run build
   ```
3. **Or connect GitHub repository**
4. **Set environment variables in Netlify dashboard:**
   ```
   NEXT_PUBLIC_API_URL=https://your-restaurant-backend.herokuapp.com
   ```

## Option 4: DigitalOcean App Platform

1. **Sign up at [DigitalOcean](https://digitalocean.com)**
2. **Create new App**
3. **Connect GitHub repository**
4. **Configure both services:**
   - Backend: Node.js service from `/Backend`
   - Frontend: Static site from `/frontend`

## Post-Deployment Steps

1. **Update CORS origins in backend**
2. **Test all functionality**
3. **Set up custom domain (optional)**
4. **Configure SSL certificates**
5. **Set up monitoring and logging**

## Environment Variables Summary

### Backend (.env)
```
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-frontend-domain.com
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

## Troubleshooting

- **CORS errors**: Check CORS_ORIGIN environment variable
- **API connection issues**: Verify NEXT_PUBLIC_API_URL
- **Build failures**: Check Node.js version compatibility
- **Port issues**: Ensure PORT environment variable is set correctly

Choose the option that best fits your needs. Vercel + Railway is recommended for beginners due to their excellent free tiers and easy setup.