module.exports = function(grunt) {

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    watch: {
      jade: {
        files: ['views/**'],
        options: {
          livereload: true//页面自动刷新
        }
      },
      js: {
        files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js'],
        //tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      uglify: {
        files: ['public/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['public/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },

    jshint: {//js语法检查
      options: {
        jshintrc: '.jshintrc',
        ignores: ['public/libs/**/*.js']
      },
      all: ['public/js/*.js', 'test/**/*.js', 'app/**/*.js']
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'public/build/index.css': 'public/less/index.less'
        }
      }
    },

    uglify: {//压缩文件
      development: {
        files: {
          'public/build/admin.min.js': 'public/js/admin.js',
          'public/build/detail.min.js': [
            'public/js/detail.js'
          ]
        }
      }
    },

    nodemon: {//文件有变动重启服务
      dev: {
        options: {
          file: 'app.js',
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
          watchedExtensions: ['js'],
          watchedFolders: ['./'],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    },

    concurrent: {
      tasks: ['nodemon', 'watch', 'less', 'uglify', 'jshint'],
      options: {
        logConcurrentOutput: true//输出log
      }
    }
  })

  //监听文件变动
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-nodemon')
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-mocha-test')
  //less文件编译
  grunt.loadNpmTasks('grunt-contrib-less')
  //压缩文件
  grunt.loadNpmTasks('grunt-contrib-uglify')
  //语法检查
  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.option('force', true)

  grunt.registerTask('default', ['concurrent'])
  grunt.registerTask('build',['less','uglify'])
  //自定义任务test
  grunt.registerTask('test', ['mochaTest'])
}