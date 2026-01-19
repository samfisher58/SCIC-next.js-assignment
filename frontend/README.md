# GourmetHaven Restaurant App

A modern Next.js 15/16 application built with Tailwind CSS.

## Features

- **Landing Page**: 7 beautiful sections demonstrating the restaurant's vibe.
- **Menu/Items**: List of dishes and detailed views for each.
- **Authentication**: Mock login system using cookies/middleware.
  - **Credentials**: `admin@example.com` / `password`

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Route Summary

- `/`: Public Landing Page
- `/login`: Mock Login Page
- `/items`: Public Menu List
- `/items/[id]`: Product Details
- `/add-item`: Protected Route (Requires Login)
