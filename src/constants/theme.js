import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {primary, secondary} from "./colors"

const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
  });

  export default theme;