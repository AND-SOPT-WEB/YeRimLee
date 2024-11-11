import styled from "@emotion/styled";

interface TitleProps {
  title: string;
  fontSize?: "large" | "medium" | "small";
}

const Title = ({ title, fontSize = "large" }: TitleProps) => {
  return <StyledTitle fontSize={fontSize}>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2<{ fontSize: "large" | "medium" | "small" }>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  margin: ${({ fontSize }) =>
    fontSize === "large"
      ? "2rem 0"
      : fontSize === "medium"
      ? "0.5rem 0"
      : "0.2rem 0"};
  align-self: ${({ fontSize }) =>
    fontSize !== "large" ? "flex-start" : "center"};
  color: ${({ theme, fontSize }) =>
    fontSize === "small" ? theme.colors.header : ""};
`;
