const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');

const sprite = () => {
   return src("./src/img/svg/**.svg")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "SVG",
            message: error.message
         }))
      }))
     .pipe(
      svgmin({
            js2svg: {
               pretty: true,
            },
         })
      )
      .pipe(
         cheerio({
         run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
         },
         parserOptions: {
            xmlMode: true
         },
         })
      )
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: "../sprite.svg"
            }
         },
      }))
     .pipe(dest('dist/img/'))
     .pipe(browserSync.stream());
};

module.exports = sprite;