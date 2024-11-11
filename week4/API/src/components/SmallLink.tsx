import styled from "@emotion/styled";

interface SmallLinkProps {
  text: string;
  showDesc?: boolean;
}

const SmallLink = ({ text, showDesc = false }: SmallLinkProps) => {
  return (
    <Container>
      {showDesc && <Desc>이미 회원이신가요?</Desc>}
      <Link>{text}</Link>
    </Container>
  );
};

export default SmallLink;

const Container = styled.div`
  display: flex;
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
`;

const Link = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-decoration: underline;
  cursor: pointer;
`;
