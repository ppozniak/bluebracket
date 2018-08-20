// generated on 2017-09-10 using generator-webapp 3.0.1
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const critical = require('critical').stream;
const langHelper = require('handlebars-helper-i18n');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let dev = true;


/** @name html */
gulp.task('html', ['handlebars', 'styles', 'scripts'], () => {
  return gulp.src('dist/*.html')
    .pipe($.useref({searchPath: ['dist', 'src', '.']}))
    .pipe($.if(/\.js$/, $.uglify()))
    .pipe($.if(/\.css$/, $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if(/\.html$/, $.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: {compress: {drop_console: true}},
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))
    .pipe(gulp.dest('dist'));
});


/** @name critical */
gulp.task('critical', () => {
  return gulp.src('dist/index.html')
   .pipe(critical({
     inline: true,
     base: 'dist/',
     src: 'index.html',
     minify: true,
     extract: true,
     inlineImages: true,
   }))
   .pipe(gulp.dest('dist'));
});

/** @name criticalCss */
gulp.task('criticalCss', () => {
  del(['dist/styles/main.css']);

  return gulp.src('dist/styles/main.*.css')
  .pipe($.cssnano({safe: true, autoprefixer: false}))
  .pipe(gulp.dest('dist/styles'));
});

/** @name handlebars */
gulp.task('handlebars', () => {
  delete require.cache[require.resolve('./src/partials/templateData.js')];
  const templateData = require('./src/partials/templateData.js');
  const options = {
    ignorePartials: true,
    batch: ['src/partials'],
    helpers: {
      capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
      i18n: langHelper.i18n
    }
  };

  return gulp.src('src/*.html')
     .pipe($.compileHandlebars(templateData, options))
     .pipe(gulp.dest('dist'))
     .pipe(reload({stream: true}));
});


/** @name styles */
gulp.task('styles', () => {
  return gulp.src('src/styles/*.scss')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});


/** @name scripts */
gulp.task('scripts', () => {
  const b = browserify({
    entries: 'src/scripts/main.js',
    debug: true
  }).transform('babelify');

  return b.bundle()
  .pipe($.plumber())
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe($.if(dev, $.sourcemaps.init()))
  .pipe($.if(dev, $.sourcemaps.write('.')))
  .pipe(gulp.dest('dist/scripts'))
  .pipe(reload({stream: true}))
});

/** @name lint */
function lint(files) {
  return gulp.src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('src/scripts/**/*.js')
    .pipe(gulp.dest('src/scripts'));
});


/** @name images */
gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});


/** @name icons */
gulp.task('icons', () => {
  return gulp.src('src/styles/icons/fonts/*')
    .pipe($.if(dev, gulp.dest('dist/fonts'), gulp.dest('dist/fonts')));
});


/** @name projects */
gulp.task('projects', () => {
  return gulp.src('src/projects/*')
    .pipe(gulp.dest('dist/projects'));
});


/** @name extras */
gulp.task('extras', () => {
  return gulp.src([
    'src/*',
    '!src/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});


/** @name clean */
gulp.task('clean', del.bind(null, ['dist']));


/** @name serve */
gulp.task('serve', () => {
  runSequence(['clean'], ['handlebars', 'styles', 'scripts', 'icons'], ['html'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      ghostMode: false,
      server: {
        baseDir: ['dist', 'src']
      }
    });

    gulp.watch([
      'src/*.html',
      'src/images/**/*',
    ]).on('change', reload);

    gulp.watch(['src/partials/*', 'src/*.html'], ['html']);
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/styles/icons/*', ['icons']);
  });
});

gulp.task('serve:dist', ['default'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});


/** @name build */
gulp.task('build', ['lint', 'images', 'extras', 'icons', 'projects', 'scripts'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  return new Promise(resolve => {
    dev = false;
    runSequence(['clean', 'styles'], 'build', 'html', 'critical', 'criticalCss', resolve);
  });
});
