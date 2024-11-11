import styled from "@emotion/styled";

interface SmallLinkProps {
  text: string;
}

const SmallLink = ({ text }: SmallLinkProps) => {
  return (
    <>
      <Link>{text}</Link>
    </>
  );
};

export default SmallLink;

const Link = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: underline;
  cursor: pointer;
`;
