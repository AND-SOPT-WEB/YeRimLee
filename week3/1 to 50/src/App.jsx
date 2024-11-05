import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import theme from "./styles/theme";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header timer={timer} />
      <Game setTimer={setTimer} />
    </ThemeProvider>
  );
}

export default App;
