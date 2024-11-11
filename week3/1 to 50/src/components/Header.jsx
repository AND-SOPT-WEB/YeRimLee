/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const Header = ({ timer, handleView, currentView, handleLevel }) => {
  // 추후 level 반영

  return (
    <GameHeader>
      <HeaderLeft>
        <Title>1 to 50</Title>
        <ButtonGroup>
          <Button onClick={handleView}>게임</Button>
          <Button onClick={handleView}>랭킹</Button>
        </ButtonGroup>
      </HeaderLeft>
      {currentView === "게임" && (
        <LevelSelectContainer>
          <Select onChange={handleLevel}>
            <option value={1}>레벨 1</option>
            <option value={2}>레벨 2</option>
            <option value={3}>레벨 3</option>
          </Select>
          <TimerDisplay>{timer.toFixed(2)}s</TimerDisplay>
        </LevelSelectContainer>
      )}
    </GameHeader>
  );
};

export default Header;
const GameHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.header};
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const LevelSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.colors.header};
  outline: none;
`;

const TimerDisplay = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.text};
`;
