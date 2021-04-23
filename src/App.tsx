import { useState } from 'react';
import { createMuiTheme, CssBaseline, makeStyles, Switch, ThemeProvider, useTheme } from '@material-ui/core';
import CardComponent from 'components/CardComponent';
import { common } from '@material-ui/core/colors/';

// linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const modeType = darkMode ? "dark" : 'light';
  const modeBackground = darkMode ? '#cdcdcd' : "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)"
  const themeDark = createMuiTheme({
    palette: {
      type: modeType,
    }
  });
  const useStyles = makeStyles(() => ({
    app: {
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
      background: modeBackground,
      backgroundSize: '300% 300%',
      animation: 'Gradient 10s ease infinite',
      height: '100vh',
    },
  }));
  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <div className={classes.app}>
        <Switch color="default" checked={darkMode} onChange={handleThemeChange} />
        <CardComponent />
      </div>
    </ThemeProvider>

  );
}

export default App;
