
//use my own module
var http = require('http'); // use the http module
//var dt = require('./moduleDate.js') // call module moduleDate
var fs = require('fs'); // call File System module

http.createServer(function (req, res) {
	//Open a file on the server and return its content:
	fs.readFile('demofile.html', function(err, data) {
		// body...
		res.writeHead(200, {'Content-Type': 'text/html'}); //http header as we display in HTML format, 
    // 200 is the status code
    //res.write('The current date and time is '+ dt.InoussDateTime() '<br>'); // write the response to the client
    //res.write(req.url) // path that comes after the domain name
    //res.end('Hello World!'); //end the response
    	res.write(data);
    	res.end();
	})
    
}).listen(8080); // server listen on port 8080