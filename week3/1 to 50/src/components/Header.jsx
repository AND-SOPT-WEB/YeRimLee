import styled from "@emotion/styled";
import { useState, useEffect } from "react";

export default function Header() {
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  // 일단은 타이머가 1초마다 증가하도록 설정
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GameHeader>
      <Title>1 to 50</Title>
      <ButtonGroup>
        <Button>게임</Button>
        <Button>랭킹</Button>
      </ButtonGroup>
      <LevelSelectContainer>
        <Select value={level} onChange={handleLevelChange}>
          <option value={0}>레벨 선택</option>
          <option value={1}>레벨 1</option>
          <option value={2}>레벨 2</option>
          <option value={3}>레벨 3</option>
        </Select>
        <TimerDisplay>{timer}</TimerDisplay>
      </LevelSelectContainer>
    </GameHeader>
  );
}

const GameHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.header};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.colors.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.medium};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

const LevelSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.medium};
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.colors.header};
  outline: none;
`;

const TimerDisplay = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.text};
`;
