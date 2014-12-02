
// console.log("HELLO WORLD")

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

// var mymodule = require('./mymodule.js')

// var dir = process.argv[2]

// var ext = process.argv[3]

// mymodule(dir, ext, function(err, list) {
//   if (err) throw err;
//   list.forEach(function (file) {
//    console.log(file);
//   })
// });

// ------------------------------------

// console.log(process.argv)

// var http = require('http')

// var url = process.argv[2]

// http.get(url, function(response) {
// 	response.setEncoding('utf8')
// 	response.on('data', console.log)
// 	response.on('error', console.error)
// })

// ------------------------------------

// var bl = require('bl')

// var http = require('http')

// var url = process.argv[2]

// http.get(url, function(response) {

// 	response.pipe(bl(function(err, data) {
// 		if (err)
//           return console.error(err)
// 		console.log(data.length)
// 		console.log(data.toString())

// 	}))

// })

// ------------------------------------

// console.log(process.argv)

// var http = require('http')

// var bl = require('bl')

// var urls = process.argv.slice(2, process.argv.length)

// var callbackCount = 0

// var responses = []

// function printResults () {
// 	responses.forEach(function(response) {
// 		console.log(response)
// 	})
// }

// function httpGet (url) {

// 	http.get(url, function(response) {
// 		response.pipe(bl(function(err, data) {
// 			if (err)
//           		return console.error(err)
//           	responses[urls.indexOf(url)] = data.toString()
//           	callbackCount++

//           	if ( callbackCount == 3)
//           		printResults()
// 		}))
// 	})

// }

// urls.forEach(function(url){
	
// 	httpGet(url)

// })

// ------------------------------------

// console.log(process.argv)

// var net = require('net')

// var strftime = require('strftime')

// var socket = process.argv[2]

// var server = net.createServer(function (socket) {
// 	// date = new Date()
// 	// now = date.getTime()
// 	socket.end(strftime('%Y-%m-%d %H:%M') + '\n')
// })
// server.listen(socket)

// ------------------------------------

console.log(process.argv)

var http = require('http')

var fs = require('fs')

var port = process.argv[2]

var filePath = process.argv[3]

var server = http.createServer( function (req, res) {
	fs.createReadStream()
})
server.listen(port)


