import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure this is correct
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
// import { CssVarsProvider } from '@mui/joy/styles';
import App from './App';
import theme from './theme'; // Optional, if you use a custom theme
import { ThemeProvider, CssVarsProvider } from '@mui/material/styles'; // Add this import


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
