# Nico Aramy – Personal Portfolio

A modern, responsive personal portfolio website built with **React** and custom CSS. Showcases professional experience, projects, and education, with a clean UI and smooth user experience.

---

## ✨ Features

- Responsive design for desktop & mobile
- Animated loading spinner on first load
- About, Experience, Projects, and Education sections
- Interactive project cards with external links
- Sidebar with social media links
- Custom cursor and animated highlights
- All images and logos loaded locally for fast performance
- Built with [React](https://react.dev/) and custom CSS (no CSS framework)
- Deployed using [Vercel](https://vercel.com/)
- Uses [Inter](https://fonts.google.com/specimen/Inter) typeface

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/naiko-coder/portoku.git
   cd portoku
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

To create a production build:

```sh
npm run build
# or
yarn build
```

The optimized build will be in the `build/` folder.

---

## 🌐 Deployment

This site is deployed using [Vercel](https://vercel.com/).  
You can deploy your own by connecting your GitHub repository to Vercel and following their deployment instructions.

---

## 📁 Folder Structure

```
public/
  index.html
  favicon.ico
  webdevlogo.png
  ...
src/
  App.js
  App.css
  components/
    Sidebar.js
    ProjectCard.js
    ...
```

---

## 🛠️ Customization

- Edit your information, experience, projects, and education in `src/App.js`.
- Change images and icons in the `public/` folder.
- Adjust styles in `src/App.css` and component CSS files.
- To add new sections or features, create new components in `src/components/`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
