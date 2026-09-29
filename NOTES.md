gh auth status
git switch -c WORK (create and switch to)
git push -u origin WORK (push) (create push to it and track the local)

git switch main && git fetch (switch and update the tracking)
git merge WORK && git push
git push —-delete origin WORK && git branch -d WORK
git remote prune origin && git fetch —-prune

git fetch origin main:main && git push
gh pr create --fill && gh pr merge --merge --delete-branch
git fetch --prune

Context:
The project: full-stack notes app
Structure: monorepo with separate frontend and backend workspaces
Stack: React, Bootstrap, react-bootstrap, React Router v7, Javascript, Yarn v4.15.0, Vite, Zustand, Fetch, TanStack Query, Node v25.9.0, Express, Mongoose, MongoDB Atlas
Gen: latest stable

Epic: Frontend Application Architecture

Story: As a developer, I want a unified API client and caching layer so that data fetching is efficient, predictable, and handled uniformly across the app.

Sprint: Configure API Client Layer & Async Data Fetching (TanStack Query)

Task: Add authentication-header injection to the API client

Milestone: The API client automatically adds authentication credentials to requests when credentials are available.

Acceptance Criteria:

The API client obtains the authentication credential from the application's auth source.

The appropriate authentication header is added to authenticated requests.

Requests without authentication credentials do not receive an invalid authentication header.

Individual API calls do not need to manually construct authentication headers.

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
yarn build + yarn vite preview --host
