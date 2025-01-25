// Timer for 30 minutes
let timeRemaining = 1800; // 30 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    document.getElementById(
      "timer"
    ).textContent = `Time Remaining :  ${minutes}:${seconds}`;
    timeRemaining--;
    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

// Randomize and Load Questions
const questions = [
  {
    question: "What is the SI unit of electric charge?",
    choices: ["Coulomb", "Ampere", "Volt", "Ohm"],
    answer: 0,
  },
  {
    question: "Which of the following is a vector quantity?",
    choices: ["Speed", "Distance", "Velocity", "Energy"],
    answer: 2,
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    choices: ["9.8 m/s²", "10 m/s²", "9.8 km/s²", "10 km/s²"],
    answer: 0,
  },
  {
    question:
      "Which law states that the total energy of an isolated system remains constant?",
    choices: [
      "Newton's First Law",
      "Law of Conservation of Energy",
      "Hooke's Law",
      "Boyle's Law",
    ],
    answer: 1,
  },
  {
    question: "What is the SI unit of power?",
    choices: ["Joule", "Watt", "Newton", "Pascal"],
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct formula for kinetic energy?",
    choices: ["KE = m × v", "KE = m × v²", "KE = ½ × m × v²", "KE = m × v³"],
    answer: 2,
  },
  {
    question: "What is the SI unit of electric current?",
    choices: ["Volt", "Ampere", "Coulomb", "Ohm"],
    answer: 1,
  },
  {
    question: "Which of the following is a non-conservative force?",
    choices: [
      "Gravitational force",
      "Electrostatic force",
      "Frictional force",
      "Magnetic force",
    ],
    answer: 2,
  },
  {
    question: "What is the SI unit of frequency?",
    choices: ["Hertz", "Joule", "Newton", "Pascal"],
    answer: 0,
  },
  {
    question: "Which of the following is the correct formula for Ohm's Law?",
    choices: ["V = I × R", "V = I / R", "V = R / I", "V = I² × R"],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric potential difference?",
    choices: ["Volt", "Ampere", "Coulomb", "Ohm"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for gravitational potential energy?",
    choices: [
      "PE = m × g × h",
      "PE = m × g × h²",
      "PE = m × g × h³",
      "PE = m × g × h⁴",
    ],
    answer: 0,
  },
  {
    question: "What is the SI unit of work?",
    choices: ["Joule", "Watt", "Newton", "Pascal"],
    answer: 0,
  },
  {
    question: "Which of the following is the correct formula for Hooke's Law?",
    choices: ["F = k × x", "F = k / x", "F = x / k", "F = k × x²"],
    answer: 0,
  },
  {
    question: "What is the SI unit of pressure?",
    choices: ["Pascal", "Newton", "Joule", "Watt"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for centripetal acceleration?",
    choices: ["a = v² / r", "a = v / r", "a = r / v", "a = v³ / r"],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric resistance?",
    choices: ["Ohm", "Volt", "Ampere", "Coulomb"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for Coulomb's Law?",
    choices: [
      "F = k × (q₁ × q₂) / r²",
      "F = k × (q₁ × q₂) / r",
      "F = k × (q₁ × q₂) / r³",
      "F = k × (q₁ × q₂) / r⁴",
    ],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric charge?",
    choices: ["Coulomb", "Ampere", "Volt", "Ohm"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for the period of a simple pendulum?",
    choices: [
      "T = 2π√(l / g)",
      "T = 2π√(g / l)",
      "T = 2π√(l × g)",
      "T = 2π√(g / l²)",
    ],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric field?",
    choices: [
      "Volt per meter",
      "Newton per Coulomb",
      "Joule per Coulomb",
      "Tesla",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for the energy stored in a capacitor?",
    choices: ["E = ½ × C × V²", "E = C × V²", "E = ½ × C × V", "E = C × V"],
    answer: 0,
  },
  {
    question: "What is the SI unit of magnetic flux?",
    choices: ["Weber", "Tesla", "Henry", "Joule"],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric charge?",
    choices: ["Coulomb", "Ampere", "Volt", "Ohm"],
    answer: 0,
  },
  {
    question: "Which of the following is a vector quantity?",
    choices: ["Speed", "Distance", "Velocity", "Energy"],
    answer: 2,
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    choices: ["9.8 m/s²", "10 m/s²", "9.8 km/s²", "10 km/s²"],
    answer: 0,
  },
  {
    question:
      "Which law states that the total energy of an isolated system remains constant?",
    choices: [
      "Newton's First Law",
      "Law of Conservation of Energy",
      "Hooke's Law",
      "Boyle's Law",
    ],
    answer: 1,
  },
  {
    question: "What is the SI unit of power?",
    choices: ["Joule", "Watt", "Newton", "Pascal"],
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct formula for kinetic energy?",
    choices: ["KE = m × v", "KE = m × v²", "KE = ½ × m × v²", "KE = m × v³"],
    answer: 2,
  },
  {
    question: "What is the SI unit of electric current?",
    choices: ["Volt", "Ampere", "Coulomb", "Ohm"],
    answer: 1,
  },
  {
    question: "Which of the following is a non-conservative force?",
    choices: [
      "Gravitational force",
      "Electrostatic force",
      "Frictional force",
      "Magnetic force",
    ],
    answer: 2,
  },
  {
    question: "What is the SI unit of frequency?",
    choices: ["Hertz", "Joule", "Newton", "Pascal"],
    answer: 0,
  },
  {
    question: "Which of the following is the correct formula for Ohm's Law?",
    choices: ["V = I × R", "V = I / R", "V = R / I", "V = I² × R"],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric potential difference?",
    choices: ["Volt", "Ampere", "Coulomb", "Ohm"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for gravitational potential energy?",
    choices: [
      "PE = m × g × h",
      "PE = m × g × h²",
      "PE = m × g × h³",
      "PE = m × g × h⁴",
    ],
    answer: 0,
  },
  {
    question: "What is the SI unit of work?",
    choices: ["Joule", "Watt", "Newton", "Pascal"],
    answer: 0,
  },
  {
    question: "Which of the following is the correct formula for Hooke's Law?",
    choices: ["F = k × x", "F = k / x", "F = x / k", "F = k × x²"],
    answer: 0,
  },
  {
    question: "What is the SI unit of pressure?",
    choices: ["Pascal", "Newton", "Joule", "Watt"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for centripetal acceleration?",
    choices: ["a = v² / r", "a = v / r", "a = r / v", "a = v³ / r"],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric resistance?",
    choices: ["Ohm", "Volt", "Ampere", "Coulomb"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for Coulomb's Law?",
    choices: [
      "F = k × (q₁ × q₂) / r²",
      "F = k × (q₁ × q₂) / r",
      "F = k × (q₁ × q₂) / r³",
      "F = k × (q₁ × q₂) / r⁴",
    ],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric charge?",
    choices: ["Coulomb", "Ampere", "Volt", "Ohm"],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for the period of a simple pendulum?",
    choices: [
      "T = 2π√(l / g)",
      "T = 2π√(g / l)",
      "T = 2π√(l × g)",
      "T = 2π√(g / l²)",
    ],
    answer: 0,
  },
  {
    question: "What is the SI unit of electric field?",
    choices: [
      "Volt per meter",
      "Newton per Coulomb",
      "Joule per Coulomb",
      "Tesla",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following is the correct formula for the energy stored in a capacitor?",
    choices: ["E = ½ × C × V²", "E = C × V²", "E = ½ × C × V", "E = C × V"],
    answer: 0,
  },
  {
    question: "What is the SI unit of magnetic flux?",
    choices: ["Weber", "Tesla", "Henry", "Joule"],
    answer: 0,
  },
];

// Add more questions as desired

console.log(questions);

let currentQuestionIndex = 0;
let userAnswers = Array(questions.length).fill(null);

// Shuffle function to randomize the questions array

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Select 20 random questions from the shuffled list
function selectRandomQuestions() {
  shuffle(questions);
  selectedQuestions = questions.slice(0, 20);
}

let count = 1;

// Load the selected questions into the quiz
function loadQuestion() {
  if (selectedQuestions.length === 0) {
    selectRandomQuestions(); // Initialize selectedQuestions once at the start
  }

  const questionElement = document.getElementById("question-container");
  const question = selectedQuestions[currentQuestionIndex];
  questionElement.innerHTML = `<h3> ${count}. ${question.question}</h3>`;
  question.choices.forEach((choice, index) => {
    questionElement.innerHTML += `<input type="radio" name="answer" value="${index}" ${
      userAnswers[currentQuestionIndex] === index ? "checked" : ""
    }> ${choice}<br>`;
  });
}

// Call `selectRandomQuestions` when the quiz starts
selectRandomQuestions();

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    count++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    count--;
    loadQuestion();
  }
}

function saveAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }
}

// Submit Quiz and Show Results
function submitQuiz() {
  clearInterval(timerInterval);
  let correctAnswers = 0;
  questions.forEach((q, index) => {
    if (userAnswers[index] === q.answer) correctAnswers++;
  });
  sessionStorage.setItem("correctAnswers", correctAnswers);
  sessionStorage.setItem("totalQuestions", questions.length);
  window.location.href = "result.html";
}

// Load Result and Display Pie Chart
window.onload = function () {
  if (window.location.pathname.includes("result.html")) {
    const correctAnswers = parseInt(sessionStorage.getItem("correctAnswers"));
    const totalQuestions = parseInt(sessionStorage.getItem("totalQuestions"));
    const ctx = document.getElementById("resultChart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Correct", "Incorrect"],
        datasets: [
          {
            data: [correctAnswers, 20 - correctAnswers],
            backgroundColor: ["#4CAF50", "#FF5252"],
          },
        ],
      },
    });
    document.getElementById(
      "result-summary"
    ).innerHTML = `You got ${correctAnswers} out of 20 questions correct.`;
  }
};

startTimer();
loadQuestion();
