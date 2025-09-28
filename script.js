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
  },
  {
    question: "The Chipko Movement was related to?",
    options: ["Women’s rights", "Forest conservation", "Farmer protest", "Industrialization"],
    correct: "Forest conservation"
  },
  {
    question: "What is the currency of Bangladesh?",
    options: ["Taka", "Dollar", "Dinar", "Rupee"],
    correct: "Taka"
  },
  {
    question: "Which Indian city is known as the 'City of Joy'?",
    options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    correct: "Kolkata"
  },
  {
    question: "Which day is celebrated as World Environment Day?",
    options: ["5th June", "22nd April", "1st May", "15th August"],
    correct: "5th June"
  },
  {
    question: "Which Indian state is famous for the Sun Temple at Konark?",
    options: ["Odisha", "Rajasthan", "Madhya Pradesh", "Tamil Nadu"],
    correct: "Odisha"
  },
  {
    question: "The Quit India Movement was launched in which year?",
    options: ["1930", "1942", "1919", "1920"],
    correct: "1942"
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "Thailand", "Korea"],
    correct: "Japan"
  },

  
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
