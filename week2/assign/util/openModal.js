// 모달 열기
export const openModal = () => {
  const addBtn = document.querySelector(".add_btn");
  const modal = document.querySelector(".modal");

  addBtn.addEventListener("click", () => {
    modal.showModal();
  });
};
