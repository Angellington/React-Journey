import { useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { getTheme } from './theme'
import { CssBaseline } from '@mui/material';
import Home from './pages/Home/Home';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');  const theme = getTheme(mode)



  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline>
          <Home />
        </CssBaseline>
    </ThemeProvider>
    </>
  )
}

export default App
