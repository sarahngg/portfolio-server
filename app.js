const http = require('http')

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(`${method} ${url}`)
  if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Home</h1><div>Made possible by setting <tt>\'content-type\': \'text/html\'</tt></div>')
  } else if (url === '/contact') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Contact</h1>')
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>Page not found :(</h1>')
  }
  res.end()
})

server.listen(5000)

