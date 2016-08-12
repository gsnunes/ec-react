const source = require('vinyl-source-stream');
const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const watchify = require('watchify');
const notify = require('gulp-notify');
const glob = require('glob');


function getFiles(watch, done) {
  glob('./src/**/*.js', null, (err, files) => {
    done(watch, files);
  });
}


function handleErrors(...args) {
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>',
  }).apply(this, args);
  this.emit('end');
}


function buildScript(watch, files) {
  const props = {
    require: files,
    exposeAll: true,
    transform: ['babelify'],
  };

  const bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    const stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist/'));
  }

  bundler.transform('exposify', { expose: { react: 'React', 'react-dom': 'ReactDOM' } });

  bundler.on('update', () => {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
}


gulp.task('scripts', () => {
  getFiles(false, buildScript);
});

gulp.task('default', ['scripts'], () => {
  getFiles(true, buildScript);
});
