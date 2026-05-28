git switch main && git fetch
git merge work && git push
git push —-delete origin work && git branch -d work
git remote prune origin && git fetch —-prune

git fetch origin main:main
git push origin work
gh pr create --title --body && gh pr merge --merge --delete-branch (--fill)
git switch main && git pull origin main
git branch -d work && git fetch --prune (git config --global fetch.prune true)

Context: building a full-stack notes app as a monorepo with separate frontend and backend workspaces with latest stable stack including React, Javascript, Yarn, React, Vite, Zustand, TanStack Query, Node, Express, Mongoose, MongoDB Atlas.

The story to work on:

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
