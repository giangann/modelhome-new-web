import './App.css';

import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Router } from './routers';

function App() {
  const [count, setCount] = useState(0);

  let theme = createTheme({
    typography: {
      fontFamily: [
        'ABeeZee',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Router />
      {/* <Box>
        <Typography variant="h2">Test font</Typography>
        <Typography>Test font</Typography>
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
