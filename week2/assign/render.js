import { members } from "./data.js";

// 멤버 로컬스토리지에 저장
const MEMBER_KEY = "membersData";

if (!localStorage.getItem("MEMBER_KEY")) {
  localStorage.setItem("MEMBER_KEY", JSON.stringify(members));
}

// 멤버 화면에 출력
let memberList = JSON.parse(localStorage.getItem("MEMBER_KEY")) || [];

function renderMemberList() {
  const showMember = document.querySelector(".tbody");

  let showMemberList = memberList.map((member) => {
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
  showMember.innerHTML += showMemberList.join("");
}

renderMemberList();
