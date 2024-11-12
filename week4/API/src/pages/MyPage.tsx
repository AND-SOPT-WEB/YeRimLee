import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/mypage/Header";
import Hobby from "../components/mypage/Hobby";
import EditProfile from "../components/mypage/EditProfile";

const MyPage = () => {
  const [hobby, setHobby] = useState<string | null>(null); // 취미 상태 추가

  const getHobby = async () => {
    try {
      // 로컬 스토리지에서 token을 가져옴
      const token = localStorage.getItem("token");

      // 토큰이 없으면 알림을 표시하고 종료
      if (!token) {
        console.log("토큰이 없습니다. 로그인해주세요.");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/user/my-hobby`,
        { headers: { token } }
      );

      // API 응답에 따른 처리
      if (response.data.result) {
        setHobby(response.data.result.hobby); // 취미 데이터를 상태에 저장
      } else {
        console.log("실패:", response.data.code);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  // 컴포넌트가 마운트될 때 취미 데이터를 가져옴
  useEffect(() => {
    getHobby();
  }, []);

  const [activeTab, setActiveTab] = useState<"hobby" | "profile">("hobby");

  const handleTabClick = (tab: "hobby" | "profile") => {
    setActiveTab(tab);
  };

  const nav = useNavigate();

  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem("token");

    nav("/");
  };

  return (
    <>
      <Header handleTabClick={handleTabClick} onClick={handleLogout} />
      {activeTab === "hobby" ? <Hobby hobby={hobby} /> : <EditProfile />}
    </>
  );
};

export default MyPage;
