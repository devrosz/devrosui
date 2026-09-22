# DevrosUI
This mono-repo is a React component library. Its main purpose is to create consistency in my products by abstracting away frequently used UI-components and style them according to my taste.

## Live demo
https://devrosui.roshanbansie.nl

## NPM package page
https://npmjs.com/package/@devrosui/react

## Features
- Documentation site which describes the features and usage of the React component library
- Implementation of ```@devrosui/react```
- Testing environment for ```@devrosui/react```

## Tech stack

### Frontend
- Next.js
- React
- Typescript
- CSS

### Testing
- Storybook

## Architecture
This mono-repo consists of three main directories: ```/docs```,  ```/lib``` and ```/testing```

### ```/docs```
- Contains the Next.js documentation website

### ```/lib```
- Contains the actual ```@devrosui/react``` package with the implementation of the React components and their styling
- Each component has its own folder consisting of a ```.tsx``` file and a ```.css``` file

### ```/testing```
- Contains the Storybook environment
- In this directory, the components of ```/lib``` are being tested

Inside ```/docs``` and ```testing``` the components of ```/lib``` are imported via the path alias
as defined inside the ```tsconfig.json``` of the respective directory and enforced via NPM linking
as defined inside the root ```package.json``` under ```workspaces``` to mimic real installation and usage
of the package.

## Workflows

### Run documentation site on localhost
```bash
cd ./docs
npm run dev
```

### Build ```@devrosui/react``` package
```bash
cd ./lib
npm run build
```

### Pack ```@devrosui/react``` into a ```.tgz``` folder
```bash
cd ./lib
npm pack
```

### Open Storybook
```bash
cd ./testing
npm run storybook
```

### Add new component

1. Create a separate folder in ```/lib/src/components``` with the name of the component as folder name
2. Write the implementation in a ```.tsx``` file and the styling in a ```.css``` file (use the CSS variables defined in ```/lib/src/globals.css```
3. Export the component from ```/lib/src/index.ts```
4. Write a story of the component in ```/testing/src/stories```
5. Test the functionalities, styling and responsiveness of the component
6. Add the component to ```/docs/lib/pages.tsx``` with the extra ```isNew``` key
7. Write the documentation page of the component in the same format as the other pages

### Update component
1. Change the necessary files
2. Test the functionalities, styling and responsiveness of the component
3. Add the ```isUpdated``` key in ```/docs/lib/pages.tsx```
4. Update the respective documentation page if applicable

### Publish new version to NPM
1. Navigate to the ```/lib``` directory
2. Write the changes into the ```README.md``` under "Patch notes" with the new version to be published
3. Delete the old ```.tgz``` folder of the package
4. Change the version in ```package.json``` according to guideline below:

    | Example | When to use |
    | :------ | :---------- |
    | 1.0.0 -> 1.0.1 | Bug fixes |
    | 1.0.0 -> 1.1.0 | New features |
    | 1.0.0 -> 2.0.0 | Breaking changes |

6. Build the package
   ```bash
   npm build
   ```
7. Pack the package
   ```bash
   npm pack
   ```
8. Login to NPM
   ```bash
   npm login
   ```
9. Publish the package
   ```bash
   npm publish --access public
   ```

## Notes
- It may happen that you change the source of a component in ```/lib``` but the change isn't visible in Storybook or the documentation website.
  In such case, you should rebuild the package because the entry of ```/lib``` is ```/dist``` as defined in ```/lib/package.json```
- Each directory has its own dependencies. No dependency must be installed at root level

## Feedback
Create an issue with an applicable tag if you find any bugs or if you want to request a feature
