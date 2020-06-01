const http = require('http')
const router = require('./router.js')
const server = http.createServer()


server.on('request', (request, response) => {
    router(request, response)
})


server.listen(3001)
console.log(`Server is running.`)