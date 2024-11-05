import styled from "@emotion/styled";
import { useState } from "react";

const LankBoard = () => {
  // 로컬 스토리지에서 게임 기록을 가져오기
  const [storedData, setStoredData] = useState(
    JSON.parse(localStorage.getItem("gameResults")) || []
  );

  // 플레이 시간이 짧은 순서대로 정렬
  const sortedData = storedData.sort((a, b) => a.playTime - b.playTime);

  // 초기화 버튼 클릭 핸들러
  const handleReset = () => {
    localStorage.removeItem("gameResults");
    setStoredData([]);
  };

  return (
    <Container>
      <Title>
        랭킹
        <ResetButton onClick={handleReset}>초기화</ResetButton>
      </Title>
      <Table>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((record, index) => (
              <tr key={index}>
                <td>{record.endTime}</td>
                <td>{record.level}</td>
                <td>{record.playTime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">기록이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default LankBoard;

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.hover};
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.card};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: left;
  }

  th {
    background-color: #f1f1f1;
  }
`;
