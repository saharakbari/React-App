# 🛍️ React Shopping App

A modern shopping web application built with **React**, **Redux Toolkit**, and **Vite**. This project demonstrates a simple e-commerce UI with state management using Redux Toolkit and fast development powered by Vite.

## 🚀 Features

- 🧾 Product listing and details
- 🛒 Add to cart and cart management
- 💾 State management with Redux Toolkit
- ⚡ Fast refresh and build with Vite
- ✅ ESLint integration for code quality
- 📁 Component-based architecture
- 📦 Dockerized setup for easy deployment
- 🔁 CI/CD pipeline using GitHub Actions

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) *(if used)*
- [Docker](https://www.docker.com/)
- [JavaScript] (or TypeScript if used)

## 🐳 Docker Support

This app is fully containerized. You can run it with:


docker build -t React-App .

docker run -p 3000:80 React-App



## 🔁 CI/CD Pipeline
This project includes a GitHub Actions workflow that:

Installs dependencies

Runs tests and linters

Builds the app

Can be extended to deploy to cloud platforms

Workflow file: .github/workflows/ci.yml



## 🛠️ Getting Started

### 1. Clone the repo


git clone https://github.com/your-username/react-shopping-app.git
cd react-shopping-app


### 2. Install dependencies
npm install

### 3. Run the app
npm run dev

### 4. Build for production
npm run build

📌 Notes
This project is created with Vite for super-fast builds 

State is managed globally using Redux Toolkit.

You can extend this project with features like user authentication, backend integration, filtering/sorting, and more.

Made with ❤️ by [sahar]


