const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const resources = () => {
   return src("./src/resources/**")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "Resources",
            message: error.message
         }))
      }))
     .pipe(dest('dist/resources'))
     .pipe(browserSync.stream());
};

module.exports = resources;