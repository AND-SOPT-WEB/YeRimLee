/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useRef } from "react";
import styled from "@emotion/styled";
import { saveGameRecord } from "../util/gameRecord";
import { createPortal } from "react-dom";

const Game = ({ timer, setTimer, level }) => {
  const [numbers, setNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [clickedCard, setClickedCard] = useState(null);
  const [remainingNumbers, setRemainingNumbers] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const gridSize = level + 2;
  const totalCards = gridSize * gridSize * 2;

  // Use a ref to store the interval
  const intervalRef = useRef(null);

  // 초기화 함수: 숫자 배열 생성
  const initializeNumbers = useCallback(() => {
    const initialNumbers = Array.from({ length: totalCards }, (_, i) => i + 1);
    const shuffledInitialNumbers = initialNumbers
      .slice(0, totalCards / 2)
      .sort(() => Math.random() - 0.5);
    setNumbers(shuffledInitialNumbers);

    setRemainingNumbers(
      initialNumbers.slice(totalCards / 2).sort(() => Math.random() - 0.5)
    );
  }, [totalCards]);

  // 숫자 클릭 핸들러
  const handleNumberClick = (num, index) => {
    if (num === nextNumber) {
      // 클릭된 카드 상태 업데이트
      setClickedCard(index);

      // 클릭 효과 제거를 위해 짧은 시간 후 초기화
      setTimeout(() => setClickedCard(null), 300);

      // 1 클릭 시 타이머 시작
      if (nextNumber === 1 && !intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setTimer((prev) => parseFloat((prev + 0.01).toFixed(2)));
        }, 10);
      }

      // 다음 숫자로 이동
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
        clearInterval(intervalRef.current); // 타이머 멈추기
        intervalRef.current = null; // interval ref 초기화
        saveGameRecord(level, timer); // 게임 기록 저장
        setIsGameOver(true); // 게임 오버 상태 설정
      }
    }
  };

  // 타이머 정리
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
            isClicked={clickedCard === index}
            onClick={() => num !== null && handleNumberClick(num, index)}
          >
            {num}
          </Card>
        ))}
      </Board>
      {isGameOver &&
        createPortal(
          <Modal>
            <p>Game Over!</p>
            <p>Time: {timer.toFixed(2)} seconds</p>
            <button
              onClick={() => {
                setIsGameOver(false);
                setTimer(0);
              }}
            >
              Close
            </button>
          </Modal>,
          document.body
        )}
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
  cursor: pointer;
  background-color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors.highlight : theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s ease, background-color 0.2s ease;
  transform: ${({ isClicked }) => (isClicked ? "scale(1.1)" : "scale(1)")};
  visibility: ${({ children }) => (children === null ? "hidden" : "visible")};
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  p {
    margin: 0.5rem 0;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
