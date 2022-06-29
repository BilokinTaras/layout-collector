const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const vendorcss = () => {
   return src("./src/scss/vendor/*.css")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "Vendor CSS",
            message: error.message
         }))
      }))
     .pipe(dest('dist/css/vendor'))
     .pipe(browserSync.stream());
};

module.exports = vendorcss;