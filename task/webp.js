const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');



const webpImages = () => {
   return src([`./src/img/**/**.{jpg,jpeg,png}`])
     .pipe(webp())
     .pipe(dest('dist/img'))
     .pipe(browserSync.stream());
};

module.exports = webpImages;