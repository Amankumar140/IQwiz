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
    question: "Find the invalid variable among the following:",
    choices: ["1st_string", "my_string_1", " _", "foo"],
    answer: 0,
  },
  {
    question: "Which one of these is incorrect?",
    choices: [
      "float(‘nan’)",
      "float(‘inf’)",
      "float(’12+34′)",
      "float(’56’+’78’)",
    ],
    answer: 2,
  },
  {
    question:
      "The value of the Python expression given below would be: <br>4+2**5//10",
    choices: ["77", "0", "3", "7"],
    answer: 3,
  },

  {
    question: "Closeness of two or more measured values is called as",
    choices: ["accuracy", "precision", "error", "approximation"],
    answer: 2,
  },
  {
    question: "Closeness of two or more measured values is called as",
    choices: ["accuracy", "precision", "error", "approximation"],
    answer: 2,
  },
  {
    question: "Which of the following is a property of acids?",
    choices: [
      "Bitter taste",
      "Turns red litmus paper blue",
      "Reacts with metals to release hydrogen",
      "Slippery feel",
    ],
    answer: 3,
  },
  {
    question: "What is the chemical formula of water?",
    choices: ["H2O", "CO2", "NaCl", "H2O2"],
    answer: 1,
  },
  {
    question: "Which of the following elements is a noble gas?",
    choices: ["Oxygen", "Neon", "Carbon", "Nitrogen"],
    answer: 2,
  },
  {
    question: "What is the atomic number of Carbon?",
    choices: [6, 8, 12, 14],
    answer: 0,
  },
  {
    question: "Which of the following is an example of an exothermic reaction?",
    choices: [
      "Melting of ice",
      "Boiling of water",
      "Burning of wood",
      "Dissolution of salt in water",
    ],
    answer: 2,
  },
  {
    question:
      "Which type of bond is formed by the sharing of electron pairs between atoms?",
    choices: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    answer: 1,
  },
  {
    question: "What is the pH of a neutral solution at 25°C?",
    choices: [4, 5, 7, 9],
    answer: 2,
  },
  {
    question:
      "Which of the following substances is most likely to dissolve in water?",
    choices: ["Oil", "Sugar", "Iodine", "Sand"],
    answer: 1,
  },
  {
    question: "What is the molar mass of oxygen (O) in g/mol?",
    choices: [16, 18, 32, 40],
    answer: 0,
  },
  {
    question: "Which gas is produced when an acid reacts with a metal?",
    choices: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
    answer: 0,
  },
  {
    question: "Which of the following is a strong acid?",
    choices: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Formic acid"],
    answer: 2,
  },
  {
    question:
      "What is the name of the process by which a solid turns directly into a gas?",
    choices: ["Condensation", "Sublimation", "Deposition", "Evaporation"],
    answer: 1,
  },
  {
    question: "What is the primary component of natural gas?",
    choices: ["Methane", "Ethane", "Propane", "Butane"],
    answer: 0,
  },
  {
    question: "Which of the following is the lightest element?",
    choices: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a property of metals?",
    choices: ["Conducts electricity", "Malleable", "Brittle", "Lustrous"],
    answer: 2,
  },
  {
    question: "Which molecule is an example of a polar covalent bond?",
    choices: ["H2", "O2", "H2O", "N2"],
    answer: 2,
  },
  {
    question: "What is the common name for sodium chloride?",
    choices: ["Baking soda", "Table salt", "Epsom salt", "Lime"],
    answer: 1,
  },
  {
    question: "Which of the following is an example of a chemical change?",
    choices: [
      "Melting of ice",
      "Boiling of water",
      "Rusting of iron",
      "Dissolving of sugar in water",
    ],
    answer: 2,
  },
  {
    question: "Which part of the atom has a negative charge?",
    choices: ["Proton", "Neutron", "Electron", "Nucleus"],
    answer: 2,
  },
  {
    question:
      "Which element is commonly used in the production of semiconductors?",
    choices: ["Silicon", "Iron", "Gold", "Copper"],
    answer: 0,
  },
  {
    question:
      "What type of reaction occurs when two substances combine to form a compound?",
    choices: [
      "Decomposition",
      "Synthesis",
      "Single replacement",
      "Double replacement",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is an example of an ionic compound?",
    choices: ["NaCl", "H2O", "C6H12O6", "CO2"],
    answer: 0,
  },
  {
    question: "Which of the following compounds is a strong base?",
    choices: ["NaOH", "NH3", "HCl", "CH3COOH"],
    answer: 0,
  },
];
// Add more questions as desired

let incorrectQuestions = []; // Store incorrect questions for display on result page
//console.log(questions);

let currentQuestionIndex = 0;
let userAnswers = Array(questions.length).fill(null);
let selectedQuestions = [];

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
  selectedQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.answer) correctAnswers++;
    else {
      incorrectQuestions.push({
        question: q.question,
        choices: q.choices,
        correctAnswer: q.choices[q.answer],
        userAnswer: q.choices[userAnswers[index]],
      });
    }
  });
  sessionStorage.setItem("correctAnswers", correctAnswers);
  sessionStorage.setItem("totalQuestions", questions.length);
  sessionStorage.setItem(
    "incorrectQuestions",
    JSON.stringify(incorrectQuestions)
  ); // Store incorrect questions
  window.location.href = "result.html";
}

window.onload = function () {
  if (window.location.pathname.includes("result.html")) {
    displayResults();
  }
};

// Load Result and Display Pie Chart
function displayResults() {
  const correctAnswers = parseInt(sessionStorage.getItem("correctAnswers"));
  const totalQuestions = parseInt(sessionStorage.getItem("totalQuestions"));
  const incorrectQuestions = JSON.parse(sessionStorage.getItem("incorrectQuestions"));

  const ctx = document.getElementById("resultChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          data: [correctAnswers, totalQuestions - correctAnswers],
          backgroundColor: ["#4CAF50", "#FF5252"],
        },
      ],
    },
  });

  document.getElementById(
    "result-summary"
  ).innerHTML = `You got ${correctAnswers} out of ${totalQuestions} questions correct.`;

  
}
// Function to display incorrect questions
function displayIncorrectQuestions() {
  const incorrectContainer = document.getElementById("incorrect-questions");
  incorrectQuestions.forEach((q, index) => {
    incorrectContainer.innerHTML += `
      <div>
        <h4>Question ${index + 1}: ${q.question}</h4>
        <p>Your Answer: ${q.userAnswer || "Not Answered"}</p>
        <p>Correct Answer: ${q.correctAnswer}</p>
      </div>
    `;
    
  });

    // Call Gemini AI API for additional information
    
  
}

// Function to fetch additional information from Gemini AI
function fetchGeminiAI(question) {
  const apiKey = "AIzaSyAJua5j7r24hqRagD_HWL26ajJIh5NZ3OM"; // Your API key
  const url = `https://gemini.googleapis.com/v1/your-endpoint?question=${encodeURIComponent(
    question
  )}&key=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Process and display the response from Gemini AI
      const aiResponse = data.answer; // Adjust based on actual response structure
      const responseElement = document.createElement("p");
      responseElement.innerHTML = `AI Response: ${aiResponse}`;
      document
        .getElementById("incorrect-questions")
        .appendChild(responseElement);
    })
    .catch((error) => {
      console.error("Error fetching from Gemini AI:", error);
    });
}

startTimer();
loadQuestion();
