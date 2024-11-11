import styled from "@emotion/styled";

interface TitleProps {
  title: string;
  fontSize?: "large" | "medium";
}

const Title = ({ title, fontSize = "large" }: TitleProps) => {
  return <StyledTitle fontSize={fontSize}>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2<{ fontSize: "large" | "medium" }>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  margin-bottom: ${({ fontSize }) => (fontSize === "large" ? "2rem" : "1rem")};
  align-self: ${({ fontSize }) =>
    fontSize === "medium" ? "flex-start" : "center"};
`;
