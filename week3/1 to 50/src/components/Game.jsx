/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { saveGameRecord } from "../util/gameRecord";

const Game = ({ timer, setTimer, level }) => {
  // 초기 숫자카드
  const [numbers, setNumbers] = useState([]);
  // 절반 이후 숫자카드
  const [nextNumber, setNextNumber] = useState(1);

  const [remainingNumbers, setRemainingNumbers] = useState([]);
  const gridSize = level + 2;
  const totalCards = gridSize * gridSize * 2;

  let interval;

  // 초기화 함수: 숫자 배열 생성
  const initializeNumbers = useCallback(() => {
    const initialNumbers = Array.from({ length: totalCards }, (_, i) => i + 1);
    const shuffledInitialNumbers = initialNumbers
      .slice(0, totalCards / 2)
      .sort(() => Math.random() - 0.5);
    setNumbers(shuffledInitialNumbers);

    // 남은 숫자 배열 설정
    setRemainingNumbers(
      initialNumbers.slice(totalCards / 2).sort(() => Math.random() - 0.5)
    );
  }, [totalCards]);

  // 숫자 클릭 핸들러
  const handleNumberClick = (num) => {
    if (num === nextNumber) {
      // 1 클릭 시 타이머 시작
      if (nextNumber === 1 && !interval) {
        interval = setInterval(() => {
          setTimer((prev) => parseFloat((prev + 0.01).toFixed(2)));
        }, 10);
      }

      // nextNumber 증가
      setNextNumber((prev) => prev + 1);

      // 클릭한 숫자 자리 업데이트
      setNumbers((prev) => {
        const indexToReplace = prev.indexOf(num);
        const updatedNumbers = [...prev];
        updatedNumbers[indexToReplace] = null; // 빈 자리로 설정

        if (remainingNumbers.length > 0) {
          const [nextRandomNumber, ...updatedRemaining] = remainingNumbers;
          updatedNumbers[indexToReplace] = nextRandomNumber;
          setRemainingNumbers(updatedRemaining);
        }

        return updatedNumbers;
      });

      // 게임 종료 시 타이머 멈춤
      if (nextNumber === totalCards) {
        clearInterval(interval);
        saveGameRecord(level, timer);
        alert(`Game Over! Time: ${timer} seconds`);
        initializeGame();
      }
    }
  };

  // 타이머 정리
  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  // 게임 초기화
  const initializeGame = () => {
    setNextNumber(1);
    setTimer(0);
    initializeNumbers();
  };

  // 레벨 변경 시 초기화
  useEffect(() => {
    initializeGame();
  }, [level]);

  return (
    <GameContainer>
      <NextNumberDisplay>Next Number: {nextNumber}</NextNumberDisplay>

      <Board gridSize={gridSize}>
        {numbers.map((num, index) => (
          <Card
            key={`card-${num}-${index}`}
            onClick={() => num !== null && handleNumberClick(num)}
          >
            {num}
          </Card>
        ))}
      </Board>
    </GameContainer>
  );
};

export default Game;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const NextNumberDisplay = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ gridSize }) => gridSize}, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const Card = styled.button`
  width: 6rem;
  height: 6rem;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.card};
  cursor: pointer;
  visibility: ${({ children }) => (children === null ? "hidden" : "visible")};
`;
