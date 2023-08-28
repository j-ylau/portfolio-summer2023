import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./Preloader.js";
import Main from "./Main.js";
import $ from "jquery";
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: 'Almarai',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Almarai';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
          }
        `,
      },
    },
  });
  

  useEffect(() => {
    setTimeout(() => {
      $(".loader-wrapper").fadeOut("slow", () => {
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <main>
          <div className='bg'>
            <Main />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
