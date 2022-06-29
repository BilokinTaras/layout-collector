//Обработка HTML
const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const groupCssMediaQueries = require("gulp-group-css-media-queries");


const webpCss = require('gulp-webp-css');


const css = () => {
   return src("./src/css/**/*.css", {sourcemaps: true})
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "CSS",
         message: error.message
      }))
   }))
   .pipe(concat("other.css"))
   .pipe(cssimport())
   .pipe(webpCss())
   .pipe(autoprefixer())
   .pipe(groupCssMediaQueries())
   .pipe(dest('dist/css/'), {sourcemaps: true})
   .pipe(rename({
      suffix: ".min"
   }))
   .pipe(csso())
   .pipe(dest('dist/css/'), {sourcemaps: true})
   .pipe(browserSync.stream());
};


module.exports = css;