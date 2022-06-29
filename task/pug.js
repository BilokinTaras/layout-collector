//Обработка PUG (Препроцессор HTML)
const { src, dest } = require('gulp');
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require('gulp-pug');

const pug = () => {
   return src("./src/pug/*.pug")
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "PUG",
         message: error.message
      }))
   }))
   .pipe(
      pugs({
        pretty: true
      })
    )
   .pipe(dest('dist/'));
};


module.exports = pug;



