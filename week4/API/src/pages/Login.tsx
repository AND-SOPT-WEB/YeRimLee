import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import Title from "../components/common/Title";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import SmallLink from "../components/common/SmallLink";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPw, setUserPw] = useState("");
  const nav = useNavigate();

  const handleNavigation = (path: string) => {
    nav(path);
  };

  // 로그인 함수
  const handleClickLogin = async () => {
    try {
      const postData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/login`,
        {
          username: userName,
          password: userPw,
        }
      );
      const token = postData.data.result.token;
      if (token) {
        localStorage.setItem("token", token);
        nav("/mypage");
      }

      console.log(postData);
      console.log("일단 로그인 성공");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert("아이디,비밀번호를 입력하세요");
      }
      console.log(error);
    }
  };

  // 정보 가져오기
  const getUserName = (value: string) => setUserName(value);
  const getUserPw = (value: string) => setUserPw(value);

  return (
    <Container>
      <FormLayout>
        <Title title="로그인" />
        <Input text="아이디" onChange={(e) => getUserName(e.target.value)} />
        <Input text="비밀번호" onChange={(e) => getUserPw(e.target.value)} />
        <Button text="로그인" onClick={handleClickLogin} />
        <SmallLink text="회원가입" onClick={() => handleNavigation("/join")} />
      </FormLayout>
    </Container>
  );
};

export default Login;

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
