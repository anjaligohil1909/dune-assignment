import './App.css';
import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <Dashboard />
    </div>
    </ThemeProvider>
  );
}

export default App;
