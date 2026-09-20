# Colin Hermack's Personal Website

Personal portfolio website showcasing projects, travel photography, and professional experience.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic theme switching with Geist UI
- **Dynamic Content**: MDX-based project posts with syntax highlighting
- **Photo Gallery**: EXIF data extraction for travel photos
- **Analytics**: Vercel Analytics and Speed Insights integration
- **Performance**: Optimized images and fast page loads

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX via next-mdx-remote
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Code Highlighting**: Sugar High
- **Photo Metadata**: Exifr
- **UI Components**: Geist

## Getting Started

### Prerequisites

- Node.js 24.x
- npm

### Installation

```bash
git clone https://github.com/ColinHermack/personal-website-3.git
cd personal-website-3
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/        # Reusable UI components
├── projects/         # Project posts and utilities
│   └── posts/       # MDX project content
├── photos/          # Photo gallery section
├── education/       # Education content
├── resume/          # Resume section
├── assets/          # Images and static files
├── global.css       # Global styles
├── layout.tsx       # Root layout
└── page.tsx         # Homepage
```

## Key Pages

- `/` - Homepage with bio, recent projects, tech stack, photos
- `/projects` - All projects with detailed MDX posts
- `/photos` - Travel photo gallery with EXIF data
- `/resume` - Professional resume
- `/education` - Education information

## Deployment

Deployed on Vercel with automatic deployments from main branch.

## Author

**Colin Hermack**
- GitHub: [@ColinHermack](https://github.com/ColinHermack)
- LinkedIn: [colinhermack](https://www.linkedin.com/in/colinhermack/)
- Email: colinhermack@gmail.com

## License

MIT
