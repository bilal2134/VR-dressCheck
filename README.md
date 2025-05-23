# FitCheck Frontend

A modern, interactive virtual fitting room web app built with React, Tailwind CSS, Three.js (React Three Fiber), Framer Motion, and more.

## Features
- 3D avatar and clothing overlay (GLB/GLTF support)
- Animated, responsive landing page with parallax and scroll effects
- Custom cursor and particle trail
- Draggable, interactive 3D avatar
- Authentication pages (Signup/Login) with social login buttons
- Horizontal scrolling brand strip
- Fully responsive, modern UI

---

## Getting Started

### 1. Clone the Repository

```
git clone <your-repo-url> fitcheck-frontend
cd fitcheck-frontend
```

### 2. Install Node.js

Make sure you have Node.js (v18 or later recommended) and npm installed.  
Check with:
```
node -v
npm -v
```

### 3. Install Dependencies

If you are starting from scratch (Vite + React):
```
npm create vite@latest fitcheck-frontend -- --template react
cd fitcheck-frontend
```

Install all required libraries:
```
npm install tailwindcss postcss autoprefixer framer-motion @react-three/fiber three @react-three/drei gsap
npm install tailwindcss postcss autoprefixer
npm install framer-motion
npm install three @react-three/fiber @react-three/drei
npm install gsap
npm install react-router-dom
npm install @heroicons/react
npm install react-icons
npm install react-scroll
```

Initialize Tailwind CSS:
```
npx tailwindcss init -p
```

### 4. Configure Tailwind

Edit `tailwind.config.js` as follows:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#30d5c8', // turquoise
        gray: {
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
          500: '#71717a',
          400: '#a1a1aa',
          300: '#d4d4d8',
          200: '#e4e4e7',
          100: '#f4f4f5',
        },
      },
    },
  },
  plugins: [],
}
```

Replace `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 5. Add 3D Models and Assets
- Place your 3D avatar models (e.g., `avatar.glb`, `avatar2.glb`) in the `public/` folder.
- Place all images (brand logos, team photos, etc.) in `src/assets/`.

---

### 6. Run the Development Server

```
npm run dev
```
Open the local URL shown in your terminal (usually http://localhost:5173).

---

## Uploading to GitHub

### 1. Initialize Git
If you haven’t already:
```
git init
```

### 2. Create a .gitignore File
A `.gitignore` file is already included with:
```
node_modules/
dist/
.env
.DS_Store
*.log
.vscode/
.idea/
*.local
```

### 3. Add and Commit Your Code
```
git add .
git commit -m "Initial commit: FitCheck frontend"
```

### 4. Create a New GitHub Repository
- Go to https://github.com and create a new repository (e.g., `fitcheck-frontend`).
- Do NOT initialize with a README, .gitignore, or license (since you already have them locally).

### 5. Add the Remote and Push
```
git remote add origin https://github.com/<your-username>/fitcheck-frontend.git
git branch -M main
git push -u origin main
```

---

## Notes
- For production, build with:  
  ```sh
  npm run build
  ```
- You can deploy the `dist/` folder to Vercel, Netlify, or any static hosting.

---

## Customization
- Update colors in `tailwind.config.js` for branding.
- Replace 3D models and images in `public/` and `src/assets/`.
- Edit components in `src/components/` and pages in `src/pages/` as needed.

---

If you have any issues, make sure all dependencies are installed and your Node.js version is up to date.

Happy coding!