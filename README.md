<p align="center">
    <img alt="idea plant" src="static/plant1.svg" width="70" />
  </a>
</p>
<h1 align="center">
  Welcome to Tandelorian Forest
</h1>

This simple app was designed to help the Tandelorians at Tandem keep track of their ever growing forest of plants. It's tough work keeping track of when to water each one. Hopefully this can help.


_See below a couple ways to use this tool as well as the work that went into creating it._ 

## ⚡️ How to get started

1.  **Download the repo to your machine to run it locally.**

    Navigate to the folder in your terminal and make sure all of your dependencies are installed.

    ```
    npm install
    ```
    Then you can run the site in Node using 

    ```
    npm start
    ```
    Then in your browser visit `http://localhost:8000`


1.  **Simply visit the deployed website online.**

    Navigate in your browser to [tandelorianforest.com](www.google.com)

    Here you will find the deployed site.

## 🚘 What is running under the hood?

- This site was created with the [React](https://www.reactjs.org). This framework is a component-based JavaScript library used to build user interfaces.

- For styling I used [Tailwind](https://www.tailwindcss.com) which is a utility-first CSS framework. According to their own site: "Most CSS frameworks do too much." Instead Tailwind supplies low-level utility classes and lets you code the rest.

- To ensure consistency across the application [Prettier](https://prettier.io/) was used for code formatting. 

- This site was spun up using [Gatsby](https://www.gatsbyjs.org/) and many of the dependencies will be related to their default dependencies.

Here is a quick look at the top-level files and directories you'll see in this application.

    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    └── tailwind.config.js

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1. **`/static`**: This folder is used to hold svg images for each plant. The reference is held in the data.json file.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierignore`**: This file tells Prettier which files it should not format when it runs.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: Gatsby is licensed under the MIT license.

1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`postcss.config.js`**: This file is used to configure the plugin for Tailwind.

1. **`README.md`**: A text file containing useful reference information about the project. You're reading it now. 😉

1. **`tailwind.config.js`**: This file contains any modifications or configurations made by the developer to the Tailwind rules. The only changes I made were to add an extra small screen size.


## 🚀 Deployed With Netlify

- Learn more about deploying your code to Netlify

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## 👋 Want to learn more?

- **Looking for more of my work?** Most of my code lives [on my github](https://www.github.org/cm718).

- **If you live around Chicago and would like to grab coffee** to discuss _coding, good food, or board games_ then [email me](mailto:info@chrismclaughlin.dev).

- And if you read this far -- *thank you*! 🙏