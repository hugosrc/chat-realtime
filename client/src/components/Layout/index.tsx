import React, { useState } from 'react';

import { 
  Container,
  SideBar,
  Main,
  Header,
  Messages,
  InputContainer
} from './styles';
import Message from '../Message';

interface Message {
  username: string;
  content: string;
}

const Layout: React.FC = () => {
  const [username, setUsername] = useState('Hugo Souza')
  const [messages, setMessages] = useState<Message[]>([])

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
                  me 
                  username={message.username} 
                  content={message.content} 
                />
              )
            } else {
              return (
                <Message 
                  me={false} 
                  username={message.username} 
                  content={message.content} 
                />
              )
            }
          }) }
        </Messages>

        <InputContainer>
          <input type="text" placeholder="Type a message"/>
        </InputContainer>
      </Main>
    </Container>
  );
}

export default Layout;