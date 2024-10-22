// 이름에 따라 멤버 리스트 필터링
export const filterName = (memberList, name) => {
  if (name === "") {
    return memberList;
  }

  // 입력된 값이 멤버이름에 포함되는지 확인
  const filteredList = memberList.filter((member) =>
    member.name.includes(name)
  );

  return filteredList.length > 0 ? filteredList : null;
};

// 입력된 내용 감지
export const getInputName = () => {
  const selectedElement = document.querySelector("#nameInput");
  return selectedElement.value;
};
