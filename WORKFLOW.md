# Internal Git Workflow Guidelines

This document outlines the mandatory Git workflow for the core development team of the Notes App monorepo. Direct external contributions are not accepted. To keep our development process smooth, structured, and predictable, please adhere to the following guidelines.

## 1. Branching Strategy

The `main` branch is protected. Direct commits to `main` are strictly blocked. All changes must be introduced via Pull Requests (PRs) from dedicated branches.

### Branch Naming Conventions

When creating a new branch, use the following prefixes depending on the nature of your work:

**Features:** `feature/short-description` (e.g., `feature/add-zustand-store`)

**Bug Fixes:** `fix/short-description` (e.g., `fix/tanstack-query-cache`)

**Documentation:** `docs/short-description` (e.g., `docs/update-readme`)

**Chore/:** `chore/short-description` (e.g., `chore/monorepo-yarn-workspaces`)

**Refactor/:** `refactor/short-description` (e.g., `refactor/monorepo-yarn-workspaces`)

**setup/:** `setup/short-description` (e.g., `setup/monorepo-yarn-workspaces`)

## 2. Commit Message Convention

We follow the **Conventional Commits** specification. This helps us maintain a readable project history and automates changelog generation.

### Format

`<type>(<scope>): <description>`

- **Type:** Must be one of the following:
  - `feat`: A new feature for the user (e.g., frontend notes list, backend API endpoint).

  - `fix`: A bug fix.

  - `docs`: Documentation-only changes.

  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).

  - `refactor`: A code change that neither fixes a bug nor adds a feature.

  - `chore`: Updating build tasks, package manager configs, yarn workspaces, etc.

- **Scope (Optional):** The workspace or area being changed, enclosed in parentheses (e.g., `frontend`, `backend`, `shared`).

- **Description:** A brief, present-tense summary of the change. Lowercase, no period at the end.

### Examples

- `feat(frontend): implement zustand store for notes state management`

- `fix(backend): resolve mongoose validation error on empty note titles`

- `chore(root): update yarn workspaces configuration for vite`

## 3. Pull Request Process

1. **Sync:** Ensure your local `main` branch is up to date before branching off.

2. **Push:** Push your feature or fix branch to the remote repository.

3. **Open PR:** Open a Pull Request targeting the `main` branch.

4. **Review:** Ensure the build passes and obtain at least one peer approval before merging.
