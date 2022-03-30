# Setup

## [Node](https://github.com/nvm-sh/nvm)

1. [install nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if not done yet
1. use latest node version
   ```sh
   nvm use node || nvm install node
   ```

## [NextJs](https://nextjs.org)

1. create nextjs app in the parent folder

   ```sh
   npx create-next-app@latest --typescript <project-name>
   # or
   pnpm create next-app -- --typescript <project-name>
   ```

## [PNPM](https://pnpm.io/)

1. pin nodejs version in the project

   ```sh
   node -v > .nvmrc
   ```

1. remove the `package.json` and `node_modules/`

   ```sh
   rm package.json
   rm -rf node_modules
   ```

1. install pnpm globally

   ```sh
   npm i -g pnpm
   ```

1. install dependencies

   ```sh
   pnpm install
   ```
