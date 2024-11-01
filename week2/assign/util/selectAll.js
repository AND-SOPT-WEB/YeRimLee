// 전체 체크박스 기능
export const selectAllCheckBox = () => {
  // getElementsByName은 배열을 반환!
  const selectAllBox = document.getElementsByName("webby")[0];
  const checkboxes = document.getElementsByName("webbyList");

  // 전체 체크박스
  selectAllBox.addEventListener("click", (event) => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
  });

  // 개별 체크박스 전체에 반영
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      const allChecked = Array.from(checkboxes).every(
        (checkbox) => checkbox.checked
      );
      selectAllBox.checked = allChecked; // 참 거짓을 반환
    });
  });
};
