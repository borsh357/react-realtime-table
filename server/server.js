const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const socketServer = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// const fs = require('fs')
// app.get('/data', (req, res) => {
//   fs.readFile('db.json', function (err, data) {
//     res.send(data)
//   })
// })

const server = http.createServer(app)
const io = socketServer(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

/***************************************************************************************** */
/* Socket logic starts here																   */
/***************************************************************************************** */
const connections = []
io.sockets.on('connection', function (socket) {
  console.log('Connected to Socket - ' + socket.id)
  connections.push(socket)
  console.log(connections.length + ' clients connected')
  socket.on('disconnect', function () {
    console.log('Disconnected - ' + socket.id)
    connections.splice(socket)
  })

  socket.on('change', (data) => {
    console.log(data)
  })

  // socket.on('loadData', (data) => {
  //   const fs = require('fs');
  //   fs.readFile('db.json', function (err, data) {
  //     const db = JSON.parse(data);
  //     io.sockets.emit('loadTable', db);
  //     fs.writeFile('db.json', JSON.stringify(db), (err) => {
  //       if (err) throw err;
  //     });
  // })
})

server.listen(4000, () => {
  console.log('Server running on port 4000...')
})

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middleware = jsonServer.defaults()

// server.use((req, res, next) => {
//   setTimeout(() => next(), 2000)
// })
// server.use(middleware)
// server.use(router)
// server.listen(4000, () => {
//   console.log(`JSON Server is running on port 4000...`)
// })
