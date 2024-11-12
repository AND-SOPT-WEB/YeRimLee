import styled from "@emotion/styled";

interface InputProps {
  text?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ text, value, onChange }: InputProps) => {
  return (
    <StyledInput
      type="text"
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.header};
  }
`;
