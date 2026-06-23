gh auth status
git switch -c WORK
git push -u origin WORK

git switch main && git fetch
git merge WORK && git push
git push —-delete origin WORK && git branch -d WORK
git remote prune origin && git fetch —-prune

git fetch origin main:main && git push
gh pr create --fill && gh pr merge --merge --delete-branch
git fetch --prune

Context:
The project: full-stack notes app
Structure: monorepo with separate frontend and backend workspaces
Stack: React, Bootstrap, react-bootstrap, Javascript, Yarn v4.15.0, Vite, Zustand, TanStack Query, Node v25.9.0, Express, Mongoose, MongoDB Atlas
Gen: latest stable

The task:

Break the work into small steps, serve one step each time I type "done" till the acceptance criteria met, one sentence per step.

frontend environment variable access format: import.meta.env.VITE_API_URL

notes-manager-monorepo/
├── package.json # Root package.json configuring Yarn workspaces
├── backend/
│ ├── src/
│ │ ├── config/ # Database connection (Mongoose/MongoDB)
│ │ ├── controllers/ # Request handlers and business logic
│ │ ├── middleware/ # Auth, error handling, validation guards
│ │ ├── models/ # Mongoose schemas and models (e.g., Note, User)
│ │ ├── routes/ # Express route definitions
│ │ └── app.js # Express app initialization and middleware setup
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── assets/ # Static assets like images or icons
│ │ ├── components/ # Reusable UI components (buttons, inputs)
│ │ ├── features/ # Feature-based modules (e.g., notes, auth)
│ │ ├── hooks/ # Custom React hooks
│ │ ├── store/ # Zustand state management slices
│ │ ├── App.jsx # Main application component
│ │ └── main.jsx # Vite entry point
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
└── shared/ # Optional folder for shared types, constants, or helpers
└── index.ts # Future entry point for shared code

Backend: 5000
Frontend: 5173
