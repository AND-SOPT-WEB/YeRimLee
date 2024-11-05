import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import theme from "./styles/theme";
import Game from "./components/Game";
import LankBoard from "./components/LankBoard";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isGameStated, setIsGameStarted] = useState(false);
  const [isRankActive, setRankActive] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header
        timer={timer}
        setIsGameStarted={setIsGameStarted}
        setRankActive={setRankActive}
        isRankActive={isRankActive}
        setTimer={setTimer}
      />
      {isGameStated === true && (
        <Game setTimer={setTimer} setIsGameStarted={setIsGameStarted} />
      )}
      {isRankActive === true && <LankBoard />}
    </ThemeProvider>
  );
}

export default App;
