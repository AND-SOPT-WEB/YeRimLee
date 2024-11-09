import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import theme from "./styles/theme";
import Game from "./components/Game";
import LankBoard from "./components/LankBoard";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [currentView, setCurrentView] = useState("게임");

  // 렌더링 컨텐츠
  const handleView = (event) => {
    const viewName = event.target.textContent;
    setCurrentView(viewName);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        timer={timer}
        handleView={handleView}
        currentView={currentView}
        setTimer={setTimer}
      />
      {currentView === "게임" && <Game timer={timer} setTimer={setTimer} />}
      {currentView === "랭킹" && <LankBoard />}
    </ThemeProvider>
  );
}

export default App;
