Project: full-stack notes manager structured as monorepo with separate frontend and backend using Yarn. Frontend: React, Vite, Zustand, backend: Node, Express, Mongoose, MongoDB.

Work to be completed:
Define standard structure rules for:
frontend (React app structure placeholder)
backend (Express structure placeholder)
Add optional /shared folder placeholder (for future use)

Please breake it down into small steps, each step describe in a single sentence. Print the first one and each time I type "done" post the next step.

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
