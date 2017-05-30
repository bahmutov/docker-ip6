const http = require('http')
const server = http.createServer((req, res) => {
  console.log('request', req)
  res.writeHead(200)
  res.end()
})
const ip = 'localhost'
const port = 6500
server.listen(port, ip, () => {
  console.log('listening at %s:%d', ip, port)
})
