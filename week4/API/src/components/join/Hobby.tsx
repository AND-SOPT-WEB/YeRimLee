import { useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import styled from "@emotion/styled";

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
      {userHobby.length >= 8 && (
        <ErrorMessage>8자 이내로 입력해주세요.</ErrorMessage>
      )}
      <Button
        text="회원가입"
        onClick={handleSubmit}
        disabled={!hobbyBtnActive}
      />
    </>
  );
};
const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.small};
  align-self: flex-start;
`;

export default Hobby;
