import { useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

interface NameProps {
  handleNextStep: () => void;
  getUserName: (value: string) => void;
}

const Name = ({ handleNextStep, getUserName }: NameProps) => {
  const [userName, setUserName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    getUserName(e.target.value);
  };

  return (
    <>
      <Title title="아이디" fontSize="medium" />
      <Input
        text="사용자 이름을 입력해 주세요"
        value={userName}
        onChange={handleChange}
      />
      <Button text="다음" onClick={handleNextStep} disabled={!userName} />
    </>
  );
};

export default Name;
