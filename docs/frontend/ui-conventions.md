# UI Conventions

## Bootstrap

Bootstrap is the source of truth for standard UI conventions.
Application-specific CSS should extend Bootstrap rather than duplicate or replace its conventions.

## Colors

Use Bootstrap's semantic color system (primary, secondary, success, danger, warning, info, etc.) by default.
Introduce application-specific colors only when Bootstrap does not provide a suitable semantic role.

## Spacing

Use Bootstrap's spacing scale and utilities by default.
Introduce custom spacing values only when Bootstrap does not provide a suitable option.

## Sizing

Use Bootstrap's sizing utilities and component defaults for standard widths, heights, and control sizes.
Introduce application-specific sizing values only when Bootstrap does not provide a suitable option.

## Typography

Use Bootstrap's default typography and utility classes, preferring semantic HTML elements where appropriate.
Introduce custom typography rules only when Bootstrap does not provide a suitable option.

## Borders and Radii

Use Bootstrap's border utilities and radius scale by default.
Introduce custom border or radius values only when Bootstrap does not provide a suitable option.

## Responsive Behavior

Use Bootstrap's responsive breakpoints and utilities by default.
Introduce custom breakpoints only when the application has a demonstrated requirement that Bootstrap does not address.

## Component States

Use Bootstrap's conventions for disabled, loading, hover, focus, and error states where available.
Introduce custom state styling only when Bootstrap does not provide the required behavior.

## Bootstrap and Customization Strategy

Use Bootstrap and react-bootstrap as the default implementation for standard UI conventions, including colors, variants, spacing, sizing, typography, borders, radii, responsive behavior, and component states.

Customize these conventions only when a demonstrated application requirement cannot be reasonably addressed through Bootstrap or react-bootstrap.

## Customizations

Application-specific CSS should extend Bootstrap rather than duplicate or replace its conventions.
Custom values, styles, or behaviors should address a demonstrated application requirement, remain scoped to the relevant component or feature, and not introduce a competing global design system.

## Usage Guidelines

Prefer Bootstrap and react-bootstrap components, variants, and utilities when implementing reusable UI components.
Use custom CSS only when the required UI behavior or appearance cannot be reasonably achieved with the existing Bootstrap or react-bootstrap APIs.
Keep custom styles scoped to the component or feature that requires them.
