# Lightweight React and Node boilerplate using Webpack 4
> Highly scalable architecture with a production build 4 times smaller than [Create React App](https://github.com/facebook/create-react-app)

## Install
Clone this project and run:
#### `npm install`

## Getting started

#### 1. `npm run webpack`

Compiles and create a public directory for development.

#### 2. `npm start`

Runs the app in development mode.<br>
Open [http://localhost:5000/test](http://localhost:5000/test) to view it in the browser.

The page will automatically modify without reloading when you make changes to the code. <br>
You will see the build errors and lint warnings in the console.

#### 3. `npm run test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

#### 4. `npm run build`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

#### 5. `npm run analysis` (Webpack Bundle Analyzer)

This script will help you:
* Realize what's really inside your bundle
* Find out what modules make up the most of it's size
* Find modules that got there by mistake
* Optimize it!
* And the best thing is it supports minified bundles! It parses them to get real size of bundled modules. And it also shows their gzipped sizes!

## Folder Structure

```
├───devtools
│   ├───test                         // Jest and Enzyme config files
│   │   └───mocks
│   └───webpack                      // Webpack config files
└───src
    ├───components                   // Reusable components
    │   └───title
    │       └───test
    │           └───__snapshots__
    ├───gui                          // Layout and theming
    │   ├───layout
    │   └───themes
    │       └───default
    │           ├───fonts
    │           │   └───icons
    │           └───patterns
    ├───libs                         // Custom reusable libraries
    └───modules                      // Complex components that are not reusable even entire pages
        └───app
            └───test
                └───__snapshots__
```

## Base App

| Package       |Version |
| ------------- |--------|
| React         |^16.x.x |
| [xBEM][1]     |^0.x.x  |
| Jest          |^23.x.x |
| Enzyme        |^3.x.x  |
| Babel         |^6.x.x  |
| Webpack       |^4.x.x  |

[1]: https://github.com/bogdan-prisecaru/xbem

## Using

* Scope Hoisting
* Uglification of base app via `webpack --mode production`
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* Deterministic Hashes
* [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

