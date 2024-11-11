import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Title from "../components/common/Titlte";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import SmallLink from "../components/common/SmallLink";

const Login = () => {
  const nav = useNavigate();

  const handleNavigation = (path: string) => {
    nav(path);
  };

  return (
    <Container>
      <FormLayout>
        <Title title="로그인" />
        <Input text="아이디" />
        <Input text="비밀번호" />
        <Button text="로그인" onClick={() => handleNavigation("/mypage")} />
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

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  padding: 3rem;
  border-radius: 10px;
`;
