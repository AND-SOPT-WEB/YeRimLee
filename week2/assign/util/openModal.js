import { addMember } from "./addMember.js";

export const openModal = () => {
  // 모달 열기
  const addBtn = document.querySelector(".add_btn");
  const modal = document.querySelector(".modal");

  addBtn.addEventListener("click", () => {
    modal.showModal();
  });

  // 회원 추가시 모든 필드 입력 확인
  const modalAddBtn = document.querySelector(".modal_add_btn");
  modalAddBtn.addEventListener("click", addMember);
};
