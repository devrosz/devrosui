# DevrosUI

DevrosUI is a React-component library which includes several re-usable components styled to my taste. It can be used to achieve consistency in the frontend of all your websites and to easily implement commonly used components by using the created user-interface without worrying about its implementations.

## Prerequisites
```@devrosui/react``` does not include the React bundle. Therefore, you need to have ```react``` and ```react-dom``` already installed in your project.
  
If you install ```@devrosui/react```, the following dependencies will be automatically installed as well:
- ```react-icons```
- ```motion```
- ```@fontsource/geist```

## Getting-started

#### Installation
```bash
npm install @devrosui/react
```

#### Usage

##### Import component styling
In your root ```.jsx``` or ```.tsx``` file:

```jsx
import "@devrosui/react/style.css"
```

##### Import components
```jsx
import { Calendar } from "@devrosui/react"
```

##### Theme compatibility
If you want the components to be compatible with your app's theme toggle,
then you have to follow our implementation of the theme toggle:

```jsx

// Toggle dark/light mode
function toggleTheme(): void {
    document.documentElement.classList.toggle("light")
}        
```
This implementation simply adds the class 'light' to the HTML document.

## Documentation and demos
devrosui.roshanbansie.nl

## About me
I am a Computer Science student that develops full-stack applications using primarily Next.js, React, CSS, Typescript, SQL and Express.js. I like the style of my websites to be modern-looking with a black/white theme and little accent colours. I created DevrosUI as a hobby-project to gain more experience in creating reuseable components and as an utility to create consistency across my products when it comes down to style.