import styled from "@emotion/styled";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: 2rem;
`;
