# TypeScript + Babel 7 + Webpack 4 example

Basic setup for compiling TypeScript with Babel 7 and then bundling it with Webpack 4.

Done for learning purposes, mostly to check what changed in newest versions of Babel and Webpack and to see if it is feasible to use Babel for TypeScript compilation.

This is pretty barebone in terms of functionality:
- import `.ts` and `.js` files and compile them to ES5 using `@babel/env` preset (but keep in mind that `tsconfig.json` has `strict` setting set to `true` so you will have to declare types for imported js files in order for them to work correctly)
- use class properties and object rest spread proposals
- create final `index.html` file based on `src/index.html` template using `html-webpack-plugin`
- import `.css` files and extract them to single seperate file
- source maps are provided (slowest ones, but most accurate)
- css file and js bundle are minified in production mode

## Scripts

- `npm run build` - build project in production mode (minified), resulting files in `dist` directory
- `npm start` - starts project in development mode + server on port `3000` (using `serve`), watches for file changes but you will have to manually refresh the page to see the changes
