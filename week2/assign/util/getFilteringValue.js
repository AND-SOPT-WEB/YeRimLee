// 필터링에 입력된 값
export const getFilteringValue = (selector) => {
  const selectedElement = document.querySelector(`#${selector}`);
  return selectedElement ? selectedElement.value : "";
};
