// 我们要压缩css，js，html，所以我们要依赖这三个插件
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
//const minifyHtml = require('gulp-minify-html');

// 对三类文件压缩并放到demo文件夹下
// 压缩js任务
gulp.task('jsUglify', function () {
	gulp.src('js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('test/js'))
})

// 压缩html任务
//gulp.task('htmlMinify', function () {
//	gulp.src('photo/index.html')
//	.pipe(minifyHtml())
//	.pipe(gulp.dest('demo'))
//})

// 压缩css任务
gulp.task('cssMinify', function () {
	gulp.src('css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('test/css'))
})

// 目前还缺少图片，和数据，

// 将图片放入demo中
gulp.task('dealImage', function () {
	// 获取img下面的所有图片
	gulp.src('img/**/*.*')
	// *匹配的会直接完整获取下来，
	.pipe(gulp.dest('test/img'))
})

// 将数据放入demo中
gulp.task('cv', function () {
	gulp.src('cv/*.*')
	.pipe(gulp.dest('test/cv'))
})

// 	启动任务
gulp.task('default', ['jsUglify', 'cssMinify', 'htmlMinify', 'dealImage', 'cv']);