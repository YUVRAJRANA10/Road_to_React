# 🚀 Road to React

A comprehensive collection of React projects showcasing my learning journey from basics to advanced concepts. This monorepo contains multiple React applications built with Vite, demonstrating various concepts, libraries, and best practices.

## 📁 Project Structure

```
Road_to_React/
├── 📦 package.json              # Root package.json with monorepo scripts
├── 🔧 vercel.json               # Vercel deployment configuration
├── 📝 README.md                 # This file
├── 🙈 .gitignore               # Git ignore rules
│
├── 📱 React Projects (Vite):
│   ├── 02counter/               # Simple counter app
│   ├── background-changer/      # Dynamic background color changer
│   ├── Calculator/              # Calculator application
│   ├── CurrencyConverter/       # Real-time currency converter
│   ├── password-generator/      # Secure password generator
│   ├── React-router-site/       # React Router demonstration
│   ├── tailwind-props-react/    # Tailwind CSS with props
│   └── vite-react/             # Basic Vite React setup
│
├── 📱 Classic React:
│   └── 0basicreact/            # Create React App project
│
└── 🔧 Custom Implementation:
    └── customReact/            # Custom React implementation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (≥18.0.0)
- npm (≥8.0.0)
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/YUVRAJRANA10/Road-to-React.git
cd Road-to-React

# Install all dependencies
npm run install:all
```

### Development

#### Run individual projects:
```bash
# Counter App
npm run dev:counter

# Background Changer
npm run dev:background-changer

# Calculator
npm run dev:calculator

# Currency Converter
npm run dev:currency-converter

# Password Generator
npm run dev:password-generator

# React Router Site
npm run dev:router-site

# Tailwind Props Demo
npm run dev:tailwind-props

# Basic Vite React
npm run dev:vite-react
```

#### Build projects:
```bash
# Build all projects
npm run build:all

# Build individual projects
npm run build:counter
npm run build:currency-converter
# ... and so on
```

## 📋 Project Details

### Main Vite Projects

| Project | Description | Tech Stack | Live Demo |
|---------|-------------|------------|-----------|
| **React Router Site** | Multi-page application with routing | React, React Router, Tailwind CSS | [Live Demo](https://react-router-site-a4cqb2n0n-yuvrajrana10s-projects.vercel.app) |
| **Currency Converter** | Real-time currency conversion | React, API Integration, Tailwind CSS | [Live Demo](https://currency-converter-mde28jbgk-yuvrajrana10s-projects.vercel.app) |
| **Background Changer** | Dynamic background color picker | React, useState Hook | Coming Soon |
| **Password Generator** | Secure password generator with options | React, useState, useEffect | Coming Soon |
| **Counter App** | Simple increment/decrement counter | React, useState Hook | Coming Soon |
| **Calculator** | Basic calculator application | React, useState Hook | Coming Soon |
| **Tailwind Props** | Component props with Tailwind styling | React, Tailwind CSS, Props | Coming Soon |

### Learning Projects

| Project | Description | Purpose |
|---------|-------------|---------|
| **Basic React** | Create React App setup | Understanding React basics |
| **Custom React** | Custom React implementation | Learning React internals |
| **Vite React** | Basic Vite setup | Modern build tool familiarity |

## 🛠️ Technologies Used

- **Frontend Framework**: React 19+
- **Build Tool**: Vite 7+
- **Styling**: 
  - Tailwind CSS
  - Vanilla CSS
- **Routing**: React Router DOM
- **Development Tools**:
  - ESLint
  - PostCSS
  - Autoprefixer
- **Deployment**: Vercel

## 📚 Learning Concepts Covered

### React Fundamentals
- ✅ Components and JSX
- ✅ Props and State
- ✅ Event Handling
- ✅ Conditional Rendering
- ✅ Lists and Keys

### React Hooks
- ✅ useState
- ✅ useEffect
- ✅ Custom Hooks
- ✅ useCallback
- ✅ useMemo

### Advanced Concepts
- ✅ React Router
- ✅ API Integration
- ✅ Form Handling
- ✅ Component Composition
- ✅ State Management

### Styling & UI
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ Component Styling
- ✅ CSS Modules

## 🚀 Deployment

This monorepo is configured for **individual project deployments** on Vercel. Each project folder is deployed as a separate application with its own domain.

### Individual Project Deployments
Each project gets its own Vercel deployment:

| Project | Live Demo | Repository Folder |
|---------|-----------|-------------------|
| **React Router Site** | [Live Demo](https://react-router-site-a4cqb2n0n-yuvrajrana10s-projects.vercel.app) | `React-router-site/` |
| **Currency Converter** | [Live Demo](https://currency-converter-mde28jbgk-yuvrajrana10s-projects.vercel.app) | `CurrencyConverter/` |
| **Background Changer** | Coming Soon | `background-changer/` |
| **Password Generator** | Coming Soon | `password-generator/` |
| **Tailwind Props** | Coming Soon | `tailwind-props-react/` |
| **Counter App** | Coming Soon | `02counter/` |

### Quick Deploy Commands
```bash
# Deploy from root directory
npm run deploy:router-site
npm run deploy:currency-converter
npm run deploy:background-changer
npm run deploy:password-generator
npm run deploy:tailwind-props
npm run deploy:counter
```

### Manual Deployment
```bash
# Navigate to any project folder and deploy
cd React-router-site
vercel --prod
```

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## 🔧 Monorepo Management

### Available Scripts

```bash
# Development
npm run dev                    # Show available dev commands
npm run dev:<project-name>     # Run specific project

# Building
npm run build:all             # Build all projects
npm run build:<project-name>  # Build specific project

# Maintenance
npm run install:all           # Install all dependencies
npm run clean:all            # Clean all build artifacts
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**YUVRAJ RANA**
- GitHub: [@YUVRAJRANA10](https://github.com/YUVRAJRANA10)
- Learning Journey: React Development

## 🎯 Future Plans

- [ ] Add testing with Jest and React Testing Library
- [ ] Implement state management with Redux/Zustand
- [ ] Add TypeScript to projects
- [ ] Create more advanced projects
- [ ] Add performance optimization examples
- [ ] Implement PWA features

---

*This repository represents my learning journey in React development. Each project builds upon previous concepts and introduces new ones. Feel free to explore, learn, and contribute!*