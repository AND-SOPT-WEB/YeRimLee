import styled from "@emotion/styled";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import SmallLink from "../components/SmallLink";

const Login = () => {
  return (
    <Container>
      <FormLayout>
        <Title title={"로그인"} />
        <Input text={"아이디"} />
        <Input text={"비밀번호"} />
        <Button text={"로그인"} />
        <SmallLink text={"회원가입"} />
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
