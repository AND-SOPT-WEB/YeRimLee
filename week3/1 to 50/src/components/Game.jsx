/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { saveGameRecord } from "../util/gameRecord";

const Game = ({ timer, setTimer, level }) => {
  const [numbers, setNumbers] = useState(() => {
    const initialNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    return initialNumbers.sort(() => Math.random() - 0.5);
  });
  const [nextNumber, setNextNumber] = useState(1);
  const [remainingNumbers, setRemainingNumbers] = useState(
    Array.from({ length: 9 }, (_, i) => i + 10)
  );

  let interval;

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
      // 1 클릭 시, 타이머 시작
      if (nextNumber === 1 && !interval) {
        interval = setInterval(() => {
          setTimer((prev) => parseFloat((prev + 0.01).toFixed(2)));
        }, 10);
      }

      // nextNumber 증가
      setNextNumber((prev) => prev + 1);

      // 클릭한 숫자의 인덱스를 찾고, 해당 위치에 새로운 숫자를 추가
      setNumbers((prev) => {
        const indexToReplace = prev.indexOf(num);
        const updatedNumbers = [...prev];

        // 클릭한 숫자 자리를 빈자리로 만들어서 비어 보이게 함
        updatedNumbers.splice(indexToReplace, 1, null);

        // 10~18에서 무작위로 다음 숫자 선택
        if (remainingNumbers.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * remainingNumbers.length
          );
          const nextRandomNumber = remainingNumbers[randomIndex];

          // 선택한 숫자를 제외한 나머지 숫자 리스트
          const updatedRemainingNumbers = remainingNumbers.filter(
            (n) => n !== nextRandomNumber
          );

          setRemainingNumbers(updatedRemainingNumbers);

          // 클릭한 숫자의 자리에 새 숫자를 추가
          updatedNumbers.splice(indexToReplace, 1, nextRandomNumber);
        }

        return updatedNumbers;
      });

      // 게임 종료 시 타이머 멈추기
      if (nextNumber === 18) {
        clearInterval(interval);
        saveGameRecord(1, timer);
        alert(`Game Over! Time: ${timer} seconds`);
        initializeGame();
      }
    }
  };

  // 타이머
  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  // 게임 초기화 함수
  const initializeGame = () => {
    setNextNumber(1);
    setTimer(0);
    initializeNumbers();
  };

  // 레벨 변경 시 게임 초기화
  useEffect(() => {
    initializeGame();
  }, [level]);

  return (
    <GameContainer>
      <NextNumberDisplay>Next Number: {nextNumber}</NextNumberDisplay>

      <Board>
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
  visibility: ${({ children }) => (children === null ? "hidden" : "visible")};
`;
