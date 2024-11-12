import { useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import styled from "@emotion/styled";

interface HobbyProps {
  handleNextStep: () => void;
  getUserPw: (value: string) => void;
}

const Password = ({ handleNextStep, getUserPw }: HobbyProps) => {
  const [userPw, setUserPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const isPasswordValid = userPw && confirmPw && userPw === confirmPw;
  const isPasswordLengthValid = userPw.length < 8;
  const isConfirmPwLengthValid = confirmPw.length < 8;

  const pwBtnActive =
    isPasswordValid && isPasswordLengthValid && isConfirmPwLengthValid;

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

      {/* 비밀번호가 8자 이상일 경우 에러 메시지 */}
      {userPw.length >= 8 && (
        <ErrorMessage>비밀번호는 8자 이내로 입력해주세요.</ErrorMessage>
      )}

      {/* 비밀번호 불일치 에러 메시지 */}
      {!isPasswordValid && confirmPw.length > 0 && (
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      )}

      <Button text="다음" onClick={handleNextStep} disabled={!pwBtnActive} />
    </>
  );
};

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.small};
  align-self: flex-start;
`;

export default Password;
