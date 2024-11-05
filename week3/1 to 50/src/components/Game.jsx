/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

const Game = ({ setTimer, setIsGameStarted }) => {
  const [numbers, setNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingNumbers, setRemainingNumbers] = useState([]);

  // 최초 1~9
  const initializeNumbers = useCallback(() => {
    const initialNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const shuffledInitialNumbers = initialNumbers.sort(
      () => Math.random() - 0.5
    );
    setNumbers(shuffledInitialNumbers);
    // 이후 10~18
    setRemainingNumbers(Array.from({ length: 9 }, (_, i) => i + 10));
  }, []);

  // 숫자 클릭 핸들러
  const handleNumberClick = (num) => {
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

        // 10~18에서 무작위로 다음 숫자 선택
        if (remainingNumbers.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * remainingNumbers.length
          );
          const nextRandomNumber = remainingNumbers[randomIndex];

          // 선택한 숫자를 제외
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
        setTimerValue((prev) => parseFloat((prev + 0.01).toFixed(2)));
        setTimer((prev) => prev + 0.01); // Update timer in App
      }, 10);
    } else if (!isRunning && timerValue !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, setTimer]);
  // 초기화
  useEffect(() => {
    if (nextNumber > 18) {
      setIsRunning(false);
      // 게임 종료 시 정보 저장
      const endTime = new Date().toLocaleString(); // 현재 시각
      const level = 1;
      const playTime = timerValue; // 플레이 시간
      const gameInfo = {
        endTime,
        level,
        playTime,
      };
      localStorage.setItem("gameResult", JSON.stringify(gameInfo));
      alert(`Game Over! Time: ${playTime} seconds`);
      setIsGameStarted(true);
    }
  }, [nextNumber, timerValue]);

  useEffect(() => {
    initializeNumbers();
  }, [initializeNumbers]);

  return (
    <GameContainer>
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
