import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SideBar = styled.header`
  background: var(--secondary);
  width: 310px;
  height: 100vh;

  @media(max-width: 725px) {
    display: none;
  }
`

export const Main = styled.div`
  height: 100vh;
  width: 100%;
`

export const Header = styled.div`
  height: 69px;
  background: transparent;
  border-bottom: 1px solid var(--outline);
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0 24px;

  font-size: 28px;
  color: var(--gray);
  background: var(--white);
`

export const Messages = styled.div`
  height: 75vh;
  padding: 28px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const InputContainer = styled.form`
  height: 68px;

  > input {
    height: 100%;
    width: 100%;
    padding: 0 16px;
    font-size: 16px;
    background: var(--white);

    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`

export const Modal = styled.form`
  display: flex;

  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;

  height: 100vh;
  width: 100vw;
  background: #000;
  opacity: 80%;

  > input {
    background: var(--white);
    height: 60px;
    margin: 80px auto;
    width: 240px;
    padding: 0 16px;
    border-radius: 8px;
  }
`