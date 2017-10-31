const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

const path = {
    css: 'dist/css/',
    scss: {
        watch: 'src/scss/**/*.scss',
        src: 'src/scss/page/*.scss'
    },
    js: {
        src: 'src/js/*.js',
        build: 'dist/js'
    }
}

const autoprefixerOpts = {
    browsers: [
        'last 2 version',
        'ie >= 11',
        'opera >= 36',
        'android >= 4'
    ],
    cascade: false
};

const cleanCssConfig = {
    debug: true,
    level: {
        2: {
            all: false,
            removeDuplicatedRules: true
        }
    }
};

gulp.task('scss', function() {
    gulp.src(path.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOpts))
        .pipe(cleanCSS(cleanCssConfig))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(path.css));
});