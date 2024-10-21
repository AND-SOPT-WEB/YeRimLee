// 역할에 따라 멤버 리스트 필터링
export const filterRole = (memberList, role) => {
  if (role === "") {
    return memberList;
  } else {
    return memberList.filter((member) => member.role === role);
  }
};

// 선택된 역할 감지
export const getSelectedRole = () => {
  const selectElement = document.querySelector(".sel_role");
  return selectElement.value;
};
