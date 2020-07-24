import React from 'react';

import { 
  Container
} from './styles';

interface Props {
  me: boolean;
  username: string;
  content: string;
}

const Message: React.FC<Props> = ({ me, username, content }) => {
  return (  
    <Container me={me}>
      <strong>{username}</strong>
      <p>{content}</p>
    </Container>
  );
}

export default Message;