const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const socketServer = require('socket.io')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const server = http.createServer(app)
const io = socketServer(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

const connections = []
const cursors = []
io.sockets.on('connection', function (socket) {
  console.log('Connected to Socket - ' + socket.id)
  connections.push(socket)

  socket.on('disconnect', function () {
    console.log('Disconnected - ' + socket.id)
    connections.splice(connections.indexOf(socket), 1)
  })

  socket.on('changeTable', (data) => {
    const fs = require('fs')
    fs.writeFile('server/db.json', JSON.stringify(data), (err) => {
      if (err) throw err
    })
    socket.emit('loadTable')
  })

  socket.on('loadTable', (data) => {
    const fs = require('fs')
    fs.readFile('server/db.json', function (err, data) {
      const db = JSON.parse(data)
      io.sockets.emit('updateTable', db)
    })
  })

  socket.on('changeCursorPosition', (x, y) => {
    cursors.splice(
      cursors.indexOf(
        connections.find((connection) => {
          if (connection.id === '1') return true
          return connection
        })
      ),
      1
    )
    cursors.push({ id: socket.id, x: x, y: y })
    io.sockets.emit('drawCursors', cursors)
  })

  console.log(connections.length + ' clients connected')
})

server.listen(4000, () => {
  console.log('Server running on port 4000...')
})
