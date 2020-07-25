import React, { useState, FormEvent, useMemo } from 'react';
import socketio from 'socket.io-client'

import { 
  Container,
  SideBar,
  Main,
  Header,
  Messages,
  InputContainer,
  Modal
} from './styles';

import Message from '../Message';

interface Message {
  username: string;
  content: string;
}

const Layout: React.FC = () => {
  let socket = useMemo(() => socketio('http://localhost:3333'),[])

  const [modalVisible, setModalVisible] = useState(true)
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [messageContent, setMessageContent] = useState('')

  socket.on('setup', (data: Message[]) => {
    setMessages(data)
  })

  socket.on('receivedMessage', (data: Message) => {
    setMessages([...messages, data])
  })

  const handleSetUsername = (event: FormEvent) => {
    event.preventDefault()

    setModalVisible(false)
  }

  const sendMessage = (event: FormEvent) => {
    event.preventDefault()
    
    const messageData = {
      username,
      content: messageContent
    }

    setMessages([...messages, messageData])

    socket.emit('sendMessage', messageData)
    setMessageContent('')
  }

  return (
    <Container>
      <SideBar/>

      <Main>
        <Header>
          <strong>GlobalChat</strong>
        </Header>

        <Messages>
          { messages.map(message => {
            if(message.username === username) {
              return (
                <Message
                  key={Math.random() * 1000} 
                  me 
                  username={message.username} 
                  content={message.content} 
                />
              )
            } else {
              return (
                <Message
                  key={Math.random() * 1000} 
                  me={false} 
                  username={message.username} 
                  content={message.content} 
                />
              )
            }
          }) }
        </Messages>

        <InputContainer onSubmit={sendMessage}>
          <input 
            type="text" 
            placeholder="Type a message"
            onChange={event => setMessageContent(event.target.value)}
            value={messageContent}
          />
        </InputContainer>
      </Main>


      { modalVisible && (
        <Modal onSubmit={handleSetUsername}>
          <input 
            type="text" 
            placeholder="What's your name..."
            onChange={event => setUsername(event.target.value)}
            value={username}
          />
        </Modal>
      ) }
      
    </Container>
  );
}

export default Layout;