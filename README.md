# slidey

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

React presentations without having to understand the React

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reloading Storybook server on your local machine:

```
npm run storybook
```

To export the Storybook as static files:

```
npm run storybook:export
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
```

The component must also be added to the `src/index.ts` exports for the library to export the component.