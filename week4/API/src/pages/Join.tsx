import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Title from "../components/common/Title";
import SmallLink from "../components/common/SmallLink";
import Name from "../components/join/Name";
import Password from "../components/join/Password";
import Hobby from "../components/join/Hobby";

const Join = () => {
  // 회원가입 과정 퍼널
  const [step, setStep] = useState("이름");

  const handleNextStep = (path: string) => {
    setStep(path);
  };

  const nav = useNavigate();

  const handleLoginClick = () => {
    nav("/");
  };

  return (
    <Container>
      <FormLayout>
        <Title title="회원가입" />

        {step === "이름" && (
          <Name handleNextStep={() => handleNextStep("비밀번호")} />
        )}
        {step === "비밀번호" && (
          <Password handleNextStep={() => handleNextStep("취미")} />
        )}
        {step === "취미" && <Hobby handleLoginClick={handleLoginClick} />}
        <SmallLink text="로그인" showDesc={true} onClick={handleLoginClick} />
      </FormLayout>
    </Container>
  );
};

export default Join;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  padding: 3rem;
  border-radius: 10px;
`;
