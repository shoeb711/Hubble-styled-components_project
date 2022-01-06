//styles
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
//components
import Header from './components/Header';
import { Fragment } from 'react';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile : '768px'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
