// generated on 2017-09-10 using generator-webapp 3.0.1
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const wiredep = require('wiredep').stream;
const runSequence = require('run-sequence');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const critical = require('critical').stream;
const merge = require('merge-stream');
const langHelper = require('handlebars-helper-i18n');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let dev = true;


/** @name html */
gulp.task('html', ['handlebars', 'styles', 'scripts'], () => {
  return gulp.src('dist/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
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
  delete require.cache[require.resolve('./app/partials/templateData.js')];
  const templateData = require('./app/partials/templateData.js');
  const options = {
    ignorePartials: true,
    batch: ['app/partials'],
    helpers: {
      capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
      i18n: langHelper.i18n
    }
  };

  return gulp.src('app/*.html')
     .pipe($.compileHandlebars(templateData, options))
     .pipe($.if(dev, gulp.dest('.tmp'), gulp.dest('dist')))
     .pipe(reload({stream: true}));
});


/** @name styles */
gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});


/** @name scripts */
gulp.task('scripts', () => {
  const b = browserify({
    entries: 'app/scripts/main.js',
    debug: true
  });

  return b.bundle().on('error', $.notify.onError(function(err) {
    $.util.log($.util.colors.red(err.message));
    return {
      title: 'JS ERROR',
      message: err.message
    };
  }))
  .pipe($.plumber())
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe($.if(dev, $.sourcemaps.init()))
  .pipe($.babel())
  .pipe($.if(dev, $.sourcemaps.write('.')))
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe(reload({stream: true}))
  .pipe($.notify({
    title: 'Done',
    onLast: true
  }));
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
  return lint('app/scripts/**/*.js')
    .pipe(gulp.dest('app/scripts'));
});


/** @name images */
gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});


/** @name fonts */
gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe($.if(dev, gulp.dest('.tmp/fonts'), gulp.dest('dist/fonts')));
});


/** @name icons */
gulp.task('icons', () => {
  return gulp.src('app/styles/icons/fonts/*')
    .pipe($.if(dev, gulp.dest('.tmp/fonts'), gulp.dest('dist/fonts')));
});


/** @name projects */
gulp.task('projects', () => {
  return gulp.src('app/projects/*')
    .pipe(gulp.dest('dist/projects'));
});


/** @name extras */
gulp.task('extras', () => {
  return gulp.src([
    'app/*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});


/** @name clean */
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));


/** @name serve */
gulp.task('serve', () => {
  runSequence(['clean', 'wiredep'], ['handlebars', 'styles', 'scripts', 'fonts', 'icons'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      ghostMode: false,
      server: {
        baseDir: ['.tmp', 'app'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch([
      'app/*.html',
      'app/images/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch(['app/partials/*', 'app/*.html'], ['handlebars']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('app/styles/icons/*', ['icons']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
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

/** @name wiredep */
// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe($.filter(file => file.stat && file.stat.size))
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});


/** @name build */
gulp.task('build', ['lint', 'images', 'fonts', 'extras', 'icons', 'projects', 'scripts'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  return new Promise(resolve => {
    dev = false;
    runSequence(['clean', 'wiredep', 'styles'], 'build', 'html', 'critical', 'criticalCss', resolve);
  });
});
