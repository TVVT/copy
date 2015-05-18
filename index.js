
var express = require('express');
var app = express();
var path = require('path');

app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {
	var options = {
		link : "javascript:(function(){var d = document,a = 'setAttribute',s = d.createElement('script');s[a]('type','text/javascript');s[a]('src','http://localhost:9000/script/copy.js');d.head.appendChild(s);})();"
	}
    res.render(path.join(__dirname, 'views/index.jade'),options);
});

var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://localhost:', host, port);
});