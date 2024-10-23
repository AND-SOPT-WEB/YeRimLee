// 초기화 버튼 누르면 필터링 필드 초기화
export const resetFilter = () => {
  const form = document.querySelector(".filter_section");
  const inputs = form.querySelectorAll("input, select");

  inputs.forEach((input) => {
    input.value = "";
  });
};

export const handleReset = () => {
  const resetButton = document.querySelector(".reset_btn");
  resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetFilter();
  });
};
