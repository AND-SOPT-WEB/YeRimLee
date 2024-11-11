import { useState } from "react";
import Header from "../components/Header";
import Hobby from "../components/Hobby";
import EditProfile from "../components/EditProfile";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<"hobby" | "profile">("hobby");

  const handleTabClick = (tab: "hobby" | "profile") => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header handleTabClick={handleTabClick} />
      {activeTab === "hobby" ? <Hobby /> : <EditProfile />}
    </>
  );
};

export default MyPage;
