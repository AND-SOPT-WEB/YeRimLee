/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

const Game = () => {
  const [numbers, setNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingNumbers, setRemainingNumbers] = useState([]);

  // 처음 렌더링되는 1~9
  const initializeNumbers = useCallback(() => {
    const initialNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const shuffledInitialNumbers = initialNumbers.sort(
      () => Math.random() - 0.5
    );
    setNumbers(shuffledInitialNumbers);
    // 10 ~ 18
    setRemainingNumbers(Array.from({ length: 9 }, (_, i) => i + 10));
  }, []);

  // 숫자 클릭 핸들러
  const handleNumberClick = (num) => {
    console.log(remainingNumbers);

    if (num === nextNumber) {
      if (!isRunning) {
        setIsRunning(true);
      }

      // nextNumber 증가
      setNextNumber((prev) => prev + 1);

      // 현재 숫자를 제거하고 나머지 숫자를 업데이트
      setNumbers((prev) => {
        // 클릭한 숫자 제거
        const updatedNumbers = prev.filter((n) => n !== num);

        // remainingNumbers에서 무작위로 다음 숫자 선택
        if (remainingNumbers.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * remainingNumbers.length
          );
          const nextRandomNumber = remainingNumbers[randomIndex];

          // 선택한 숫자를 제외하여 remainingNumbers 업데이트
          const updatedRemainingNumbers = remainingNumbers.filter(
            (n) => n !== nextRandomNumber
          );

          setRemainingNumbers(updatedRemainingNumbers);

          return [...updatedNumbers, nextRandomNumber];
        }

        return updatedNumbers;
      });
    }
  };
  // 타이머
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => parseFloat((prev + 0.01).toFixed(2)));
      }, 10);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (nextNumber > 18) {
      setIsRunning(false);
      alert(`Game Over! Time: ${timer} seconds`);
    }
  }, [nextNumber, timer]);

  useEffect(() => {
    initializeNumbers();
  }, [initializeNumbers]);

  return (
    <GameContainer>
      <Header>
        <div>Next Number: {nextNumber}</div>
        <Timer>Time: {timer}s</Timer>
      </Header>
      <Board>
        {numbers.map((num) => (
          <Card key={num} onClick={() => handleNumberClick(num)}>
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

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const Card = styled.button`
  width: 8rem;
  height: 8rem;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.card};
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
`;

const Timer = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
