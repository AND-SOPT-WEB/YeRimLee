import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
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
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.header};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }
`;
