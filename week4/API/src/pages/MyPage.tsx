import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/mypage/Header";
import Hobby from "../components/mypage/Hobby";
import EditProfile from "../components/mypage/EditProfile";

const MyPage = () => {
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
      {activeTab === "hobby" ? <Hobby /> : <EditProfile />}
    </>
  );
};

export default MyPage;
