import styled from 'styled-components';

interface Props {
  me: boolean;
}

export const Container = styled.div<Props>`
  max-width: 320px;
  background: ${props => props.me ? 'var(--primary)' : 'var(--white)'};
  color: ${props => props.me ? 'var(--white)' : 'var(--gray)'};
  padding: 16px;
  border-radius: ${props => props.me ? '16px 16px 0 16px' : '16px 16px 16px 0'};
  margin-top: 16px;
  margin-left: ${props => props.me ? '198px' : '0'};

  @media(max-width: 560px) {
    margin-left: 0;
  }
  
  > strong {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
