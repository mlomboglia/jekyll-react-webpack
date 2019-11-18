# Jekyll Boilerplate with React using Webpack

[![npm version](https://badge.fury.io/js/jekyll-react-webpack.svg)](https://badge.fury.io/js/jekyll-react-webpack)
[![GitHub issues](https://img.shields.io/github/issues/mlomboglia/jekyll-react-webpack)](https://github.com/mlomboglia/jekyll-react-webpack/issues)
[![GitHub license](https://img.shields.io/github/license/mlomboglia/jekyll-react-webpack)](https://github.com/mlomboglia/jekyll-react-webpack/blob/master/LICENSE)

**A Jekyll boilerplate for building modern websites 🌲**

Description available in Medium Post:
https://medium.com/better-programming/build-your-great-modern-static-website-with-this-boilerplate-using-jekyll-react-and-webpack-cd63e03e4984

---

This is an update of the great boilerplate built by Forestry team incorporating the ideas shared by Alli Zadrozny on his post "Using Webpack and React with Jekyll". All the libraries have been updated, so you can now run Jekyll with React using Webpack as the wrapper.

This boilerplate wraps [Jekyll](https://jekyllrb.com) with [Gulp](https://gulpjs.com/) as your local development build pipeline.

[PostCSS](http://postcss.org/) and [Webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/) are used for CSS and JS compiling & transpiling.

[BrowserSync](https://www.browsersync.io/) is used for providing a modern local development experience, allowing you to preview your site on multiple devices in sync.

[BrowsersList](https://github.com/ai/browserslist) is used for configuring Browser support.

[SVG Sprite](https://github.com/jkphl/svg-sprite) is used to generate an SVG Sprite.

# Installation

## Prerequisites
To use Gulp, you must have [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm) installed.

If you encounter problems:  Gulp is currently not working with Node 12, downgrade to Node 11

```
npm install -g n
sudo n 11.15.0
```

## Setup

Once the prerequisites are installed, clone the repository to your local machine, and then run:

```
(sudo) gem install bundler
```
```
(sudo) bundle install
```
```
npm install
```

This will install Jekyll as well as all of the Node dependencies needed to run your Jekyll environment. This may take a little while!

# Development
All development tasks are performed using npm run. See `"scripts"` in [package.json](/package.json) for a full list of commands.

## Local Development

Local development is powered by BrowserSync, you will be able to develop sites rapidly through:

- A local development server at `http://localhost:3000/`.
- Automatic CSS updates without reloading the page
- Automatic page reloads when content is changed

Running the local development server is as simple as running:

```
npm start
```

*This will display all draft, future-dated, or expired content, which is not included in your production build.*

If you'd like to develop with the site as it will appear in production, run:

```
npm run preview
```

## Production Build

To generate a final production build on your local machine you can run:

```
npm run build
```
*The fresh production build of your site will end up in the `dist/` directory.*

# Project Structure
```
.
├── .tmp/                  // Temporary directory for development server
├── dist/                  // The production build
├── site/                  // The Jekyll project, with all content and static files
|   ├── _data/             // YAML files containing site data
|   ├── _posts/            // Jekyll's built-in blogging content type
|   ├── _layouts/          // Your theme layouts
|   ├── _includes/         // Your theme partials
|   ├── css/               // Where compiled CSS files live
|   ├── js/                // Where compiled JS files live
|   ├── img/               // Where theme images live
|   ├── uploads/           // Where user uploads are stored
|   ├── _config.yml        // Production configuration settings
|   ├── _development.yml   // Settings for local development only
|   ├── 404.md             // Error page for your site
|   └── index.md           // Homepage of your site
└─── config                // Config packs
└─── scripts               // Forestry base scripts
└─── src/
     ├── css               // CSS/SCSS source files to be compiled to /css/
     └── js                // JS source files to be compiled to /js/
      └── components       // Add your REACT components here /js/
      scripts.js           // REACT Base handler    
```

# Inline SVG
Any SVGs found in `src/img/` will be combined into a single SVG Sprite at `site/svg/sprite.symbol.svg`.

This boilerplate comes with a simple include for using SVGs in your layouts. You can select an svg by passing in its ID.

```
{% comment %}
  Using a logo stored at src/img/github.svg
{% endcomment %}
{% include svg.html id="github" class="optional-class" width="32" height="32" %}
```
**Note: the `class`, `width`, and `height` params are optional**

# Testing
This boilerplate comes with standard [ESLint](https://eslint.org/) and [StyleLint](https://github.com/stylelint/stylelint) configurations that will lint your CSS and JS for errors or common style issues, which work with most popular IDEs.

The tests can also be run from the command line:

- **JS:** `npm run eslint`
- **CSS:** `npm run stylelint`

If you want to automatically fix lint errors, you can do this from the command line as well:

- **JS:** `npm run eslint:fix`
- **CSS:** `npm run stylelint:fix`

# Cleanup

This boilerplate is self-cleaning, and will remove the production `dist/` and development `.tmp/` folders every time a command is run to ensure that their contents are always up to date.

If you wish to manually cleanup, run:

```
npm run clean
```

# Configuration
All build tasks are handled by Gulp and are located in `gulpfile.babel.js`. All parts of the build are configurable in discrete files to make management easy.

## Paths
All build source and destination paths can be configured from `static-scripts.config.js`.

## Jekyll
The build commands for Jekyll can be configured from `stat-cscripts.config.js`. Build commands are set based on the `NODE_ENV` environment variable. You can optionally load different args using the `GENERATOR_ARGS` environment variable.

Four options are available:
- `default`: the default build commands that are always run
- `development`: additional build commands for the development server
- `preview`: additional build commands for a production development server
- `production`: additional build commands for production builds

## BrowserSync Development Server
The configuration for BrowserSync is found in `.browsersyncrc.js`

## CSS/SASS
The configuration for PostCSS is found in `.postcssrc.js`

## Browser support
Both PostCSS and Webpack use `.browserslistrc` to decide on browser support when compiling.

## Licensing
This boilerplate project is released under the [MIT license](/LICENSE).
