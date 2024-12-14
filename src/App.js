import React from "react";
import Router from "./Router";
import { ThemeProvider, createTheme } from "@basetoolkit/ui";
import AppContextProvider from "./contextapi/context/AppContext";

const theme = createTheme({
  palette: {
    // mode:"dark",
    secondary: {
      main: "#fca82f", //f3274c
    },
    primary: {
      main: "#8304b4", //74b4e4
      light: "#c482e1",
    },
  },
});

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
