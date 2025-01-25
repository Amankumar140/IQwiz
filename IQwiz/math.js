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
        question: "The solution to the equation 3x - 5 = 16 is",
        choices: ["x = 7", "x = 5", "x = 4", "x = 3"],
        answer: 0
      },
      {
        question: "The area of a triangle with base 6 cm and height 8 cm is",
        choices: ["24 cm²", "48 cm²", "12 cm²", "36 cm²"],
        answer: 0
      },
      {
        question: "The derivative of 3x² + 5x - 7 with respect to x is",
        choices: ["6x + 5", "6x - 5", "5x + 6", "5x - 6"],
        answer: 0
      },
      {
        question: "The value of ∫(x² + 2x + 1)dx is",
        choices: ["(x³/3) + x² + x + C", "(x³/3) + x² + C", "(x³/2) + x + C", "(x²/2) + 2x + C"],
        answer: 0
      },
      {
        question: "The sum of the roots of the quadratic equation x² - 6x + 8 = 0 is",
        choices: ["6", "8", "12", "4"],
        answer: 0
      },
      {
        question: "The value of tan(45°) is",
        choices: ["1", "0", "√2", "√3"],
        answer: 0
      },
      {
        question: "The value of ∑(from i=1 to 10) i is",
        choices: ["55", "45", "65", "50"],
        answer: 0
      },
      {
        question: "The integral of cos(x) with respect to x is",
        choices: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
        answer: 0
      },
      {
        question: "The equation of the line passing through the points (1, 2) and (3, 4) is",
        choices: ["y = x + 1", "y = 2x", "y = x + 1", "y = x + 3"],
        answer: 2
      },
      {
        question: "The value of (x + 3)(x + 5) is",
        choices: ["x² + 8x + 15", "x² + 8x + 12", "x² + 5x + 15", "x² + 7x + 15"],
        answer: 0
      },
      {
        question: "The radius of a circle with the equation x² + y² = 25 is",
        choices: ["5", "10", "25", "50"],
        answer: 0
      },
      {
        question: "The sum of the first n natural numbers is given by the formula",
        choices: ["n(n + 1)", "n(n - 1)/2", "n(n + 1)/2", "n²"],
        answer: 2
      },
      {
        question: "If the roots of the equation x² - 5x + 6 = 0 are α and β, then the value of α + β is",
        choices: ["5", "6", "1", "4"],
        answer: 0
      },
      {
        question: "The solution to the equation log₁₀ x = 3 is",
        choices: ["x = 1000", "x = 3", "x = 10", "x = 100"],
        answer: 0
      },
      {
        question: "The value of sin²(θ) + cos²(θ) is always",
        choices: ["1", "0", "sin(2θ)", "cos(2θ)"],
        answer: 0
      },
      {
        question: "The equation of the ellipse with foci at (±4, 0) and vertices at (±6, 0) is",
        choices: ["x²/36 + y²/16 = 1", "x²/16 + y²/36 = 1", "x²/6 + y²/4 = 1", "x²/16 + y²/4 = 1"],
        answer: 0
      },
      {
        question: "The derivative of e^x with respect to x is",
        choices: ["e^x", "x e^x", "e^x + 1", "e^x - 1"],
        answer: 0
      },
      {
        question: "The sum of the first 20 terms of an arithmetic progression with first term 2 and common difference 5 is",
        choices: ["1050", "1100", "1200", "1300"],
        answer: 0
      },
      {
        question: "The value of logₐ a is",
        choices: ["1", "a", "0", "∞"],
        answer: 0
      },
      {
        question: "The equation of a hyperbola with center at the origin and transverse axis along the x-axis is",
        choices: ["x²/a² - y²/b² = 1", "x²/a² + y²/b² = 1", "x²/b² - y²/a² = 1", "x²/b² + y²/a² = 1"],
        answer: 0
      },
      {
        question: "The discriminant of the quadratic equation ax² + bx + c = 0 is given by",
        choices: ["b² - 4ac", "a² - 4bc", "b² + 4ac", "4ac - b²"],
        answer: 0
      },
      {
        question: "The number of distinct real solutions of the equation x³ - 4x² - 3x + 18 = 0 is",
        choices: ["3", "2", "1", "0"],
        answer: 2
      },
      {
        question: "The value of the definite integral ∫₀² (2x + 3)dx is",
        choices: ["7", "10", "9", "12"],
        answer: 0
      },
      {
        question: "The value of cos(30°) is",
        choices: ["√3/2", "1/2", "√2/2", "1"],
        answer: 0
      },
      {
        question: "The sum of the roots of the quadratic equation x² - 3x + 2 = 0 is",
        choices: ["3", "2", "5", "1"],
        answer: 0
      },
      {
        question: "The equation of the tangent to the curve y = x² at x = 1 is",
        choices: ["y = 2x - 1", "y = x + 1", "y = x - 1", "y = 2x + 1"],
        answer: 0
      },
      {
        question: "The value of (x - 3)(x + 4) is",
        choices: ["x² + x - 12", "x² + x + 12", "x² - x - 12", "x² - x + 12"],
        answer: 0
      },
      {
        question: "The equation of a circle with center (3, -2) and radius 4 is",
        choices: ["(x - 3)² + (y + 2)² = 16", "(x + 3)² + (y - 2)² = 16", "(x - 3)² + (y - 2)² = 16", "(x + 3)² + (y + 2)² = 16"],
        answer: 0
      },
      {
        question: "The value of ∫(0 to π/2) sin(x)dx is",
        choices: ["1", "2", "0", "π/2"],
        answer: 0
      },
      {
        question: "The radius of a circle inscribed in a square of side 6 cm is",
        choices: ["6 cm", "3 cm", "12 cm", "9 cm"],
        answer: 1
      },
      {
        question: "The determinant of the matrix [[1, 2], [3, 4]] is",
        choices: ["-2", "2", "4", "1"],
        answer: 0
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
