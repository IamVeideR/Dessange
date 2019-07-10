module.exports = function () {
    $.gulp.task('fonts', function(){
        return $.gulp.src('src/static/fonts/*.{eot,svg,ttf,woff,otf}')
        .pipe($.gulp.dest('build/static/css/fonts'));
    }); 
}