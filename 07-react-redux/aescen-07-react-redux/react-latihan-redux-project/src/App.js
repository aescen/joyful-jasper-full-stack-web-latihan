import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'
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
      <Box className="App">
        {/* <CakesView /> */}
        {/* <UsersView /> */}
        <TodosView />
      </Box>
    </ThemeProvider>
  )
}

export default App
