import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

const Hobby = () => {
  return (
    <>
      <Title title="취미" fontSize="medium" />
      <Input text="취미를 입력해 주세요" />
      <Button text="회원가입" />
    </>
  );
};

export default Hobby;
