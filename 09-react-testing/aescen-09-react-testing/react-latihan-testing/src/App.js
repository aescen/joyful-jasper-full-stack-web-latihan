import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Counter from './components/Counter'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth='sm' className='App'>
        <h1>Learn React</h1>
        <br />
        <Counter />
      </Container>
    </ThemeProvider>
  )
}

export default App
