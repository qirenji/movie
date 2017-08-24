'use strict';

var gulp = require('gulp');
var del = require('del');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var gulpSequence = require('gulp-sequence'); 
var openUrl = require('open');

var path = {
  src: {
    html: 'app/views/**',
    jshint: ['public/scripts/*.js','app/**/*.js','*.js','route/**'],
    scripts: 'public/scripts/**',
    sass: './public/sass/**',
    images: 'public/images/**',
    clean: 'public/dist/**'
  },
  dest: {
    scripts: 'public/dist/js',
    sass: 'public/dist/sass',
    images: 'public/dist/images',
  }
};

// 将scss文件转成css文件并压缩
gulp.task('styles', function() {
  return plugins.rubySass(path.src.sass)
   .pipe(plugins.autoprefixer({            // 自动添加游览器前缀
      browsers: ['last 2 versions'],
      cascade: false
    }))
   .pipe(plugins.rename({suffix:'.min'}))
   .pipe(plugins.minifyCss())
   .pipe(gulp.dest(path.dest.sass));
});

// // js代码校验
// gulp.task('jshint', function() {
//   return gulp.src(path.src.jshint)
//     .pipe(plugins.jshint('.jshintrc'))
//     .pipe(plugins.jshint.reporter('default'));
//   return;
// });

// js代码压缩
gulp.task('scripts', function() {
  return gulp.src(path.src.scripts)
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(path.dest.scripts));
});

// 图片压缩
gulp.task('images', function() {
  return gulp.src(path.src.images)
    .pipe(plugins.cache(plugins.imagemin({ progressive: true, interlaced: true })))
    .pipe(gulp.dest(path.dest.images));
});

// watch
gulp.task('watch', function() {
  gulp.watch(path.src.sass,['styles']);
  // gulp.watch(path.src.jshint,['jshint']);
  gulp.watch(path.src.scripts,['scripts']);
  gulp.watch(path.src.images,['images']);
  gulp.watch(path.src.html,browserSync.reload)
});

// 清除文件
gulp.task('clean', function(cb) {
  del(path.src.clean, cb());
});

// 测试任务
gulp.task('test', function() {
  // return gulp.src('test/**/*.js', {read: false})
  //   .pipe(plugins.mocha({reporter: 'spec'}));
  return
});

gulp.task('build', gulpSequence('clean', 'styles', 'images', 'scripts');

// 实时监听入口文件
gulp.task('nodemon',function() {
  plugins.nodemon({ script: 'app.js',
    ignore: ['README.md', 'node_modules/**', '.DS_Store']
  });

  openUrl('http://localhost:3000');
});
gulp.task('serve', function(){
    browserSync.init({
    proxy: 'http://localhost:3000',
    browser: 'chrome',
    port: 8000
  });
    gulp.watch('app/views/**')
    .on('change', browserSync.reload);
});
 

// 默认任务
gulp.task('default',['build','watch','nodemon','serve']);











