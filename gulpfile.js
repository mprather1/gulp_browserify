var gulp = require("gulp");
var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var browserify = require("browserify");

gulp.task('default', ['js']);

gulp.task('js', function(){
  browserify('./app/js/app.js')
    .bundle()
    .on('error', function(e){
      gutil.log(e)
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/js/dist'))
});