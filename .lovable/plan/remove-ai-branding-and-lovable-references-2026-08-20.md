# Remove AI Branding and Lovable References

This plan outlines the steps to remove "Lovable" branding and AI-specific references from the project to make it look like a hand-coded website.

## User Review Required

> [!IMPORTANT]
> Some configuration files (like `vite.config.ts` and `package.json`) use `@lovable.dev` packages for the project infrastructure. While the text references can be removed, the underlying tools remain.

## Proposed Changes

### Configuration & Project Info
- **README.md**: Remove all "Built with Lovable" sections and links.
- **AGENTS.md**: Remove this file (it's specifically for AI agents).
- **package.json**: Update the project name from "tanstack_start_ts" to "homecraft-realestate".
- **vite.config.ts**: Remove comments referencing `@lovable.dev`.

### Code & Metadata
- **src/routes/__root.tsx**:
    - Remove `reportLovableError` and its usage in `ErrorComponent`.
    - Update SEO image URLs that point to `lovable.app` or R2 buckets with AI-generated names (if possible, though these are hosted assets).
- **src/lib/lovable-error-reporting.ts**: Remove this file.
- **src/routes/blog.index.tsx** & **src/routes/blog.$slug.tsx**: Update hardcoded `lovable.app` URLs to relative paths or a generic placeholder.
- **public/robots.txt** & **public/sitemap.xml**: Update `lovable.app` URLs.

### Infrastructure (Internal)
- **bunfig.toml**: Keep (required for build), but remove descriptive comments if any.
- **bun.lock**: Leave as is (auto-generated).

## Technical Details
- The `@lovable.dev/vite-tanstack-config` package is a core dependency for the current build setup. Removing it entirely would require a significant refactor of the Vite configuration to standard TanStack Start defaults. I will keep the package but remove the visible text references.
- `reportLovableError` is a utility for the AI editor's telemetry. Removing it will not affect the production app's functionality.
