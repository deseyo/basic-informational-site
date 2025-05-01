const http = require('http');
const fs = require('node:fs/promises');

http.createServer(async (req, res) => {
  let statusCode = 200;
  let data;
  try {
    const arg = req.url.split('/')[1];
    if (arg === '') {
      data = await fs.readFile('index.html');
    }
    else {
      data = await fs.readFile(`${arg}.html`);
    }
  }
  catch (err) {
    statusCode = 404;
    data = await fs.readFile('404.html');
  }
  res.writeHead(statusCode, {'content-type': 'text/html'})
  res.write(data);
  res.end();
}).listen('8080')