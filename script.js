const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || [];

document.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const questionNumber = parseInt(
      event.target.name.replace("question-", "")
    );

    userAnswers[questionNumber] = event.target.value;
    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

submitButton.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;

  localStorage.setItem("score", score);
});

const savedScore = localStorage.getItem("score");

if (savedScore !== null) {
  scoreElement.textContent = `Your score is ${savedScore} out of ${questions.length}.`;
}