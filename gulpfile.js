const gulp = require( 'gulp')
    ,useref = require( 'gulp-useref')
    ,htmlmin = require( 'gulp-htmlmin')
    ,plumber = require( 'gulp-plumber')
    ,gm = require('gulp-gm')
    ,watch = require( 'gulp-watch')
    ,prefixer = require( 'gulp-autoprefixer')
    ,uglify = require( 'gulp-uglify')
    ,sass = require( 'gulp-sass')
    ,sourcemaps = require( 'gulp-sourcemaps')
    ,imageResize = require('gulp-image-resize')
    ,rigger = require( 'gulp-rigger')
    ,cssmin = require( 'gulp-clean-css')
    ,rimraf = require( 'rimraf')
    // ,pug = require('gulp-pug')
    ,browserSync = require( 'browser-sync')
    ,babel= require('gulp-babel')
    ,reload = browserSync.reload
    ,changeCase = require('change-case')
    ,rename = require("gulp-rename");


const path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        json: 'build/jsons/'
    },
    src: {
        html: ['src/**/*.html'],
        js: 'src/js/**/*.js',
        style: 'src/style/*.scss',
        img: ['src/img/**/**.*', 'src/img/**', 'src/img/*.*', 'src/img/photos/**/**.*', 'src/img/photos/**/*.*'],
        fonts: 'src/fonts/**/*.*',
        json: 'src/jsons/*.json'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**',
        fonts: 'src/fonts/**/*.*',
        json: 'src/jsons/*.json'
    },
    clean: 'build'
};

const config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: false,
    host: 'localhost',
    port: 9999,
    logPrefix: "front_log"
};

const logErr = function( err){
    console.warn( err);
    this.emit( 'end');
}

gulp.task( 'json:build', function () {
  gulp.src( path.src.json)
    .pipe( gulp.dest( path.build.json))
    .pipe( reload( { stream: true}));
});

gulp.task( 'html:build', function () {
    gulp.src( path.src.html)
        // .pipe(pug())
        .pipe( plumber())
        .pipe( rigger())
        .pipe( useref())
        // .pipe( htmlmin({collapseWhitespace: true}))
        .pipe( gulp.dest( path.build.html))
        .pipe( reload( { stream: true}));
});

gulp.task( 'js:build', function () {
    gulp.src( path.src.js)
        .pipe( babel({
            presets: ['es2015'],
            compact: false
        }))
        // .pipe( plumber())
        // .pipe( rigger())
        // .pipe( sourcemaps.init())
        // .pipe( uglify())
        // .pipe( sourcemaps.write())
        .pipe( gulp.dest( path.build.js))
        .pipe( reload( { stream: true}));
});

gulp.task( 'style:build', function () {
    gulp.src( path.src.style)
        .pipe( plumber())
        .pipe( sourcemaps.init())
        .pipe( sass({
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe( prefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        // .pipe( cssmin())
        // .pipe( sourcemaps.write())
        .pipe( gulp.dest(path.build.css))
        .pipe( reload( { stream: true}));
});

gulp.task( 'image:build', function () {
    gulp.src(path.src.img)
        .pipe( plumber())
        .pipe( rename( (path) => {
            path.dirname = changeCase.lowerCase(path.dirname);
            path.basename = changeCase.lowerCase(path.basename);
            path.extname = changeCase.lowerCase(path.extname);
        }))
        .pipe( gulp.dest( path.build.img))
        .pipe( reload( { stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src( path.src.fonts)
        .pipe( plumber())
        .pipe( gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'json:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
      watch([path.watch.json], function(event, cb) {
        gulp.start('json:build');
      });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('server', function () {
    browserSync({
        server: {baseDir: path.build.html},
        notify: false
    });
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'server', 'watch']);


