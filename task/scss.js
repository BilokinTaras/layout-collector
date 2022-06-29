//Обработка HTML
const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));

const webpCss = require('gulp-webp-css');


const scss = () => {
   return src("./src/scss/**/*.scss", {sourcemaps: true})
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "CSS",
         message: error.message
      }))
   }))
   .pipe(sass())
   .pipe(webpCss())
   .pipe(autoprefixer({
      cascade: false,
      grid: true,
   }))
   .pipe(groupCssMediaQueries())
   .pipe(dest('dist/css'), {sourcemaps: true})
   .pipe(rename({
      suffix: ".min"
   }))
   .pipe(csso())

   .pipe(dest('dist/css'), {sourcemaps: true})
   .pipe(browserSync.stream());
};


module.exports = scss;