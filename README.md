# Project Name

A [Next.js](https://nextjs.org/) application that demonstrates form submissions, fetching data from external APIs, testing with Jest, and more. The project uses the **App Router** (Next.js 13+) as well as TypeScript, making the code more robust and maintainable.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Storybook](#storybook)
- [Environment Variables](#environment-variables)
- [Testing](#testing)

---

## Features

- **Next.js App Router** for filesystem-based routing.
- **TypeScript** for type safety and cleaner development experience.
- **API Routes** that handle secure requests to external services.
- **Form Handling** showcasing how to manage forms with server actions or fetch calls.
- **Zod Validation** for robust schema-based validation (if present in the code).
- **Unit & Integration Tests** via Jest (and React Testing Library or Testing Library Hooks).
- **Debounce Hook** (`useDebounce`) to manage user input performance in real time.
- **CEP (Zip Code) Fetching** via a public API (`viacep.com.br`) to demonstrate external data fetching.

---

## Tech Stack

- **Next.js 13+** (with App Router)
- **React** 18 or higher
- **TypeScript** for static typing
- **Node.js** (LTS recommended)
- **Jest** for testing
- **ESLint** / **Prettier** (optional, if configured)

---

## Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/fsdavi/redeems.git
   cd redeems
   ```
2. Install dependencies

```bash
  pnpm install
```
or
``` bash
yarn
```

3. Configure environment variables (see [Environment Variables](#environment-variables)).

4. Run the development server

```bash
npm run dev
Access the app at http://localhost:3000 in your browser.
```

## Folder Structure

```bash 
├─ app/
│  ├─ api/
│  │  └─ redeem/
│  │     └─ [pageId]/route.ts   # Example dynamic route
│  ├─ hooks/
│  │  └─ useDebounce.ts         # Custom useDebounce hook
│  ├─ lib/
│  │  ├─ fetchCEPData.ts        # Example external API fetching
│  │  └─ tests/
│  │     └─ fetchCEPData.test.ts
│  ├─ (UI components & pages)
│  └─ page.tsx
├─ public/
├─ tests/                       # Additional tests (if any)
├─ jest.config.ts               # Jest configuration
├─ next.config.js               # Next.js configuration
├─ package.json
├─ tsconfig.json
└─ ...
```
* app/api: Holds API routes (App Router).
* app/hooks: Contains custom React hooks.
* app/lib: General helper libraries, data fetching utilities, etc.
* app/lib/tests: Sample test files for the utilities in lib.
* tests: (Optional) a separate folder for test files if you prefer a dedicated location.
* tsconfig.json: TypeScript configuration.
* jest.config.ts: Jest configuration for testing.

## Storybook

* To run the storybook

```bash
  pnpm run storybook
```

## Environment Variables

Depending on your code, you may have environment variables such as:

* `NEXT_PUBLIC_API_URL`: Publicly-exposed variable for external API base URL.
* `API_KEY`: Secret key for external API calls (no `NEXT_PUBLIC_` prefix if it’s sensitive).
Create a .env.local file in the project root to store them:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://example.com
API_KEY=my-secret
```

## Testing 
```bash
  npm test
```
### Common Errors

* “Cannot find module @/...” => Make sure your jest.config.ts includes moduleNameMapper if you use path aliases (like @/hooks/...).
* “TypeError: Response body object should not be disturbed or locked” => Only read request/response streams (.json()) once in your Next.js API route.
