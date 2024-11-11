import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hobby from "../components/Hobby";
import EditProfile from "../components/EditProfile";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<"hobby" | "profile">("hobby");

  const handleTabClick = (tab: "hobby" | "profile") => {
    setActiveTab(tab);
  };

  const nav = useNavigate();

  const handleLoginClick = () => {
    nav("/");
  };

  return (
    <>
      <Header handleTabClick={handleTabClick} onClick={handleLoginClick} />
      {activeTab === "hobby" ? <Hobby /> : <EditProfile />}
    </>
  );
};

export default MyPage;
