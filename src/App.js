import React from "react";
import {Router} from "./Router/Router"
import * as Styled from "./cssGlobal";
import { GlobalState } from "./Global/GlobalState";
import theme from "./constants/theme";
import { MuiThemeProvider } from "@material-ui/core";


function App() {
  return (
   
    <Styled.ContainerApp>
      <MuiThemeProvider theme={theme}>
      <GlobalState>
      <Router />
      </GlobalState>
      </MuiThemeProvider>
    </Styled.ContainerApp>
  );
}

export default App;
