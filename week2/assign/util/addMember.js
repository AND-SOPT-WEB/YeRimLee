// 회원 추가 및 모든 필드 확인
import { renderMemberList } from "./render.js";

export const addMember = (event) => {
  event.preventDefault();

  const formElements = document.querySelectorAll(".modal input, .modal select");
  const newMember = {};

  // 필드 비어있는지 확인 및 동적으로 멤버 추가
  for (const element of formElements) {
    if (!element.value) {
      alert(
        `${element.previousElementSibling.textContent}를(을) 입력해주세요.`
      );
      return;
    } else {
      // input, select태그의 name 속성을 사용하여 객체에 동적으로 값 추가
      const name = element.name;
      newMember[name] = element.value;
    }
  }

  newMember.id = Date.now(); // 효율적인 id 부여 방법!

  // 새로운 멤버 로컬 스토리지에 추가
  let memberList = JSON.parse(localStorage.getItem("MEMBER_KEY")) || [];
  memberList.push(newMember);
  localStorage.setItem("MEMBER_KEY", JSON.stringify(memberList));

  // 멤버 리스트 렌더링
  renderMemberList(memberList);

  // 모달 닫기
  const modal = document.querySelector(".modal");
  modal.close();
};
