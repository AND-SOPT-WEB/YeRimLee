import styled from "@emotion/styled";

interface InputProps {
  text?: string;
}

const Input = ({ text }: InputProps) => {
  return (
    <>
      <StyledInput type="text" placeholder={text} />
    </>
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.header};
  }
`;
