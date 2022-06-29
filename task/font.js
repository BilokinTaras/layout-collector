//Обработка HTML
const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require('gulp-ttf2woff2');


const font = () => {
   return src("./src/font/**/*.{eot,ttf,otf,otc,ttc,woff2,svg}")
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "Font",
         message: error.message
      }))
   }))
   .pipe(newer('dist/'))
   .pipe(fonter({
      formats: ["woff", "ttf", "eot", "svg"]
   }))
   .pipe(dest('dist/font'))
   .pipe(ttf2woff2())
   .pipe(dest('dist/font'))
   .pipe(browserSync.stream());
};


module.exports = font;