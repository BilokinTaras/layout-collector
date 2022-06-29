
const { series, watch } = require("gulp");
const browserSync = require('browser-sync').create();

const clear = require('./task/clear.js');
const HTML = require('./task/html.js');
const resources = require('./task/resources.js');
const img = require('./task/img.js');
const webp = require('./task/webp.js');
const css = require('./task/css.js');
const font = require('./task/font.js');
const js = require('./task/js.js');
const scss = require('./task/scss.js');
const sprite = require('./task/sprite.js');
const vendorcss = require('./task/vendorcss.js');


const server = () => {
   browserSync.init({
     server: {
       baseDir: "dist"
     },
   });
  watch("src/html/partials/*.html", HTML).on('all', browserSync.reload);
  watch("src/html/*.html", HTML).on('all', browserSync.reload);
  watch("src/css/**/**.css", css).on('all', browserSync.reload);
  watch("src/scss/**/**.{scss, sass}", scss).on('all', browserSync.reload);
  watch("src/scss/vendor/**.scss", vendorcss).on('all', browserSync.reload);
  watch("src/js/**/*.js", js).on('all', browserSync.reload);
  watch("src/resources/**", resources).on('all', browserSync.reload);
  watch("src/img/**/**.{jpg,jpeg,png,svg}", img).on('all', browserSync.reload);
  watch("src/img/svg/**.svg", sprite).on('all', browserSync.reload);
  watch("src/img/**/**.{jpg,jpeg,png}", webp).on('all', browserSync.reload);

  watch("src/font/**/**.{ttf, woff, eot, svg}", font).on('all', browserSync.reload);

};


exports.default = series(clear, HTML, css, scss, vendorcss, font, img, sprite, webp, js, resources, server);