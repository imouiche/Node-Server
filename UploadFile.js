var http = require('http');
var formidable = require('formidable'); //call this module to be able to parse the file uploaded

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //create the upload or submit html form
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('<h1> hey here</h1>');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);