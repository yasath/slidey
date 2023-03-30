# slidey

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Create presentations with basic React components.

## Usage

Before running any of the commands listed below, you must install the required dependencies. To do this, first install [Node.js](https://nodejs.org) and then run the following command in the project directory:

```
npm install
```

To run a live-reloading Storybook (component sandbox) server on your local machine:

```
npm run storybook
```

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Generating new components

Instead of copy-pasting files to create a new component, this command will generate all the boilerplate files needed:

```
npm run generate YourComponentName
```

This will generate:

```
/src
    /YourComponentName
        YourComponentName.tsx
        YourComponentName.stories.tsx
        YourComponentName.test.tsx
        YourComponentName.types.ts
        index.ts
```

The component must also be added to the `src/index.ts` exports for the library to export the component.
