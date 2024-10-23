// select 태그 선택된 값
export const getSelectValue = (selectClass) => {
  const selectedElement = document.querySelector(`.${selectClass}`);
  return selectedElement.value;
};

// input 태그 이름 입렵된 값
export const getInputName = () => {
  const selectedElement = document.querySelector("#nameInput");
  return selectedElement.value;
};

// input 태그 영문이름, 깃허브 입력된 값
export const getInputValue = (inputId) => {
  const selectedElement = document.querySelector(`#${inputId}`);
  return selectedElement.value;
};

// input 태그 숫자 입력된 값
export const getInputNumber = (weekId) => {
  const selectedElement = document.querySelector(`#${weekId}`);
  return selectedElement.value;
};
