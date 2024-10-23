// 공백, 대소문자 구분 없이 필터링된 멤버 리스트 반환
export const filterMembers = (memberList, filters) => {
  return memberList.filter((member) =>
    Object.entries(filters).every(([key, value]) => {
      const trimmedValue = value.trim().toLowerCase();
      if (key === "gender") {
        return (
          trimmedValue === "" || member[key]?.toLowerCase() === trimmedValue
        );
      }
      return (
        trimmedValue === "" ||
        member[key]?.toString().toLowerCase().includes(trimmedValue)
      );
    })
  );
};
