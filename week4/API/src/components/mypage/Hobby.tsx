import styled from "@emotion/styled";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

const Hobby = () => {
  return (
    <Container>
      <FormLayout>
        <Title title="취미" />
        <Title title="나의 취미" fontSize="medium" />
        <Title title="독서" fontSize="small" />
        <Title title="다른 사람들의 취미" fontSize="medium" />
        <Input text="사용자 번호" />
        <Button text="검색" />
      </FormLayout>
    </Container>
  );
};

export default Hobby;

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
