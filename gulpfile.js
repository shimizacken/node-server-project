var gulp = require('gulp');
var del = require('del');
var gulpPluginsLoader = require('gulp-load-plugins')();
var args = require('yargs').argv;
var filesAndFolders = ['app.js'];

gulp.task('delete-dist-folder', function(){

    return del(args.distfolder); 
});

gulp.task('copy-to-dist-folder', ['delete-dist-folder'], function(){

    return gulp.src(filesAndFolders, {"base" : "." })
    .pipe(gulp.dest(args.distfolder));
});

gulp.task('default', ['copy-to-dist-folder']);