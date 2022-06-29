//Обработка HTML
const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const htmlmin = require("gulp-htmlmin");
const fileInclude = require("gulp-file-include");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const typograf = require('gulp-typograf');
const webpHtml = require('gulp-webp-html');

const html = () => {
   return src(["./src/html/*.html"])
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title: "HTML",
         message: error.message
      }))
   }))
   .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
   .pipe(typograf({
      locale: ['ru', 'en-US']
    }))
   .pipe(webpHtml())
   .pipe(htmlmin({ collapseWhitespace: true }))
   .pipe(dest('dist/'));
};


module.exports = html;