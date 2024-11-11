import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import globalStyles from "./styles/global";
import Join from "./components/Join";
import Login from "./components/Login";
import MyPage from "./components/MyPage";

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
