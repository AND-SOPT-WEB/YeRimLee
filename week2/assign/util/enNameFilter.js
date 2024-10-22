// 영문이름에 따라 멤버 리스트 필터링
export const filterEnName = (memberList, enName) => {
  if (enName === "") {
    return memberList;
  }

  // 대소문자 구분없이 부분일치 필터링
  const filteredList = memberList.filter((member) =>
    member.enName.toLowerCase().includes(enName.toLowerCase())
  );

  return filteredList.length > 0 ? filteredList : null;
};

// 입력된 내용 감지
export const getInputEnName = () => {
  const selectedElement = document.querySelector("#enNameInput");
  return selectedElement.value;
};
