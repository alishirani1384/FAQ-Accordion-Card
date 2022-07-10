const questions = document.querySelectorAll(".question-box");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});
