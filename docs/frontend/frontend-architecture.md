# Frontend Architecture

## Purpose

This document defines the frontend architecture for the notes application.

It establishes how frontend components are categorized, organized, named, and reused to keep the application simple, consistent, and maintainable.

## Overview

The frontend is part of a full-stack notes application organized as a monorepo with separate frontend and backend workspaces.

- React
- JavaScript
- Vite
- Bootstrap
- React-Bootstrap
- React Router v7
- Zustand
- Fetch
- TanStack Query
- Yarn 4.15.0
- Node.js 25.9.0

Bootstrap and React-Bootstrap remain the underlying UI toolkit.

The application should use React-Bootstrap components directly where appropriate and introduce custom components when an application-specific abstraction or repeated UI pattern provides value.

## Frontend Structure

The frontend organizes components and pages by responsibility.

```text
src/
├── components/
│   ├── ui/
│   ├── feedback/
│   ├── layout/
│   ├── navigation/
│   ├── routing/
│   └── notes/
├── pages/
└── ...
```

- `components/ui/` — generic reusable UI components.

- `components/feedback/` — reusable application feedback patterns.

- `components/layout/` — shared page structure.

- `components/navigation/` — application navigation.

- `components/routing/` — route access and routing behavior.

- `components/notes/` — notes/domain-specific components.

- `pages/` — complete route-level screens.

---

## Recurring UI Patterns

The frontend contains recurring UI patterns that should be implemented consistently across the application.

Initial patterns include:

- Buttons and form controls

- Loading states

- Error states

- Empty states

- Alerts and notifications

- Modal dialogs and confirmations

- Application navigation

- Shared page layout and containers

- Note display

- Note creation and editing

- Note deletion

---

## Component Categories

### Core UI Components

Core UI components are generic, reusable UI building blocks that are not specific to notes or a particular page.

The initial Core UI components are:

- `Alert.jsx`

- `Button.jsx`

- `Card.jsx`

- `Input.jsx`

- `Modal.jsx`

- `Spinner.jsx`

Bootstrap/react-bootstrap remains the underlying UI toolkit for these components.

React-Bootstrap components may be used directly when appropriate, while custom components can provide application-wide defaults or reusable behavior when needed.

### Layout Components

Layout components define the shared structural arrangement of application pages.

The initial Layout components are:

- `AuthenticatedLayout.jsx` — provides the common structure for authenticated pages.

- `PageContainer.jsx` — provides consistent page width, spacing, and surrounding structure.

Layout components should focus on page structure and should not contain domain-specific note logic.

### Notes / Domain-Specific Components

Notes/domain-specific components are reusable components that contain behavior or presentation specific to notes or note-related features.

The `components/notes/` directory is initially empty and will be populated as recurring note-specific patterns are identified.

Potential components include:

- `NoteCard.jsx` — displays a note in a reusable format.

- `NoteList.jsx` — displays a collection of notes.

- `NoteForm.jsx` — provides the form used to create or edit a note.

Domain-specific components should remain in components/notes/ rather than being placed in generic UI or layout directories.

### Page-Level Components

Page-level components represent complete screens in the application and correspond to application routes.

The initial pages are:

- `LoginPage.jsx`

- `RegisterPage.jsx`

- `HomePage.jsx`

- `NotesPage.jsx`

- `NoteEditorPage.jsx`

- `SettingsPage.jsx`

- `ProfilePage.jsx`

- `NotFoundPage.jsx`

## Page-level components should compose reusable components rather than contain reusable UI patterns that belong in the component directories.

### Naming Conventions

- Component files use PascalCase and the `.jsx` extension.

- Page-level components use the `Page` suffix.

- Reusable components use descriptive names without the `Page` suffix.

- Folders use lowercase names.

- Component names should describe their responsibility rather than their implementation.

Examples:

- `NoteCard.jsx`

- `LoadingState.jsx`

- `PageContainer.jsx`

- `NotesPage.jsx`

- `NoteEditorPage.jsx`

---

### Organization Conventions

Components are organized by responsibility rather than by where they happen to be used.

- `ui/` contains generic UI building blocks.

- `feedback/` contains reusable application feedback patterns.

- `layout/` contains shared page structure.

- `navigation/` contains application navigation.

- `routing/` contains route access and routing behavior.

- `notes/` contains notes/domain-specific components.

- `pages/` contains complete route-level screens.

A component should be placed in the directory that best represents its responsibility.

Components should be reused when the same UI pattern or behavior occurs in multiple places.

Avoid creating abstractions solely to wrap an existing React-Bootstrap component unless the abstraction provides application-specific value.
