---
title: Fix TanStack Start Compiler Crash
description: Resolve the "TypeError: Cannot read properties of undefined (reading 'find')" during build by fixing the `createMiddleware` call in `src/start.ts`.
type: feature
---

## Problem
The build is crashing because the TanStack Start compiler expects a specific syntax for `createMiddleware` that is currently missing or malformed in `src/start.ts`. The error logs indicate it's looking for a `.use()` property or a specific structure that triggers a `TypeError` in the `@tanstack/start-vite-plugin` compiler.

## Solution
1. **Refactor `src/start.ts`**: The `createMiddleware` definition needs to be more explicit for the compiler. I will update it to use the standard pattern that the TanStack compiler recognizes, ensuring it follows the latest v1 requirements.
2. **Synchronize Dependencies**: I will ensure `@tanstack/start-vite-plugin` and `@tanstack/react-start` are on compatible versions.

## Technical Details
- Change `createMiddleware().server(...)` to a structure that includes the necessary metadata or properties the compiler's `handleCreateMiddlewareCallExpression` expects.
- If a custom middleware is not strictly necessary for the current logic (as it was just a generic error wrapper), I will simplify `src/start.ts` to use the default `createStart` configuration which is more stable against compiler bugs.

## Impact
- Resolves the build failure.
- Restores the development preview.
