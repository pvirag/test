# Steps

- navigate to `src` folder
- run `npm install`
- for dev run `npm run dev`
- for build + test run `npm run build`

# Decisions

- CSSNext with PostCSS rather than preprocessor
- CommonJS for JS file management with browserify to compile
- jQuery is used
- CSS and JS files are concatenated and minified
- Karma as test runner
- Mocha with Chai as test framework and assertion library
- npm as task manager instead of Grunt or Gulp
