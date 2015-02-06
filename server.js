var express = require('express')
var pipe = require('pipe')
var request = require('request')
 
var app = express();
 
// Remote host API root url
var API = 'http://www.myweather2.com/developer/forecast.ashx'
 
app.listen(9000)
 
// Local api url
app.use('/weather', function(req, res){
	var url = API + req.url
	console.log('Proxying: ' + url)
	req.pipe(request(url)).pipe(res)
})
 
// Static routing
app.all('/*', function(req, res){
	var url = __dirname + req.url
	console.log('Serving url: ' + url)
	res.sendFile(url)
})
 
console.log('Listening...') 