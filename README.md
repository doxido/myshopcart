# Vue Shopping  cart App Example transformed

<!---
[![license](https://img.shields.io/github/license/ybkuroki/vuejs-webapp-sample?style=for-the-badge)](https://github.com/ybkuroki/vuejs-webapp-sample/blob/master/LICENSE)
[![workflow](https://img.shields.io/github/actions/workflow/status/ybkuroki/vuejs-webapp-sample/check.yml?label=check&logo=github&style=for-the-badge)](https://github.com/ybkuroki/vuejs-webapp-sample/actions?query=workflow%3Acheck)
[![release](https://img.shields.io/github/release/ybkuroki/vuejs-webapp-sample?style=for-the-badge&logo=github)](https://github.com/ybkuroki/vuejs-webapp-sample/releases)
-->

## Preface
This application is a new version of then [Vue.js](https://vuejs.org/index.html) chat application the official examples for [Vuex.js](https://vuejs.org/index.html).
It demonstrates the best pratices to use vuex as state managment for Vue application. It respects the principal of the separin of the concerns. the back end part here is simulated by faked API.

## Install
Perform the following steps:
1. Download and install [Node.js](https://nodejs.org/en/).
1. Download and install [Visual Studio Code(VS Code)](https://code.visualstudio.com/).<!--1. Install [vetur](https://github.com/vuejs/vetur) extension for VS Code.-->
1. Clone this repository.
1. Download and install npm packages.
    ```bash
    npm install
    ```

## Starting Application
### Backend
The BE is simulated with serving data.json file containing products and shoppingcart data using json server.
```
bash
npm i json-server
json-server --watch data.json
```

### Frontend
Perform the following steps:
1. Start the development server.
    ```bash
    npm run serve
    ```
1. When startup is complete, the console shows the following message:
    ```
    DONE Compiled successfully in *****ms
    
    App running at:
    - Local:   http://localhost:3000/
    - Network: http://192.168.***.***:3000/
    
    Note that the development build is not optimized.
    To create a production build, run npm run build.
    ```
1. Access the following URL in the Chrome.  
[http://localhost:3000](http://localhost:3000)

## Creating a Production Build
Perform the following command:
```bash
npm run build
```

## Project Map
The following figure is the map of this sample project.

```
- vuejs-webapp-sample
  + public          … Contains resouces of this project.
  - src
    + assets        … Contains source codes that Webpack doesn't need to build.
    + components    … Contains components of Vue.
    + shared        … Contains shared code.
    + api           … Fake API.
    + store         … Define Vuex
    - main.js       … Entry point.
  - package.json    … Define npm packages.
```

## Views
There are the following views in this sample.

|View Name|File Name|Description|
|:---|:---|:---|
|Login View|``Login.vue``|The view for session authentication with username and password. This view is created and based on [the example of vue-material](https://github.com/vuematerial/examples).|
|Home View|``Home.vue``|The view showing search results.|
|About View|``About.vue``|The view showing this application information.|

## Libraries
This sample uses the following library.

|Library Name|Version|Description|
|:---|:---:|:---|
|vue-cli|5.0.8|The tool for Vue.js Development.|
|Vue.js|2.7.0|JavaScript Framework|
|Vuex|3.6.2|Flux library for Vue.js|

# Todos
Next step is to factorize the code of MessageVue and ThreadVue to get a shared logic.

<!--
## Contribution
Please read CONTRIBUTING.md for proposing new functions, reporting bugs and submitting pull requests before contributing to this repository.
-->

## License
The License of this sample is *MIT License*.

## Test from mosli48
This is a test from mosli48, commit this modification to README.md
