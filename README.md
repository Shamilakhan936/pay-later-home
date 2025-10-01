# PayLater - React + Tailwind + Lucide Icons

A modern React application built with Vite, styled with Tailwind CSS, and enhanced with Lucide React icons.

## 🚀 Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎯 **Lucide Icons** - Beautiful, customizable SVG icons
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Modern UI** - Clean, professional interface

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Getting Started

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
├── index.css        # Global styles with Tailwind imports
└── assets/          # Static assets
```

## 🎯 Key Components

The application includes:

- **Header** - Navigation with mobile menu
- **Hero Section** - Welcome message with call-to-action
- **Feature Cards** - Showcase of key features
- **Interactive Demo** - React state management example
- **Footer** - Links and branding

## 🎨 Styling

This project uses Tailwind CSS for styling. Key features:

- Responsive design with mobile-first approach
- Gradient backgrounds and modern color schemes
- Hover effects and smooth transitions
- Clean typography and spacing

## 🔧 Customization

### Adding New Icons

Import icons from Lucide React:

```jsx
import { Heart, Star, ShoppingCart } from 'lucide-react'

// Use in your component
<Heart className="h-6 w-6 text-red-500" />
```

### Tailwind Configuration

The Tailwind configuration is in `tailwind.config.js`. You can extend the theme, add custom colors, or modify the configuration as needed.

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).