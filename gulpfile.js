var args        = require('yargs').argv,
    path        = require('path'),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    gulpsync    = $.sync(gulp),
    PluginError = $.util.PluginError;

// production mode (see build task)
var isProduction = false;
// styles sourcemaps
var useSourceMaps = false;

// MAIN PATHS
var paths = {
  app: 'app/',
  vendor: 'app/vendor/',
};


// SOURCES CONFIG
var source = {
  html:     ['src/**/*.html'],
  js:       ['src/**/*.js', 'src/**/*.jsx'],
  less:     ['src/app.less'],
  assets:   ['assets/**/*']
};

// PLUGINS OPTIONS
var vendorUglifyOpts = {
  mangle: {
    except: ['$super'] // rickshaw requires this
  }
};


//---------------
// TASKS
//---------------
gulp.task('html', function() {
  log('Copying HTML files...');
  return gulp.src(source.html)
    .pipe(gulp.dest(paths.app));
});

gulp.task('scripts', function() {
  log('Building application scripts..');
  return gulp.src(source.js)
      .pipe($.babel({
        //"plugins": ["transform-es2015-modules-system"],
        "presets":['react','es2015']
      }))
      .on("error", handleError)
      .pipe($.if( isProduction, $.uglify({preserveComments:'license'}) ))
      .on("error", handleError)
      .pipe($.if( useSourceMaps, $.sourcemaps.write() ))
      .pipe(gulp.dest(paths.app));
});

gulp.task('styles', function() {
    log('Building application styles...');
    return gulp.src(source.less)
        .pipe( $.if( useSourceMaps, $.sourcemaps.init() ))
        .pipe( $.less() )
        .on("error", handleError)
        .pipe( $.if( isProduction, $.cssnano() ))
        .pipe(gulp.dest(paths.app));
});

gulp.task('vendor', function() {
  log('Bundling vendor scripts...');
  return $.jspmBuild({
    bundles: [
      { src: 'react + react-bootstrap + rx-react + bootstrap + jquery',
        dst: 'react.min.js',
        options: {
          'minify': true,
          'mangle': true,
          'skip-source-maps': true
        }
      }
    ]
  }).pipe(gulp.dest(paths.vendor));
});

gulp.task('packages', function() {
  log('Copying jspm package files...');
  gulp.src('jspm_packages/**/*')
    .pipe(gulp.dest(paths.app + 'jspm_packages'));
  gulp.src('config.js')
    .pipe(gulp.dest(paths.app));
});

gulp.task('assets', function() {
    log('Copying assets...');
    return gulp.src(source.assets)
        .pipe(gulp.dest(paths.app + 'assets'));
});

//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', function() {
  log('Starting watch and LiveReload..');

  $.livereload.listen();

  gulp.watch(source.html,   ['html']);
  gulp.watch(source.js,     ['scripts']);
  gulp.watch(source.less,   ['styles']);
  gulp.watch(source.assets, ['assets']);

  // a delay before triggering browser reload to ensure everything is compiled
  var livereloadDelay = 1500;
  // list of source file to watch for live reload
  var watchSource = [].concat(
    source.html,
    source.js,
    source.less,
    source.assets
    );

  gulp
    .watch(watchSource)
    .on('change', function(event) {
      setTimeout(function() {
        $.livereload.changed( event.path );
      }, livereloadDelay);
    });

});


//---------------
// MAIN TASKS
//---------------

// build for production (minify)
gulp.task('build', gulpsync.sync(['prod','compile']));

// rebuild all for production
gulp.task('rebuild', gulpsync.sync(['clean','vendor','build','packages']));

gulp.task('prod', function() {
  log('Starting production build...');
  isProduction = true;
});

// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function(){ useSourceMaps = true; });

// default (no minify)
gulp.task('default', ['compile','watch'], function(){

  log('************');
  log('* All Done * You can start editing your code, LiveReload will update your browser after any change..');
  log('************');
});

gulp.task('compile',['html','scripts','styles','assets']);

gulp.task('clean', function() {
  log("Clean up.");
  return gulp.src(paths.app)
      .pipe($.rimraf({force:true}));
});

// Error handler
function handleError(err) {
  log(err.toString());
  this.emit('end');
}

// log to console using
function log(msg) {
  $.util.log( $.util.colors.blue( msg ) );
}
