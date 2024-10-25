// 선택된 회원 삭제
export const deleteSelectedMembers = (memberList, renderCallback) => {
  const deleteBtn = document.querySelector(".delete_btn");

  deleteBtn.addEventListener("click", () => {
    const selectedMembers = getCheckedMembers();

    if (selectedMembers.length > 0) {
      // 삭제할 회원을 리스트에서 제거
      selectedMembers.forEach((memberId) => {
        const memberIndex = memberList.findIndex(
          (member) => member.id === memberId
        );
        if (memberIndex !== -1) {
          memberList.splice(memberIndex, 1);
        }
      });
      // 삭제 후 리스트를 다시 렌더링
      renderCallback(memberList);
    } else {
      return;
    }
  });
};

export const getCheckedMembers = () => {
  const checkboxes = document.querySelectorAll(".webby_checkbox:checked");
  const checkedMembers = Array.from(checkboxes).map((checkbox) => {
    const memberRow = checkbox.closest("tr");
    return Number(memberRow.id); // HTML요소에서 가져와서 string
  });

  return checkedMembers;
};
