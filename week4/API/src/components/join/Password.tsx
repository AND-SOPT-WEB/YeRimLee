import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";

interface HobbyProps {
  handleNextStep: () => void;
  getUserPw: (value: string) => void;
}

const Password = ({ handleNextStep, getUserPw }: HobbyProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getUserPw(e.target.value);
  };
  return (
    <>
      <Title title="비밀번호" fontSize="medium" />
      <Input text="비밀번호를 입력해 주세요" onChange={handleChange} />
      <Input text="비밀번호 확인" onChange={handleChange} />
      <Button text="다음" onClick={handleNextStep} />
    </>
  );
};

export default Password;
