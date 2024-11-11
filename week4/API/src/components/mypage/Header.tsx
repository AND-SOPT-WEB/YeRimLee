import styled from "@emotion/styled";

interface HeaderProps {
  handleTabClick: (tab: "hobby" | "profile") => void;
  onClick?: () => void;
}

const Header = ({ handleTabClick, onClick }: HeaderProps) => {
  return (
    <Container>
      <HeaderLeftLayout>
        <Title>마이페이지</Title>
        <Tabs>
          <Tab onClick={() => handleTabClick("hobby")}>취미</Tab>
          <Tab onClick={() => handleTabClick("profile")}>내 정보</Tab>
        </Tabs>
      </HeaderLeftLayout>
      <LogoutButton onClick={onClick}>로그아웃</LogoutButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.header};
`;

const HeaderLeftLayout = styled.div`
  display: flex;
  gap: 5rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.whiteText};
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tab = styled.button`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.whiteText};

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.whiteText};

  &:hover {
    text-decoration: underline;
  }
`;