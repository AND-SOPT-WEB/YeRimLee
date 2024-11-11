import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

interface HobbyProps {
  handleNextStep: () => void;
}

const Password = ({ handleNextStep }: HobbyProps) => {
  return (
    <>
      <Title title="비밀번호" fontSize="medium" />
      <Input text="비밀번호를 입력해 주세요" />
      <Input text="비밀번호 확인" />
      <Button text="다음" onClick={handleNextStep} />
    </>
  );
};

export default Password;
