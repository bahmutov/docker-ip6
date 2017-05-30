const http = require('http')
const server = http.createServer((req, res) => {
  console.log('request', req)
  res.writeHead(200)
  res.end()
})
server.listen(6500, '::1', () => {
  console.log('listening at ip6 :6500')
})
