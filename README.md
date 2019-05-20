
## https://facebook.github.io/create-react-app/docs

## To start a new Create React App project with TypeScript,

In the project directory, you can run: yarn create react-app my-app --typescript

###  `To add TypeScript to a Create React App project, first install it:`

yarn add typescript @types/node @types/react @types/react-dom @types/jest

## To add React Router 

you can run : yarn add react-router-dom @types/react-router-dom

first: you should create router directory in the src directory;
create RouterMap.tsx in the router directory;

```


```

## To add px2rem 

you can run : yarn add postcss-px2rem

and in webpack.config.js file:

```
const px2rem = require('postcss-px2rem');

plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
    browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
    ],
    flexbox: 'no-2009',
    }),
    //这个位置
    px2rem({remUnit: 75})
],

```

## To add sass 

you can run : yarn add node-sass;

Now you can rename src/App.css to src/App.scss and update src/App.js to import src/App.scss;
This file and any other file will be automatically compiled if imported with the extension .scss or .sass

## To add Post-Processing CSS

CSS Grid Layout prefixing is disabled by default;
To enable CSS Grid prefixing, add /* autoprefixer grid: autoplace */ to the top of your CSS file.

note: in webpack.config.js file: you should add something...
```
autoprefixer: {
    browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
    ],
    flexbox: 'no-2009',
},

```

## 










