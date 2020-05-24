'use strict'

let PORT = process.env.PORT
if (PORT === null || PORT === '') {
  PORT = 8000
}

const HOST = 'localhost'

const server = require('./app.js')

function start () {
  server
    .listen(PORT, () => console.log(`Listening on PORT: ${PORT}, open http://${HOST}:${PORT} to preview it`))
}

start()
