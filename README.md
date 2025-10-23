# 🚀 React Task Manager - Week 3 Assignment

A modern, responsive React application built with Vite, Tailwind CSS, and cutting-edge development practices. This project demonstrates component architecture, state management, API integration, and responsive design.

## 📸 Screenshots

### Home Page
<img width="1920" height="908" alt="Screenshot (629)" src="https://github.com/user-attachments/assets/337cc345-8ca9-4b92-becb-d67729634392" />


### Task Manager

<img width="1913" height="868" alt="Screenshot (630)" src="https://github.com/user-attachments/assets/ef682e32-db35-415a-9651-0d62cb04c5b1" />




### API Data Integration

![API Data Page]

<img width="1907" height="848" alt="Screenshot (631)" src="https://github.com/user-attachments/assets/ebe8bb40-5d40-4251-a0dd-9ce2207892e9" />




## 🌟 Features

### ✅ Task 1: Project Setup
- ✅ React application created with Vite
- ✅ Tailwind CSS configured and optimized
- ✅ Organized project structure (components, pages, hooks, context)
- ✅ React Router for navigation

### ✅ Task 2: Component Architecture
- ✅ **Button Component**: Multiple variants (primary, secondary, danger, success, outline) with different sizes
- ✅ **Card Component**: Flexible content display with icons and variants
- ✅ **Navbar Component**: Responsive navigation with theme-aware styling
- ✅ **Footer Component**: Links and copyright information
- ✅ **Layout Component**: Includes Navbar and Footer with theme switching
- ✅ **Props-driven**: All components are customizable and reusable

### ✅ Task 3: State Management and Hooks
- ✅ **TaskManager Component** with full CRUD operations:
  - ➕ Add new tasks
  - ✅ Mark tasks as completed
  - 🗑️ Delete tasks
  - 🔍 Filter tasks (All, Active, Completed)
- ✅ **React Hooks Implementation**:
  - `useState` for component state management
  - `useEffect` for side effects and lifecycle management
  - `useContext` for theme management (light/dark mode)
  - `useLocalStorage` custom hook for data persistence

### ✅ Task 4: API Integration
- ✅ **JSONPlaceholder API Integration**:
  - 👥 Users endpoint with detailed information
  - 📝 Posts endpoint with content management
- ✅ **Advanced Features**:
  - 🔄 Loading states with animated spinners
  - ❌ Error handling with retry functionality
  - 📄 Pagination (6 items per page)
  - 🔍 Real-time search functionality
  - 📱 Tab-based navigation between data types

### ✅ Task 5: Styling with Tailwind CSS
- ✅ **Responsive Design**: Mobile-first approach (mobile, tablet, desktop)
- ✅ **Theme Switcher**: Light/dark mode with localStorage persistence
- ✅ **Tailwind Utilities**: Layout, spacing, typography, and colors
- ✅ **Custom Animations**:
  - Fade-in animations on page load
  - Hover effects and transitions
  - Loading spinners and micro-interactions
  - Gradient backgrounds and smooth transitions

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.4
- **Icons**: Lucide React 0.546.0
- **API**: JSONPlaceholder (fake REST API)
- **Development**: ESLint, PostCSS, Autoprefixer

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Multi-variant button component
│   ├── Card.jsx        # Content display card
│   ├── Footer.jsx      # Site footer with links
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation component
│   └── TaskManager.jsx # Task management component
├── context/            # React Context providers
│   └── ThemeContext.jsx # Theme management
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # localStorage persistence
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Tasks.jsx       # Task management page
│   └── ApiData.jsx     # API integration demo
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and animations
```

## 🎨 Design Features

### Responsive Design
- **Mobile**: Optimized for screens < 640px
- **Tablet**: Responsive layout for 640px - 1024px
- **Desktop**: Full-featured layout for > 1024px

### Theme System
- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes with dark backgrounds
- **Persistence**: Theme preference saved in localStorage
- **System Preference**: Respects user's OS theme setting

### Animations & Interactions
- **Page Transitions**: Smooth fade-in effects
- **Hover States**: Interactive feedback on all clickable elements
- **Loading States**: Animated spinners and skeleton screens
- **Micro-interactions**: Button press effects and form feedback

## 🔧 API Integration Details

### Endpoints Used
- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Posts**: `https://jsonplaceholder.typicode.com/posts`

### Features Implemented
- **Data Fetching**: Async/await with error handling
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages with retry options
- **Search**: Real-time filtering of API results
- **Pagination**: Efficient data display with page navigation
- **Caching**: Basic client-side data persistence

## 🧪 Testing the Application

### Task Management
1. Navigate to `/tasks`
2. Add new tasks using the input form
3. Mark tasks as complete using checkboxes
4. Filter tasks using All/Active/Completed buttons
5. Delete tasks using the delete button
6. Verify persistence by refreshing the page

### API Integration
1. Navigate to `/api`
2. Switch between Users and Posts tabs
3. Use the search functionality
4. Navigate through pages using pagination
5. Test error handling by disconnecting internet

### Theme Switching
1. Use the theme toggle button in the header
2. Verify theme persistence across page refreshes
3. Test responsive design by resizing the browser

## 🚀 Deployment

This application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

## 📝 Assignment Completion Checklist

- ✅ **Task 1**: Project Setup with Vite, Tailwind, and React Router
- ✅ **Task 2**: Component Architecture with reusable components
- ✅ **Task 3**: State Management using React hooks and Context API
- ✅ **Task 4**: API Integration with JSONPlaceholder
- ✅ **Task 5**: Responsive styling with Tailwind CSS
- ✅ **Bonus**: Custom animations, error handling, and accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API for testing
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

---

**Deployed URL**: [Add your deployment URL here]

**GitHub Repository**: [Add your GitHub repo URL here]
