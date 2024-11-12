import { Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default AppRouter;
