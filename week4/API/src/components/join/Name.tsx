import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

interface NameProps {
  handleNextStep: () => void;
  getUserName: (value: string) => void;
}

const Name = ({ handleNextStep, getUserName }: NameProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getUserName(e.target.value);
  };
  return (
    <>
      <Title title="아이디" fontSize="medium" />
      <Input text="사용자 이름을 입력해 주세요" onChange={handleChange} />
      <Button text="다음" onClick={handleNextStep} />
    </>
  );
};

export default Name;
