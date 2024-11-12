import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import globalStyles from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <AppRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;
