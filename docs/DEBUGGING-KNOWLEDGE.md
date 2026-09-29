# Nova Debugging Knowledge

This document captures recurring debugging patterns accepted and validated across the user's prior Nova application builds. It is implementation knowledge, not a project-specific bug list.

## Core debugging workflow

1. Read the complete build/runtime log before editing.
2. Identify the first actionable error, not the last cascading error.
3. Trace the error to the source file, import, dependency, environment variable, route, build configuration, or runtime boundary.
4. Inspect surrounding code and all related callers before changing it.
5. Make the smallest correct fix that preserves intended product behavior.
6. Run type checking/linting where available.
7. Run the production build using the project's actual package manager and framework commands.
8. Verify the deployment platform logs after pushing.
9. Verify critical routes and runtime behavior, not only compilation.
10. Commit only after the fix is validated; record unresolved limitations instead of claiming success.

## Vercel / Next.js

### `useSearchParams()` build failures

Next.js App Router builds can fail when `useSearchParams()` is used without the required Suspense boundary. Put the dependent Client Component behind an appropriate `<Suspense>` boundary and keep server/client responsibilities explicit.

### Supabase browser initialization

Do not initialize browser-dependent Supabase clients in a way that executes during server/build evaluation. In Client Components, defer browser-only initialization to the client lifecycle when required by the chosen Supabase architecture. Public browser configuration belongs in `NEXT_PUBLIC_*`; service-role secrets must never reach browser code.

### Missing path aliases

When imports such as `@/…` fail in deployment, verify `tsconfig.json`/`jsconfig.json` paths and base URL against the actual repository structure. Do not patch individual imports when the project intentionally uses an alias.

### Missing services/modules

A build may fail because an imported service was referenced but never created or was moved. Trace the import graph and either restore the intended module or update all callers consistently. Avoid creating a fake stub that silently changes product behavior.

### Broken API routes

For malformed App Router API routes, verify exported HTTP methods, request/response handling, authentication, authorization, ownership checks, validation, read-only restrictions, execution behavior and audit logging. A route that compiles but weakens security or semantics is not a successful fix.

### Runtime Internal Server Error

Check environment-variable availability and server/client boundaries first. Middleware may need to degrade gracefully when optional configuration is absent, while protected server APIs should fail closed rather than exposing unauthorized behavior.

### OpenAI integration

OpenAI API keys belong server-side. Browser clients should call a server API route/action that performs the model request. Never expose provider secrets through `NEXT_PUBLIC_*`, bundled client code or committed source.

### Vercel monorepos

A common failure is deploying the repository root while the real application lives under a workspace such as `apps/web`. Explicitly configure install/build commands or Vercel project settings so the correct workspace dependencies are installed and the application is built. Verify logs for dependency installation, framework detection, build output and generated routes.

If the workspace depends on root packages/lockfiles, installing only the child workspace may prevent framework detection or produce missing-module failures. Install according to the actual workspace/package-manager topology.

### Deployment validation

A fast successful deployment is not proof of a working application. Confirm that the deployment log contains the expected framework build, generated routes/assets and runtime startup. Test important URLs and API routes after deployment.

## CI / package management

- If lockfiles are absent or invalid, do not assume cache state is trustworthy; use a clean install strategy appropriate to the package manager.
- Run install → typecheck/lint → production build in CI.
- Do not claim a local build passed unless it was actually executed.
- Do not use stale cache output as evidence of correctness.

## Supabase migrations

Duplicate migration versions can prevent migration execution. Inspect migration filenames/versions and remove or reconcile duplicates before rerunning migrations. Preserve the intended schema history rather than simply deleting arbitrary migrations.

## Expo / React Native / Android

### Environment

Android builds require a compatible JDK, Android SDK, platform tools and Gradle/Android Gradle Plugin combination. Verify `JAVA_HOME`, Android SDK variables and PATH before changing application code.

### Network/build dependency failures

Errors such as `UnknownHostException` for Gradle distribution services are infrastructure/network resolution failures, not necessarily application-code failures. Distinguish dependency download failures from Gradle configuration failures before modifying the project.

### Version compatibility

For Expo projects, keep Expo, React Native, Expo Router and native module versions compatible with the SDK version. Prefer `npx expo install`/Expo-recommended versions for Expo-managed dependencies instead of arbitrary package versions.

### Prebuild/native state

When native configuration is stale or corrupted, use the appropriate Expo prebuild strategy after preserving intentional native customizations. Do not repeatedly regenerate native projects blindly; inspect the generated native configuration and identify what is actually stale.

### Build logs

Separate SDK warnings, deprecated APIs, resource/linking failures, Java/Kotlin compiler errors, Gradle configuration errors and network failures. Fix the earliest blocking category first.

## Environment-variable debugging

For every environment variable:

- Identify whether it is server-only or browser-safe.
- Verify the exact variable name expected by code and deployment configuration.
- Confirm it exists in the correct environment (local/development/preview/production).
- Never expose secrets with public prefixes.
- Provide safe configuration checks that report presence/absence without printing secret values.

## API/backend integration

When frontend behavior depends on an API:

1. Inspect request URL and HTTP method.
2. Inspect request body/query parameters.
3. Verify authentication/authorization.
4. Verify CORS/origin rules.
5. Verify server-side validation.
6. Verify database/provider configuration.
7. Inspect response status and payload.
8. Handle loading, empty, retry, error and success states.
9. Prevent duplicate submissions where transactions are involved.
10. Verify the deployed API independently before blaming the UI.

## Payments / transaction flows

For payment-related applications, never treat a frontend success callback as authoritative. Verify payment status server-side with the payment provider, persist transaction state safely, validate callback/webhook authenticity, make operations idempotent and expose recoverable failure/retry states.

## Database/ORM debugging

When deployment fails around Prisma or another ORM:

- Validate schema syntax and formatting.
- Validate generated client compatibility.
- Validate `DATABASE_URL` and provider configuration.
- Run migrations against the intended environment.
- Check for duplicate migration versions.
- Check build-time versus runtime database access.
- Avoid requiring a live database during static build unless the architecture explicitly requires it.

## UI runtime debugging

A page that builds is not necessarily correct. Verify:

- no console errors
- no unhandled promise rejections
- no failed critical network requests
- no hydration mismatch
- no broken routes
- no infinite render/effect loops
- no state updates after unmount where applicable
- no layout overflow
- no inaccessible controls
- no missing loading/error/empty states

## Visual debugging

When a UI looks wrong, compare structure before styling details:

1. DOM/component hierarchy
2. layout model and containing blocks
3. dimensions and constraints
4. responsive breakpoint
5. positioning/z-index
6. typography metrics
7. spacing tokens
8. imagery/aspect ratio
9. animation transforms
10. browser/device differences

Do not fix visual symptoms by stacking arbitrary offsets unless the layout model requires them.

## Production Definition of Done for debugging

A debugging task is complete only when the fix is:

- understood at root cause level
- implemented without unrelated regressions
- type/lint/build clean where applicable
- verified in the target deployment environment when the issue is deployment-related
- checked on affected critical flows
- secure with respect to secrets and authorization
- documented when the pattern is likely to recur
- committed with a message describing the actual fix

## Nova debugging prompt

> **Run the Nova debugging workflow. Read the complete error/build/runtime logs, identify the first root-cause failure, inspect the affected dependency/import/configuration chain, make the smallest correct fix, run available validation and production build checks, verify the deployed behavior, and document any reusable debugging lesson. Do not claim success without verification.**
