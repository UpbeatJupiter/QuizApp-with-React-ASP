import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { ContextProvider } from './hooks/useStateContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: '"IBM Plex Sans"'
    }
})

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ContextProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();