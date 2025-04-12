# V-Solution - English Learning Platform

A modern platform for finding and comparing English learning centers, with AI-powered recommendations and VR experiences.

## Features

- AI-powered center comparison
- VR center tours
- Practice tests
- Community discussions
- Learning resources
- Center search and reviews

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- AI Integration
- VR Integration
- Prisma (Database)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Prerequisites

- Git installed on your system
- GitHub account
- Vercel/Netlify account (for deployment)

### Steps to Deploy

1. **Initialize Git and Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/i-view-solutions.git
   git push -u origin main
   ```

2. **Deploy to Vercel (Recommended)**
   - Go to [Vercel](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Configure settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `next build`
     - Output Directory: .next
   - Add environment variables if needed
   - Click "Deploy"

3. **Deploy to Netlify (Alternative)**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     - Build command: `next build`
     - Publish directory: `out`
   - Add environment variables if needed
   - Click "Deploy site"

### Environment Variables

Add these to your hosting platform:

```env
DATABASE_URL="your_database_url"
NEXT_PUBLIC_API_URL="your_api_url"
# Add other environment variables as needed
```

### Custom Domain Setup

1. **Vercel**
   - Go to Project Settings > Domains
   - Add your domain
   - Follow DNS configuration instructions

2. **Netlify**
   - Go to Site Settings > Domain Management
   - Add your domain
   - Follow DNS configuration instructions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
