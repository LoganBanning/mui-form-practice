import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInSide from './signInPage';
import { useState } from 'react';

function App() {
  const lightTheme = createTheme();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const changeTheme = () => {
    setUseDarkTheme(!useDarkTheme);
  }
  
  return (
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        <button onClick={changeTheme}>Change Theme</button>
        <SignInSide />
      </ThemeProvider>
  );
}

export default App;