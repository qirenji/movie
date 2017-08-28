var mongoose = require('mongoose')
var Category = mongoose.model('Category')

// 分类主页
exports.new = function(req, res) {
  res.render('category_admin', {
    title: '后台分类录入页',
    category: {}
  })
}

// 分类存储
exports.save = function(req, res) {
  var _category = req.body.category
  var category = new Category(_category)

  category.save(function(err, category) {
    if (err) {
      console.log(err)
    }

    res.redirect('/admin/category/list')
  })
}

// 分类列表页
exports.list = function(req, res) {
  Category.fetch(function(err, catetories) {
    if (err) {
      console.log(err)
    }

    res.render('categorylist', {
      title: '分类列表页',
      catetories: catetories
    })
  })
}