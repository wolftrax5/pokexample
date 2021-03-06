// https://material-ui.com/customization/theming/
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'],
        success: React.CSSProperties['color'],
      }
    }
    interface ThemeOptions {
      status?: {
        danger?: React.CSSProperties['color']
        success?: React.CSSProperties['color'],
      }
    }
  }



let theme = createMuiTheme({
    status: {
        danger: '#c83300',
        success: '#18b310',
    },
    palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#ff4400',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          light: '#0066ff',
          main: '#0044ff',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
        },
        text:{
          primary: '#585858',
          secondary: '#080808',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        tonalOffset: 0.2,
      },
});

theme = responsiveFontSizes(theme);

export  { theme };
