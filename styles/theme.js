import { createMuiTheme } from '@material-ui/core/styles';
import { red, purple, cyan, pink } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan['700'],
    },
    secondary: {
      main: purple['800'],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ddd',
    },
  },
});

export default theme;