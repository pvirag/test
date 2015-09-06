# Steps

- navigate to `src` folder
- run `npm install`
- for dev run `npm run dev`
- for build + test run `npm run build`
- preview `index.html` in browser (tested on latest Safari Mac and Chrome Mac)

# Decisions

- CSSNext with PostCSS rather than preprocessor
  - new language features that are or will be part of the final specification
  - including variables, custom media queries, custom selectors
- CommonJS for JS module management with browserify to compile
  - ES6 JS module management in terms of syntax is similar to CommonJS
- jQuery is used
- CSS and JS files are concatenated and minified
- Karma as test runner
- Mocha as test framework
- Chai as assertion library
  - supports both TDD and BDD assertions 
- npm as task manager and runner instead of Grunt or Gulp
