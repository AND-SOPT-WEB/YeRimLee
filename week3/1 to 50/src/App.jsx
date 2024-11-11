import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import theme from "./styles/theme";
import Game from "./components/Game";
import LankBoard from "./components/LankBoard";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [currentView, setCurrentView] = useState("게임");
  const [level, setLevel] = useState(1);

  // 렌더링 컨텐츠
  const handleView = (event) => {
    const viewName = event.target.textContent;
    setCurrentView(viewName);
  };

  // 레벨 변경
  const handleLevel = (event) => {
    const gameLevel = parseInt(event.target.value, 10);
    setLevel(gameLevel);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        timer={timer}
        handleView={handleView}
        currentView={currentView}
        handleLevel={handleLevel}
      />
      {currentView === "게임" && (
        <Game timer={timer} setTimer={setTimer} level={level} />
      )}
      {currentView === "랭킹" && <LankBoard />}
    </ThemeProvider>
  );
}

export default App;
