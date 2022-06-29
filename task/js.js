//Обработка JavaScript
const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


const js = () => {
   return src("./src/js/**/*.js")
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "HTML",
         message: error.message
      }))
   }))
   .pipe(babel())
   .pipe(uglify())
   .pipe(dest('dist/js'))
   .pipe(browserSync.stream());
};


module.exports = js;