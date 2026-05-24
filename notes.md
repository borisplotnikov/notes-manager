Context: building a full-stack notes app. Monorepo with separate frontend and backend workspaces. Frontend: React, Vite, Zustand, TanStack Query. Backend: Node, Express, Mongoose, MongoDB Atlas

Work to be completed:
Define standard structure rules for:
frontend (React app structure placeholder)
backend (Express structure placeholder)
Add optional /shared folder placeholder (for future use)

Break the work into small steps, serve one step at the time each time I type "done". One sentence per step.

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

Backend: 3000
Frontend: 5173
