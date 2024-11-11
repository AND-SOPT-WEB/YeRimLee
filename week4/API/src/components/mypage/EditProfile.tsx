import styled from "@emotion/styled";
import Title from "../common/Titlte";
import Input from "../common/Input";
import Button from "../common/Button";

const EditProfile = () => {
  return (
    <Container>
      <FormLayout>
        <Title title="내 정보 수정하기" />
        <Title title="새 비밀번호" fontSize="medium" />
        <Input />

        <Title title="새 취미" fontSize="medium" />
        <Input />
        <Button text="수정하기" />
      </FormLayout>
    </Container>
  );
};

export default EditProfile;

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
