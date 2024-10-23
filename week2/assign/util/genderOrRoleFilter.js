// 성별, 역할 필드를 동적으로 필터링
export const filterGenderOrRole = (memberList, field, fieldValue) => {
  if (fieldValue === "") {
    return memberList;
  } else {
    return memberList.filter((member) => member[field] === fieldValue);
  }
};

// 선택된 성별 감지
export const getSelectValue = (selectClass) => {
  const selectedElement = document.querySelector(`.${selectClass}`);
  return selectedElement.value;
};
