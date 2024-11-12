import { useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

interface HobbyProps {
  getUserHobby: (value: string) => void;
  submitForm: () => void;
}

const Hobby = ({ getUserHobby, submitForm }: HobbyProps) => {
  const [userHobby, setUserHobby] = useState("");
  const hobbyBtnActive = userHobby && userHobby.length < 8;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserHobby(e.target.value);
    getUserHobby(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 리로드 방지

    submitForm();
    console.log("회원가입 완!");
  };

  return (
    <>
      <Title title="취미" fontSize="medium" />
      <Input
        text="취미를 입력해 주세요"
        value={userHobby}
        onChange={handleChange}
      />
      <Button
        text="회원가입"
        onClick={handleSubmit}
        disabled={!hobbyBtnActive}
      />
    </>
  );
};

export default Hobby;
