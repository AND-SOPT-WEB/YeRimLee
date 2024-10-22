// 깃허브 필터링
export const filterGithub = (memberList, github) => {
  if (github === "") {
    return memberList;
  }

  // 대소문자 구분없이 부분일치 필터링
  const filteredList = memberList.filter((member) =>
    member.github.toLowerCase().includes(github.toLowerCase())
  );

  return filteredList.length > 0 ? filteredList : null;
};

// 입력된 내용 감지
export const getInputGithub = () => {
  const selectedElement = document.querySelector("#githubInput");
  return selectedElement.value;
};
