var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var minifyImg = require("gulp-imagemin");
var minifyImg_JPG = require("imagemin-jpeg-recompress");
var minifyImg_PNG = require("imagemin-pngquant");
var minifyImg_GIF = require("imagemin-gifsicle");

gulp.task("watch", () => {
  return gulp.watch("src/*scss", () => {
    return gulp
      .src("src/*scss")
      .pipe(sass())
      .pipe(gulp.dest("dist"));
  });
});

gulp.task("minify-img", () => {
  return gulp
    .src("src/img/*.+(jpg|jpeg|png|gif)")
    .pipe(minifyImg([minifyImg_JPG(), minifyImg_PNG(), minifyImg_GIF()]))
    .pipe(gulp.dest("dist"));
});

gulp.task(
  "default",
  gulp.series("watch", function(done) {
    done();
  })
);
