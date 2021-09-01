//Pulizia HTML
const gulp = require('gulp');  
const htmlmin = require('gulp-htmlmin');
  
gulp.task('clean_up', () => {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('disttwo'));
}); 

//Pulizia CSS
const purgecss = require('gulp-purgecss');

gulp.task('cleanmys', () => {
    return gulp.src('*.css')
    .pipe(purgecss({
        content: ['index.html']
    }))
    .pipe(gulp.dest('dist/css'))
}) 








