const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");


const image = () => {
   return src("./src/img/**/**.{jpg,jpeg,png,svg}")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "Image",
            message: error.message
         }))
      }))
     .pipe(newer('dist/img'))
     .pipe(imagemin())
     .pipe(dest('dist/img'))
     .pipe(browserSync.stream());
};

module.exports = image;