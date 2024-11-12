import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import Title from "../components/common/Title";
import SmallLink from "../components/common/SmallLink";
import Name from "../components/join/Name";
import Password from "../components/join/Password";
import Hobby from "../components/join/Hobby";

const Join = () => {
  // 회원가입 과정 퍼털
  const [step, setStep] = useState("이름");
  // 회원가입 정보
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userHobby, setUserHobby] = useState("");

  const handleNextStep = (path: string) => {
    setStep(path);
  };
  const nav = useNavigate();

  const handleLoginClick = () => {
    nav("/");
  };

  // 회원가입 데이터 전송 함수
  const submitForm = async () => {
    try {
      const postJoinData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/user`,
        {
          username: userName,
          password: userPw,
          hobby: userHobby,
        }
      );
      console.log(postJoinData);
      alert("회원가입 성공! 회원번호 렌더링 해야함");
      nav("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert("회원가입에 실패!");
      }
      console.log(error);
    }
  };

  // 정보 가져오기
  const getUserName = (value: string) => setUserName(value);
  const getUserPw = (value: string) => setUserPw(value);
  const getUserHobby = (value: string) => setUserHobby(value);

  return (
    <Container>
      <FormLayout>
        <Title title="회원가입" />

        {step === "이름" && (
          <Name
            getUserName={getUserName}
            handleNextStep={() => handleNextStep("비밀번호")}
          />
        )}
        {step === "비밀번호" && (
          <Password
            getUserPw={getUserPw}
            handleNextStep={() => handleNextStep("취미")}
          />
        )}
        {step === "취미" && (
          <Hobby getUserHobby={getUserHobby} submitForm={submitForm} />
        )}
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

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  padding: 3rem;
  border-radius: 10px;
`;
