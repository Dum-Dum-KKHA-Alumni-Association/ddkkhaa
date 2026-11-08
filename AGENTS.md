# AGENTS.md — Next.js Project Development Guidelines

## 1. Project Overview

This project is a modern agency/business website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

The primary objectives are:

- Build responsive, accessible, and performant websites.
- Maintain clean, reusable, and scalable code.
- Follow clean architecture and separation of concerns.
- Prioritize SEO and web performance.
- Minimize unnecessary dependencies and complexity.
- Keep the codebase easy to maintain and extend.

These instructions apply to all AI coding agents working within this repository.

---

## 2. Technology Stack

### Core Technologies

- Next.js — latest stable version.
- React — version compatible with the installed Next.js version.
- TypeScript — strict mode enabled.
- Tailwind CSS — utility-first styling.
- shadcn/ui — reusable UI components.
- Lucide React — icons when needed.

### State Management

- Zustand for shared client-side application state.
- React built-in state for local component state.
- Avoid introducing global state when unnecessary.

### Forms and Validation

- React Hook Form for form management.
- Zod for schema validation.
- @hookform/resolvers for integrating Zod with React Hook Form.

### Database and Authentication

- No database is required initially.
- Do not introduce database infrastructure without an explicit requirement.
- Authentication is project-dependent.
- Choose authentication solutions based on actual project requirements.
- Never implement custom authentication without evaluating security implications.

### Additional Dependencies

Before installing a new package:

1. Check whether the functionality already exists.
2. Check whether React or Next.js provides a native solution.
3. Evaluate bundle size and maintenance.
4. Prefer lightweight, actively maintained packages.
5. Explain why a new dependency is necessary.

---

## 3. Next.js Development Standards

### App Router

- Use the Next.js App Router.
- Follow the conventions supported by the installed Next.js version.
- Keep route definitions inside `src/app`.
- Use `page.tsx` for pages.
- Use `layout.tsx` for shared layouts.
- Use `loading.tsx` for loading states.
- Use `error.tsx` for route-level error boundaries.
- Use `not-found.tsx` for missing resources.
- Use Route Handlers only when backend HTTP endpoints are required.

### Server and Client Components

- Prefer React Server Components by default.
- Use Client Components only when interactivity is necessary.
- Add `"use client"` only at the component boundary that requires it.
- Avoid converting entire pages into Client Components unnecessarily.
- Keep server-only logic out of client bundles.
- Never access browser APIs from Server Components.

### Rendering Strategy

Choose the appropriate rendering strategy:

- Static rendering for mostly static marketing pages.
- Server rendering for dynamic server-dependent content.
- Incremental Static Regeneration when content requires periodic updates.
- Client-side rendering only when necessary.

Do not use dynamic rendering without a specific requirement.

### Navigation

- Use `next/link` for internal navigation.
- Use `next/navigation` for App Router navigation utilities.
- Avoid unnecessary full-page reloads.
- Use semantic navigation elements.

### Images and Fonts

- Use `next/image` for image optimization.
- Provide meaningful alternative text.
- Specify image dimensions or aspect ratios where appropriate.
- Use `next/font` for optimized font loading.
- Avoid unnecessary external font requests.

---

## 4. Project Architecture

Follow clean architecture principles with feature-oriented organization.

### Folder Responsibilities

#### `src/app/`

Responsible for:

- Routes and pages.
- Layouts.
- Loading and error boundaries.
- Route handlers.
- Metadata configuration.

Keep business logic out of page components.

#### `src/components/`

Responsible for reusable UI components.

- `ui/` — shadcn/ui and primitive components.
- `layout/` — header, footer, navigation, sidebar.
- `shared/` — reusable application-wide components.
- `sections/` — reusable page sections.

#### `src/features/`

Responsible for feature-specific functionality.

Each feature may contain:

- Components.
- Hooks.
- Schemas.
- Services.
- Types.
- Utilities.

Keep feature-specific code within its feature whenever possible.

#### `src/services/`

Responsible for external service integrations and API communication.

Examples:

- Contact form integrations.
- Email providers.
- Analytics.
- Third-party APIs.

#### `src/stores/`

Responsible for Zustand stores.

Rules:

- Create stores only when shared state is necessary.
- Keep stores focused on a single responsibility.
- Avoid duplicating server state in Zustand.
- Do not persist sensitive information in browser storage.

#### `src/hooks/`

Responsible for reusable application-wide React hooks.

Feature-specific hooks should remain inside their respective feature folders.

#### `src/lib/`

Responsible for shared utilities and integrations.

Examples:

- Utility functions.
- API clients.
- Environment validation.
- Shared configuration helpers.

#### `src/schemas/`

Responsible for reusable Zod validation schemas.

#### `src/types/`

Responsible for shared TypeScript definitions.

#### `src/config/`

Responsible for application configuration.

#### `src/constants/`

Responsible for static application constants.

---

## 5. TypeScript Standards

- Always use TypeScript.
- Enable strict TypeScript checking.
- Avoid `any`.
- Prefer explicit types for public function interfaces.
- Use interfaces or types consistently.
- Use discriminated unions for complex state.
- Avoid unnecessary type assertions.
- Avoid duplicate type definitions.
- Keep shared types reusable.
- Use `unknown` instead of `any` when handling unknown external data.

Do not bypass TypeScript errors using `@ts-ignore`.

If an exception is necessary, use `@ts-expect-error` with an explanation.

---

## 6. Component Development

- Use functional React components.
- Keep components small and focused.
- Prefer composition over deeply nested conditional rendering.
- Separate presentation from business logic.
- Extract reusable components when there is a genuine reuse opportunity.
- Avoid unnecessary abstraction.
- Avoid prop drilling when shared state or composition is more appropriate.
- Use descriptive component and variable names.
- Keep component props explicitly typed.
- Avoid overly large page components.

### Component Naming

- Components: PascalCase.
- Hooks: camelCase with `use` prefix.
- Utilities: camelCase.
- Constants: UPPER_SNAKE_CASE where appropriate.
- Types and interfaces: PascalCase.

Example:

```tsx
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export const ServiceCard:FC<ServiceCardProps>=({
  title,
  description,
  href,
})=> {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>Learn more</a>
    </article>
  );
}
```

Use `next/link` instead of a plain anchor for internal navigation.

---

## 7. UI and Styling Standards

### Tailwind CSS

- Use Tailwind CSS for styling.
- Follow the installed Tailwind version's syntax and conventions.
- Avoid unnecessary custom CSS.
- Use CSS variables for design tokens.
- Maintain consistent spacing, typography, and colors.
- Avoid excessive arbitrary values.
- Use responsive utility classes.

### shadcn/ui

- Use shadcn/ui components where appropriate.
- Customize components to match the design system.
- Keep reusable UI components inside `src/components/ui`.
- Do not duplicate existing components.
- Preserve accessibility when customizing components.

### Responsive Design

Follow a mobile-first approach.

Support:

- Mobile devices.
- Tablets.
- Laptops.
- Desktop screens.
- Large displays.

Avoid fixed-width layouts that break on smaller screens.

### Design Quality

- Maintain consistent typography.
- Use a consistent spacing scale.
- Establish visual hierarchy.
- Maintain adequate contrast.
- Provide hover, focus, active, disabled, and loading states.
- Avoid unnecessary animations.
- Respect `prefers-reduced-motion`.
- Use subtle transitions where appropriate.

---

## 8. Forms and Validation

Use React Hook Form for form state management.

Use Zod for validation.

Use `@hookform/resolvers/zod` to connect the validation schema.

Rules:

- Define reusable validation schemas.
- Validate both client and server inputs when a server endpoint exists.
- Display meaningful validation messages.
- Prevent duplicate submissions.
- Include loading and success states.
- Handle server errors gracefully.
- Use accessible labels and descriptions.
- Never trust client-side validation alone.

Suggested structure:

```text
features/
└── contact/
    ├── components/
    │   └── contact-form.tsx
    ├── schemas/
    │   └── contact.schema.ts
    ├── services/
    │   └── contact.service.ts
    └── types/
        └── contact.types.ts
```

---

## 9. State Management

Use Zustand for shared client-side state.

Use React's built-in state for local UI interactions.

Rules:

- Avoid unnecessary global stores.
- Keep stores modular.
- Do not store server-fetched data globally without a clear reason.
- Avoid unnecessary subscriptions and rerenders.
- Use selectors to access specific state.
- Persist state only when necessary.
- Never store credentials or sensitive authentication data in Zustand persistence.

---

## 10. API and Service Layer

- Keep external API communication separate from UI components.
- Use a dedicated service layer.
- Use TypeScript types for request and response structures.
- Handle network failures.
- Implement appropriate timeouts where supported.
- Validate untrusted external responses.
- Never expose secret API keys to client-side code.
- Use environment variables for sensitive configuration.
- Keep HTTP and business logic separated.

For Next.js Route Handlers:

- Use appropriate HTTP methods.
- Validate incoming request data.
- Return correct HTTP status codes.
- Handle exceptions consistently.
- Implement rate limiting where appropriate.
- Add authentication and authorization when required.

Do not create API routes simply to proxy data that can safely be fetched directly on the server.

---

## 11. Clean Code and SOLID Principles

Follow these principles:

- Single Responsibility Principle.
- Open/Closed Principle.
- Liskov Substitution Principle where applicable.
- Interface Segregation Principle.
- Dependency Inversion Principle.

Additional rules:

- Follow DRY without overengineering.
- Prefer simple solutions.
- Avoid unnecessary abstractions.
- Avoid deeply nested conditions.
- Extract repeated business logic.
- Keep functions focused.
- Use meaningful names.
- Avoid magic numbers and strings.
- Keep dependencies flowing in a clear direction.

---

## 12. Error Handling

- Handle expected errors explicitly.
- Never silently swallow exceptions.
- Use route-level error boundaries when appropriate.
- Provide user-friendly error messages.
- Keep internal stack traces out of production responses.
- Log useful diagnostic information securely.
- Handle API, network, validation, and rendering errors separately.
- Provide fallback UI where appropriate.

---

## 13. Security Guidelines

Security must be considered during every implementation.

### General Security

- Never commit `.env` files.
- Maintain `.env.example` without real secrets.
- Never expose private environment variables through `NEXT_PUBLIC_`.
- Validate and sanitize untrusted inputs.
- Avoid unsafe HTML rendering.
- Avoid `eval`.
- Avoid exposing internal errors.
- Keep dependencies updated.

### Authentication and Authorization

When authentication is required:

- Use a maintained authentication solution.
- Enforce authorization on the server.
- Never rely on frontend route protection alone.
- Validate session and permissions before protected operations.
- Follow secure cookie practices.
- Implement CSRF protection where applicable.

### External Integrations

- Validate webhook signatures.
- Restrict external API access.
- Protect sensitive API endpoints.
- Never trust third-party input without validation.

---

## 14. SEO and Accessibility

### SEO

- Use the Next.js Metadata API.
- Provide unique page titles and descriptions.
- Use canonical URLs when appropriate.
- Implement Open Graph metadata.
- Implement Twitter/X metadata where appropriate.
- Generate sitemap.xml.
- Generate robots.txt.
- Use semantic HTML.
- Use descriptive URLs.
- Add structured data where relevant.
- Optimize images and page loading performance.

### Accessibility

- Follow WCAG accessibility principles.
- Use semantic HTML elements.
- Provide accessible form labels.
- Support keyboard navigation.
- Maintain visible focus states.
- Use appropriate ARIA attributes only when needed.
- Ensure sufficient color contrast.
- Provide alternative text for meaningful images.
- Make interactive elements screen-reader friendly.

---

## 15. Performance Optimization

- Prefer Server Components.
- Minimize client-side JavaScript.
- Avoid unnecessary dependencies.
- Optimize images with `next/image`.
- Use appropriate font optimization.
- Avoid unnecessary state updates.
- Use dynamic imports for suitable heavy components.
- Avoid unnecessary effects.
- Prevent avoidable rerenders.
- Use caching and revalidation appropriately.
- Avoid excessive third-party scripts.
- Monitor Core Web Vitals.
- Avoid premature optimization.

---

## 16. Testing and Code Quality

Before completing a task:

- Run TypeScript checks.
- Run ESLint.
- Run relevant tests.
- Test responsive layouts.
- Check browser console errors.
- Test form validation.
- Test loading and error states.
- Verify navigation.
- Check accessibility basics.
- Verify production build.

Suggested commands:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Use the package manager and scripts already configured in the project.

Do not claim that tests passed unless they were actually executed successfully.

---

## 17. Environment Configuration

- Keep environment variables centralized.
- Validate required environment variables.
- Maintain `.env.example`.
- Never hardcode API keys.
- Never expose private secrets to browser code.

Use clear naming conventions for environment variables.

---

## 18. Documentation Standards

- Document complex business logic.
- Explain non-obvious architectural decisions.
- Keep README.md updated.
- Document required environment variables.
- Document setup and deployment procedures.
- Avoid unnecessary comments that repeat the code.
- Add JSDoc to complex reusable utilities when useful.

---

## 19. AI Agent Workflow

Every AI coding agent must follow this workflow.

### Before Implementation

1. Read this AGENTS.md.
2. Inspect the existing project structure.
3. Read relevant package.json scripts and dependencies.
4. Understand the existing implementation.
5. Identify reusable components and utilities.
6. Identify the smallest reasonable implementation.
7. Prepare an implementation plan for complex tasks.

### During Implementation

1. Follow the existing architecture.
2. Reuse existing dependencies and components.
3. Keep changes focused.
4. Maintain strict TypeScript compliance.
5. Follow security and accessibility requirements.
6. Avoid unrelated refactoring.
7. Do not overwrite existing functionality without understanding its purpose.

### After Implementation

1. Review modified files.
2. Run relevant lint checks.
3. Run TypeScript checks.
4. Run tests where available.
5. Verify the production build when appropriate.
6. Fix issues introduced by the changes.
7. Summarize the implementation.
8. Mention any remaining limitations or manual steps.

### Important Restrictions

- Do not invent project requirements.
- Do not install dependencies without justification.
- Do not introduce a database unless requested.
- Do not introduce authentication unless required.
- Do not create unnecessary API routes.
- Do not duplicate existing functionality.
- Do not modify unrelated files.
- Never claim unverified functionality works.

---

## 20. Definition of Done

A task is complete when:

- The requested functionality is implemented.
- The existing architecture is respected.
- TypeScript errors introduced by the changes are resolved.
- Relevant lint checks pass.
- Relevant tests pass.
- Responsive behavior is considered.
- Accessibility is considered.
- Security implications are addressed.
- No unnecessary dependencies are introduced.
- Documentation is updated when necessary.

Always prioritize maintainability, simplicity, security, accessibility, and performance over unnecessary complexity.

**End of Project Instructions.**
