import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  );
};

export default Button;

const StyledButton = styled.button`
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
