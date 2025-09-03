# Multi-select filter app

This app is to help user search, filter and select items from a huge dataset.

## Stack

- Vite + React + Typescript
- Tailwind CSS
- Graphql
- Storybook

Node version used: v20.19.0

## Getting started

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
    npm run server
   ```
4. Start the application
   ```bash
    npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173/` (Server runs on port 8080)
6. Storybook
   ```bash
    npm run storybook
   ```

## Design decisions

- **Vite**- Vite offered simple configuration, fast development, great support for React and Typescript projects, hence its chosen for the build system.

- **For setting up graphql**- To setup the server, I have used Apollo Server as its a full featured GraphQL server library and can run as a standalone server. Used Apollo Client for frontend GraphQL client library due to its seamless integration with Apollo Server.

- **Testing**- Basic setup for testing components using Storybook is added to this project.

- **Tailwind**- Tailwind is used to build quick and responsive modern UI.

- **Linting**- This project uses Prettier for code formatting along with ESLint for linting to maintain code quality and consistency.
