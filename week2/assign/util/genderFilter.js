// 성별에 따라 멤버 리스트 필터링
export const filterGender = (memberList, gender) => {
  if (gender === "") {
    return memberList; // 성별 선택 안 했을 때 전체 리스트 반환
  } else {
    return memberList.filter((member) => member.gender === gender);
  }
};

// 선택된 성별 감지
export const getSelectedGender = () => {
  const selectElement = document.querySelector(".sel_gender");
  return selectElement.value;
};
