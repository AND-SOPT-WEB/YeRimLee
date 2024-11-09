export const saveGameRecord = (level, playTime) => {
  // 게임 종료 시 정보 저장
  const endTime = new Date().toLocaleString(); // 현재 시각
  const gameInfo = {
    endTime,
    level,
    playTime,
  };

  // 기존의 게임 기록을 가져옴
  const existingGameRecords =
    JSON.parse(localStorage.getItem("gameResults")) || [];

  // 새로운 게임 결과를 배열에 추가
  existingGameRecords.push(gameInfo);

  // 업데이트된 게임 기록을 localStorage에 저장
  localStorage.setItem("gameResults", JSON.stringify(existingGameRecords));
};
