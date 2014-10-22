var fs = require('fs')

var path = require('path')

module.exports = function (dir, ext, callback) {

  var fileList = []

  fs.readdir(dir, function (err, list) {
  if (err) return callback(err);
  list.forEach(function (file) {
    var ext1 = path.extname(file)
    var ext2 = '.' + ext

    if ( path.extname(file) == '.' + ext )
      fileList.push(file)
    })
    return callback(null, fileList)
  })

}
