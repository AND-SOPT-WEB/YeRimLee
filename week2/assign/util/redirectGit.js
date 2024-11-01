// 클릭 시 깃허브로 이동
export const redirectGitHandler = () => {
  const githubLinks = document.querySelectorAll(".git_link");

  githubLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = event.target.getAttribute("data_url");
      if (url) {
        window.open(url, "_blank"); // 새 페이지로
      }
    });
  });
};
