const questions = [
  {
    question: "Who was the first woman to become the Prime Minister of India?",
    options: ["Sarojini Naidu", "Indira Gandhi","Pratibha Patil"," Sonia Gandhi"],
    correct: "Indira Gandhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Mars"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correct: "William Shakespeare"
  }
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

function displayQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById('time').textContent = timeLeft;
  startTimer();

  const q = questions[currentIndex];
  document.getElementById('question').textContent = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('answer-btn');
    btn.onclick = () => checkAnswer(btn, option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(button, selected) {
  clearInterval(timer);
  const correct = questions[currentIndex].correct;
  const buttons = document.querySelectorAll('.answer-btn');

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add('correct');
    } else if (btn.textContent === selected) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === correct) score++;
  document.getElementById('score').textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestion();
  } else {
    document.getElementById('quiz-box').innerHTML = `
      <h2>🎉 Quiz Complete!</h2>
      <p>Your final score: ${score}/${questions.length}</p>
    `;
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

displayQuestion();
