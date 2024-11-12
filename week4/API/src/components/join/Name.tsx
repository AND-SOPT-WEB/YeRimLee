import { useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input"; // Input 컴포넌트 유지
import Button from "../common/Button"; // Button 컴포넌트 유지

interface NameProps {
  handleNextStep: () => void;
  getUserName: (value: string) => void;
}

const Name = ({ handleNextStep, getUserName }: NameProps) => {
  const [userName, setUserName] = useState(""); // 사용자 이름 상태 추가

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value); // 입력값 상태 업데이트
    getUserName(e.target.value); // 부모 컴포넌트로 값 전달
  };

  return (
    <>
      <Title title="아이디" fontSize="medium" />
      <Input
        text="사용자 이름을 입력해 주세요"
        value={userName}
        onChange={handleChange}
      />
      <Button
        text="다음"
        onClick={handleNextStep}
        disabled={!userName} // 입력값이 비어 있으면 버튼 비활성화
      />
    </>
  );
};

export default Name;
