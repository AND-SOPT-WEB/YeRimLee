import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import globalStyles from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Join from "./pages/Join";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
