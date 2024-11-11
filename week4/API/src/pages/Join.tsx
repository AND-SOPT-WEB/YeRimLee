import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import SmallLink from "../components/SmallLink";

const Join = () => {
  const nav = useNavigate();

  const handleLoginClick = () => {
    nav("/");
  };

  return (
    <Container>
      <FormLayout>
        <Title title="회원가입" />
        <Title title="아이디" fontSize="medium" />
        <Input text="사용자 이름을 입력해 주세요" />
        <Button text="다음" />
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
