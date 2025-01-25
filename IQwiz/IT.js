// Timer for 30 minutes
let timeRemaining = 1200; // 30 minutes in seconds
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
const questions=[
  {
    question: "In a digital circuit, the term 'fan-out' refers to the:",
    choices: [
      "Number of inputs that a single output can drive without exceeding specified voltage levels",
      "Number of outputs that a single input can drive without exceeding specified voltage levels",
      "Maximum frequency at which the circuit can operate",
      "Total number of logic gates in the circuit",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a valid identifier in C?",
    choices: ["int 1value;", "float value$;", "double value@;", "char value#;"],
    answer: 1,
  },
  {
    question:
      "Which data structure is used in the implementation of recursion?",
    choices: ["Queue", "Stack", "Linked List", "Array"],
    answer: 1,
  },
  {
    question: "Which of the following is a non-primitive data type?",
    choices: ["int", "float", "char", "String"],
    answer: 3,
  },
  {
    question: "Which of the following is a valid SQL statement?",
    choices: [
      "SELECT * FROM table WHERE condition;",
      "INSERT INTO table VALUES (value1, value2);",
      "UPDATE table SET column = value WHERE condition;",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question:
      "Which algorithm is used for finding the shortest path in a graph?",
    choices: [
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following is a characteristic of a deadlock in an operating system?",
    choices: [
      "Mutual Exclusion",
      "Hold and Wait",
      "No Preemption",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of malware?",
    choices: ["Virus", "Worm", "Trojan Horse", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a valid HTML tag?",
    choices: ["<div>", "<span>", "<p>", "All of the above"],
    answer: 3,
  },
  {
    question:
      "Which of the following is a feature of object-oriented programming?",
    choices: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of database relationship?",
    choices: ["One-to-One", "One-to-Many", "Many-to-Many", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of sorting algorithm?",
    choices: ["Bubble Sort", "Quick Sort", "Merge Sort", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of network topology?",
    choices: ["Bus", "Star", "Ring", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of operating system?",
    choices: [
      "Batch Processing",
      "Time-Sharing",
      "Real-Time",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer memory?",
    choices: ["RAM", "ROM", "Cache", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of programming language?",
    choices: ["High-Level", "Low-Level", "Assembly", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software?",
    choices: [
      "System Software",
      "Application Software",
      "Utility Software",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer virus?",
    choices: [
      "Boot Sector Virus",
      "Macro Virus",
      "File Infector Virus",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer network?",
    choices: ["LAN", "WAN", "MAN", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer architecture?",
    choices: [
      "Von Neumann Architecture",
      "Harvard Architecture",
      "Modified Harvard Architecture",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer input device?",
    choices: ["Keyboard", "Mouse", "Scanner", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer output device?",
    choices: ["Monitor", "Printer", "Speaker", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer storage device?",
    choices: [
      "Hard Disk",
      "Solid State Drive",
      "Optical Disk",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer display device?",
    choices: ["CRT Monitor", "LCD Monitor", "LED Monitor", "All of the above"],
    answer: 3,
  },
  {
    question:
      "Which of the following is a type of computer communication device?",
    choices: ["Modem", "Router", "Switch", "All of the above"],
    answer: 3,
  },
  {
    question: "Which data structure uses LIFO (Last In First Out) order?",
    choices: ["Queue", "Stack", "Linked List", "Array"],
    answer: 1,
  },
  {
    question: "In a binary tree, the maximum number of nodes at level 'l' is:",
    choices: ["2^l", "2^(l+1) - 1", "2^(l-1)", "2^l - 1"],
    answer: 0,
  },
  {
    question:
      "Which algorithm is used for finding the shortest path in a weighted graph?",
    choices: [
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a non-primitive data type?",
    choices: ["Integer", "Float", "Array", "Character"],
    answer: 2,
  },
  {
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    choices: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
    answer: 1,
  },
  {
    question:
      "Which of the following is a characteristic of a deadlock in operating systems?",
    choices: [
      "Mutual Exclusion",
      "Preemption",
      "Circular Wait",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of non-relational database?",
    choices: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: 2,
  },
  {
    question:
      "Which protocol is used for secure communication over a computer network?",
    choices: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: 2,
  },
  {
    question:
      "Which of the following is a feature of object-oriented programming?",
    choices: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a valid IPv4 address?",
    choices: [
      "192.168.1.1",
      "256.256.256.256",
      "192.168.1.256",
      "192.168.1.1.1",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a type of malware?",
    choices: ["Virus", "Trojan Horse", "Worm", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of loop in programming?",
    choices: ["For Loop", "While Loop", "Do-While Loop", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of operating system?",
    choices: ["Windows", "Linux", "macOS", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer memory?",
    choices: ["RAM", "ROM", "Cache", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of computer network?",
    choices: ["LAN", "WAN", "MAN", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of database management system?",
    choices: [
      "Relational DBMS",
      "Hierarchical DBMS",
      "Network DBMS",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of programming language?",
    choices: ["C", "Java", "Python", "All of the above"],
    answer: 3,
  },
  {
    question:
      "Which of the following is a type of software development methodology?",
    choices: ["Agile", "Waterfall", "Scrum", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software testing?",
    choices: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software development model?",
    choices: [
      "V-Model",
      "Spiral Model",
      "Incremental Model",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software maintenance?",
    choices: [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software engineering?",
    choices: [
      "Requirements Engineering",
      "Design Engineering",
      "Testing Engineering",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software architecture?",
    choices: [
      "Layered Architecture",
      "Client-Server Architecture",
      "Microservices Architecture",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software design pattern?",
    choices: [
      "Singleton Pattern",
      "Factory Pattern",
      "Observer Pattern",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a type of software development tool?",
    choices: [
      "Version Control System",
      "Integrated Development Environment",
      "Build Automation Tool",
      "All of the above",
    ],
    answer: 3,
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
