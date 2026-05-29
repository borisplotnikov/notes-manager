# 📝 Full-Stack Notes Manager

<p>
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-24.16.0-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.21.x-05339C?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-7.0.x-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
</p>

This is a full-stack notes manager allowing users to create and edit notes in personal workspaces, managed as a highly optimized monorepo using Yarn Workspaces.

---

## 🚀 Step-by-Step How to Start the Notes Manager:

### Prerequisites:

- [Visual Studio Code (VSCode)](https://code.visualstudio.com/) (or your editor of choice)
- [Git](https://git-scm.com/) (for cloning the repository)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (for cloud-based database – free tier available)
- [Node.js](https://nodejs.org/) (v24.16.0 recommended)
- [Yarn v4.15.0](https://yarnpkg.com/) (This project uses Yarn Berry/Modern Workspaces for native monorepo management. Using yarn instead of npm is required to ensure dependencies are properly linked.)

### Repository:

- Clone the repository:

  ```bash
  git clone https://github.com/BorisPlotnikov/full-stack-notes-manager.git
  cd full-stack-notes-manager
  ```

  ### Dependencies:

- Install project dependencies across all workspaces simultaneously from the root:

  ```bash
  yarn install
  ```

  ### Database:

- Set up a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to store your notes.
- Ensure your current IP address is whitelisted in your Atlas Network Access settings.

### Environment variables:

- Change names of `.env.Example` files to `.env` in both `backend/` and `frontend/`:

  ```bash
  cp backend/.env.Example backend/.env
  cp frontend/.env.Example frontend/.env

  ```

- After changing the names open `backend/.env` and replace the placeholders `<username>`, `<password>`, and `<dbname>` with your actual MongoDB credentials in the MongoDB URI: `MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority`

## 📁 Project Structure

This monorepo uses Yarn Workspaces to isolate the frontend and backend into independent packages while sharing a single root configuration.

```text
.
├── backend/               # Backend API workspace (Node.js, Express, Mongoose)
│   ├── src/               # Express source code (controllers, models, routes)
│   └── package.json
├── frontend/              # Frontend UI workspace (React, Vite, Zustand, TanStack Query)
│   ├── public/            # Static assets
│   ├── src/               # React application source code
│   ├── index.html
│   └── package.json
├── shared/                # Optional shared types, schemas, or utilities
├── package.json           # Root package.json defining Yarn Workspaces
└── yarn.lock              # Single lockfile managing dependencies across all workspaces
```

## 💻 Running the Application

All commands must be executed from the **root directory** of the project.

### Launching Development Servers

To run both the frontend (Vite) and backend (Node.js) concurrently with a single command:

```bash
yarn dev
```

## 🧠 Tech Stack

### Backend

- **Node.js + Express** (RESTful API architecture)
- **MongoDB + Mongoose** (ODM modeling)
- **dotenv** & centralized error-handling middlewares

### Frontend

- **React + Vite** (Fast Refresh and highly optimized bundling)
- **Zustand** (Ultra-lightweight, atomic global state management)
- **TanStack Query (React Query)** (Declarative server-state fetching, caching, and background mutations)

## 💻 Scripts

Run these commands directly from the root directory:

| Command               | Description                                               |
| :-------------------- | :-------------------------------------------------------- |
| `yarn dev`            | Runs both frontend (Vite) and backend (Node) concurrently |
| `yarn dev:frontend`   | Runs only the frontend development server                 |
| `yarn dev:backend`    | Runs only the backend development server                  |
| `yarn build`          | Safely builds both workspaces sequentially for production |
| `yarn build:frontend` | Builds the frontend application using Vite                |
| `yarn build:backend`  | Builds/prepares the backend application                   |
| `yarn lint`           | Runs ESLint checks across the entire monorepo             |
| `yarn format`         | Automatically fixes code formatting using Prettier        |

## 📦 Features

- **Modern Monorepo**: Managed effortlessly with Modern Yarn Workspaces (`@notes-manager/frontend` and `@notes-manager/backend`).
- **Robust Async Server State**: TanStack Query manages query caching, background updating, and mutations seamlessly.
- **Clean Local State**: Fast, clean separation of UI state using Zustand stores instead of heavy context boilerplate.
- **Pre-commit Hooks**: Husky & lint-staged protect branch stability by ensuring code passes style guides and formatting before committing.

## 🧪 Testing

Tests can be added and scaled via root-level scripts using:

- **Vitest** or **React Testing Library** (frontend)
- **Supertest** (backend)

_(Configurations ready to be implemented)_

## 📄 License

This project is licensed under the [MIT License](./LICENSE) © 2026 [Boris Plotnikov](https://github.com/BorisPlotnikov)
