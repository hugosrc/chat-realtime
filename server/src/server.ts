import express from 'express'
import http from 'http'
import socketio from 'socket.io'

interface Message {
  username: string;
  content: string;
}

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const messages: Message[] = []

io.on('connection', socket => {
  socket.emit('setup', messages)

  socket.on('sendMessage', (data: Message) => {
    messages.push(data)

    socket.broadcast.emit('receivedMessage', data)
  })
})

server.listen(3333, () => {
  console.log(`Server listening on port 3333`)
})