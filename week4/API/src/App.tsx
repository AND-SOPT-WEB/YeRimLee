import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import globalStyles from "./styles/global";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />

        <Join />
        <Login />
        <MyPage />
      </ThemeProvider>
    </>
  );
}

export default App;
