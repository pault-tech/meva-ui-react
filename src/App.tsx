import styled, { createGlobalStyle } from "styled-components";
import ChatWindow from "./components/ChatWindow";
const GlobalStyle = createGlobalStyle`
  body {
    background: #eaf6f6;
    font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
    *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: #eaf6f6;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ChatWindow />
      </AppContainer>
    </>
  );
}

export default App;
