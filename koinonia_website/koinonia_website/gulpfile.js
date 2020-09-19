const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//編譯pug
function html() {
    return gulp
        .src('public/pug/*.pug') // Pug 主檔案路徑
        .pipe(pug()) // 使用 gulp-pug 進行編譯
        .pipe(gulp.dest('./public/')); // 編譯完成輸出路徑
}
//編譯sass
function style() {
    // return gulp.src('public/sass/*.sass')
    //     .pipe(sass().on('error', sass.logError))
    //     .pipe(gulp.dest('./public/css'))
    //     .pipe(browserSync.stream());
    return gulp
        .src('public/sass/*.sass') // sass 主檔案路徑
        .pipe(sass()) // 使用 gulp-sass 進行編譯
        .pipe(gulp.dest('./public/css/')); // 編譯完成輸出路徑
}
//靜態頁面html即時預覽
function watch() {
    browserSync.init({
        server: {
            baseDir: "public/",
            directory: true
        }
    });

    gulp.watch('public/sass/*.sass', style);
    gulp.watch('public/pug/*.pug', html);
    gulp.watch('public/index.html').on('change', browserSync.reload);
    gulp.watch('public/sass/*.sass').on('change', browserSync.reload);
    gulp.watch('public/js/*.js').on('change', browserSync.reload);

}
exports.html = html;
exports.style = style;
exports.watch = watch;