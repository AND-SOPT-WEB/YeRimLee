// 금잔디조 필드를 동적으로 필터링하는 함수
export const filterWeek = (memberList, weekField, weekValue) => {
  if (weekValue === "") {
    return memberList;
  }

  // 숫자 필터링 (weekField를 동적으로 참조)
  const filteredList = memberList.filter(
    (member) => member[weekField] === parseInt(weekValue)
  );

  return filteredList.length > 0 ? filteredList : null;
};

// 입력된 숫자 감지
export const getInputNumber = (weekId) => {
  const selectedElement = document.querySelector(`#${weekId}`);
  return selectedElement.value;
};
