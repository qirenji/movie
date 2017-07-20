var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var bodyParser =require('body-parser')
/*bodyParser中间键用来解析post方法中req.body中的json数据*/
var cookieParser =require('cookie-parser')
/*cookieParser可以通过req.cookies可以取到传过来的cookie*/
var session =require('express-session')
var mongoStore = require('connect-mongo')(session)
/*session存储到mongodb中*/
var logger = require('morgan')
/*将请求信息打印在控制台，便于开发调试*/
var serveStatic = require('serve-static')
// 静态资源请求路径

var port = process.env.PORT || 18002
/*环境变量里的Port号优先*/
var app = express()
var fs = require('fs')

var env = process.env.NODE_ENV ||'development'
var dbUrl = 'mongodb://localhost:27017/imooc'

if(env === 'development') {
var dbUrl = 'mongodb://localhost:27017/imooc'
}

mongoose.connect(dbUrl)
//连接mongodb数据库

// models loading
var models_path = __dirname + '/app/models'
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file
      var stat = fs.statSync(newPath)//获取文件信息

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath)
      }
    })
}
walk(models_path)


app.set('views', './app/views/pages')
app.set('view engine', 'jade')
//设置视图层路径 和 模版语言

app.use(bodyParser.urlencoded({extended:true}))
//解析form传过来的数据
app.use(bodyParser.json())
//解析json数据

app.use(cookieParser())
app.use(session({
  secret: 'imooc',
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  })
}))

//如果是开发模式使用如下代码进行调试
if ('development' === app.get('env')) {
  app.set('showStackError', true)
  app.use(logger(':method :url :status'))
  app.locals.pretty = true
  //jade模板引擎默认会压缩html代码  开启pretty可以保持格式化后的代码
  //mongoose.set('debug', true)
}

require('./config/routes')(app)

app.listen(port)
app.locals.moment = require('moment')
//日期处理和解析
app.use(serveStatic(path.join(__dirname, 'public')))
//静态资源路径

console.log('imooc started on port ' + port)

