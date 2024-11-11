import styled from "@emotion/styled";

const Login = () => {
  return (
    <Container>
      <Form>
        <Title>로그인</Title>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
        <JoinLink>회원가입</JoinLink>
      </Form>
    </Container>
  );
};

export default Login;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  padding: 3rem;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.header};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.whiteText};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.header};
  }
`;

export const JoinLink = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: underline;
  cursor: pointer;
`;
