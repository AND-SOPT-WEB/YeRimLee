// 영문이름, 깃허브 닉네임 필드를 동적으로 필터링
export const filterEnNameOrGit = (memberList, field, fieldValue) => {
  if (fieldValue === "") {
    return memberList;
  }

  // 대소문자 구분없이 부분일치 필터링
  const filteredList = memberList.filter((member) =>
    member[field].toLowerCase().includes(fieldValue.trim().toLowerCase())
  );

  return filteredList.length > 0 ? filteredList : null;
};

// 입력된 내용 감지
export const getInputValue = (inputId) => {
  const selectedElement = document.querySelector(`#${inputId}`);
  return selectedElement.value;
};
