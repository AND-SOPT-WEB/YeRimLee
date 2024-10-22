import { members } from "../data.js";
import { filterGender, getSelectedGender } from "./genderFilter.js";
import { filterRole, getSelectedRole } from "./roleFilter.js";
import { filterName, getInputName } from "./nameFilter.js";

// 멤버 로컬스토리지에 저장
const MEMBER_KEY = "membersData";

if (!localStorage.getItem("MEMBER_KEY")) {
  localStorage.setItem("MEMBER_KEY", JSON.stringify(members));
}

// 멤버 화면에 출력
let memberList = JSON.parse(localStorage.getItem("MEMBER_KEY")) || [];

function renderMemberList(filteredMembers) {
  const showMemberContainer = document.querySelector(".tbody");
  showMemberContainer.innerHTML = ""; // 기존 리스트 초기화

  // 일치하는 멤버리스트가 null인 경우
  if (!filteredMembers || filteredMembers.length === 0) {
    showMemberContainer.innerHTML = `<tr><td colspan="8">일치하는 회원이 없습니다.</td></tr>`;
    return;
  }

  let showMemberList = filteredMembers.map((member) => {
    return `
        <tr id=${member.id}>
        <td><input type="checkbox"></td>
        <td>${member.name}</td>
        <td>${member.enName}</td>
        <td>${member.github}</td>
        <td>${member.gender}</td>
        <td>${member.role}</td>
        <td>${member.week1}</td>
        <td>${member.week2}</td>
        </tr>
        `;
  });
  showMemberContainer.innerHTML += showMemberList.join("");
}

// 전체 멤버 리스트 렌더링
renderMemberList(memberList);

// 검색 버튼을 누르면 필터링된 리스트 렌더링
const handleSearch = document.querySelector(".search_btn");

handleSearch.addEventListener("click", (event) => {
  event.preventDefault(); // form 태그 기본 속성 방지

  const selectedGender = getSelectedGender();
  const selectedRole = getSelectedRole();
  const inputName = getInputName();

  // 필터링
  const filteredGender = filterGender(memberList, selectedGender);
  const filteredRole = filterRole(filteredGender, selectedRole);
  const filteredMembers = filterName(filteredRole, inputName);

  renderMemberList(filteredMembers); // 필터링된 리스트 렌더링
});
