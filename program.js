// console.log(process.argv)

// var sum = 0

// for( i = 2; i < (process.argv.length); i++ ) {
//   sum = sum + Number(process.argv[i])
// }

// console.log(sum)

// --------------------------------

// var fs = require('fs')


// var buf = fs.readFileSync(process.argv[2])

// var str = buf.toString()

// var linesArray = str.split('\n')

// var output = linesArray.length - 1

// console.log(output)

// ---------------------------------

// var fs = require('fs')

// var file = process.argv[2]

// fs.readFile(file, 'utf8', function (err, data) {
//   if (err) throw err;
//   var str = data;
//   var linesArray = str.split('\n')
//   var output = linesArray.length - 1

//   console.log(output)
// });

// ----------------------------------

// var fs = require('fs')

// var path = require('path')

// var dir = process.argv[2]

// var ext = "." + process.argv[3]

// fs.readdir(dir, function (err, list) {
//   if (err) throw err;
//   list.forEach(function (file) {
//     if ( path.extname(file) == ext )
//       console.log(file)
//   })
// })

// ------------------------------------

var mymodule = require('./mymodule.js')

var dir = process.argv[2]

var ext = process.argv[3]

mymodule(dir, ext, function(err, list) {
  if (err) throw err;
  list.forEach(function (file) {
   console.log(file);
  })
});

