
var express = require('express'),
		app = express()

var imgs = [
	"http://localhost/images/0.jpg",
	"http://localhost/images/1.jpg",
	"http://localhost/images/2.jpg"
]
 
app.use(express.static(__dirname + '/views'));

// Index

app.get('/', function (req, res) {
  // res.send('Hello World')
  res.render('index')
})

// API

app.get('/api', function (req, res) {
  res.send('Esto es la API')
  // res.render('index')
})

app.get('/api/request-images', function (req, res) {
  res.json(imgs)
})

app.get('/api/send-positions', function (req, res) {
})

app.listen(3000)