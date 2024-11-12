import { useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

interface HobbyProps {
  handleNextStep: () => void;
  getUserPw: (value: string) => void;
}

const Password = ({ handleNextStep, getUserPw }: HobbyProps) => {
  const [userPw, setUserPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const isPasswordValid = userPw && confirmPw && userPw === confirmPw;
  const isPasswordLengthValid = userPw && userPw.length < 8;

  const pwBtnActive = isPasswordValid && isPasswordLengthValid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getUserPw(e.target.value);
    setUserPw(e.target.value);
  };

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getUserPw(e.target.value);
    setConfirmPw(e.target.value);
  };

  return (
    <>
      <Title title="비밀번호" fontSize="medium" />
      <Input
        text="비밀번호를 입력해 주세요"
        value={userPw}
        onChange={handleChange}
      />
      <Input
        text="비밀번호 확인"
        value={confirmPw}
        onChange={handleConfirmChange}
      />
      <Button text="다음" onClick={handleNextStep} disabled={!pwBtnActive} />
    </>
  );
};

export default Password;
