// script.js
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "React", "Vue"],
    answer: "Python Script"
  },
  {
    question: "Which is used to connect to Database?",
    options: ["PHP", "HTML", "JS"],
    answer: "PHP"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.addEventListener("click", () => selectOption(btn, current.answer));
    optionsEl.appendChild(btn);
  });
}

function selectOption(selectedBtn, correctAnswer) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn === selectedBtn) {
      btn.classList.add("wrong");
    }
  });

  if (selectedBtn.innerText === correctAnswer) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.innerText = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.innerText = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
