import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import './App.css'
//import CakesView from './components/cakes/CakesView'
//import UsersView from './components/users/UsersView';
import TodosView from './components/todos/TodosView';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth='sm' className="App">
        {/* <CakesView /> */}
        {/* <UsersView /> */}
        <TodosView />
      </Container>
    </ThemeProvider>
  )
}

export default App
