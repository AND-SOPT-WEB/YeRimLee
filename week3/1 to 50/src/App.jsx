import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import theme from "./styles/theme";
import Game from "./components/Game";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Game />
    </ThemeProvider>
  );
}

export default App;
