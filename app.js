const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html' /** also called MIME type */
  })
  res.write('<h1>A page served on every single request</h1><div>Made possible by setting <tt>\'content-type\': \'text/html\'</tt></div>')
  console.log('Something hit the server')
  res.end()
})

server.listen(5000)

