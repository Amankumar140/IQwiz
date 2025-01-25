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
    question: "The return value for trunc() would be:",
    choices: ["bool", "float", "int", "none"],
    answer: 2,
  },
  {
    question:
      ". What is the output of the Python code given below, if the date of the system is June 21st, 2017 (Wednesday)?  <br>[] or {}{} or []",
    choices: ["[] []", "[] {}", "{} {}", "{} []"],
    answer: 3,
  },
  {
    question:
      "The output of this Python code would be: <br>s='{0}, {1}, and {2}’ <br>s.format(‘hi’, ‘great’, ‘day’) ",
    choices: [
      "‘hi, great, and day’",
      "‘hi great and day’",
      "‘hi, great, day’",
      "Error",
    ],
    answer: 0,
  },
  {
    question:
      "The output of this Python code would be: <br>a = [‘mn’, ‘op’]<br>for i in a:<br>i.upper()<br>print(a)",
    choices: [
      "[None,None]",
      "[‘MN’, ‘OP’]",
      " [‘mn’, ‘op’]",
      "None of the above",
    ],
    answer: 2,
  },
  {
    question:
      "The output of this Python code would be:<br>print(“mno. PQR”.capitalize())",
    choices: ["Mno. Pqr", "Mno. pqr", " MNO. PQR", "mno. pqr"],
    answer: 2,
  },
  {
    question: "Which arithmetic operators can we NOT use with strings?",
    choices: ["-", "+", "*", "All of the above"],
    answer: 0,
  },
  {
    question: "Which function do we use to shuffle a list(say list1)?",
    choices: [
      "shuffle(list1)",
      "list1.shuffle()",
      " random.shuffleList(list1)",
      "random.shuffle(list1)",
    ],
    answer: 3,
  },
  {
    question:
      "In the following statements of Python, which ones will result into the output: 6? <br>A = [[1, 2, 3],<br>[4, 5, 6],<br>[7, 8, 9]]",
    choices: ["A[3][2]", "A[2][3]", "A[1][2]", "A[2][1]"],
    answer: 2,
  },
  {
    question: "Is this code valid in Python?<br> >>>m=6,7,8,9<br> >>> m",
    choices: [
      "No, many values will unpack",
      "Yes, (6,7,8,9) will be printed",
      " Yes, 6 will be printed",
      "Yes, [6,7,8,9] will be printed",
    ],
    answer: 1,
  },
  {
    question:
      "Which function removes a set’s first and the last element from a list?",
    choices: ["pop", "remove", " dispose", "discard"],
    answer: 0,
  },
  {
    question:
      "The output of this Python code would be:<br> >>> x={1:”X”,2:”Y”,3:”Z”}<br> >>> del x",
    choices: [
      "the del method does not exist for dictionary",
      " the del would delete the values present in dictionary",
      " the del would delete the entire dictionary",
      "the del would delete all the keys in dictionary",
    ],
    answer: 3,
  },
  {
    question:
      "The output of this Python code would be:<br>sum(1,2,3)<br>sum([2,4,6])",
    choices: ["6, 12", "Error, Error", " Error, 12", " 6, Error"],
    answer: 2,
  },
  {
    question:
      "The output of this Python code would be:<br>def find(x, **y):<br>print(type(y))<br>find(‘letters’,X=’1′,Y=’2′)",
    choices: ["Dictionary", "An exception is thrown", " String", "Tuple"],
    answer: 0,
  },
  {
    question: "Which one of these is NOT true about recursion?",
    choices: [
      "We can replace a recursive function by a non-recursive function",
      "The memory space taken by the recursive functions is more than that of non-recursive function",
      "Running a recursive function is faster as compared to a non-recursive function",
      " The process of recursion makes it easier for users to understand a program",
    ],
    answer: 2,
  },
  {
    question:
      "The output of this Python code would be:<br>a = [‘mn’, ‘op’]<br>print(len(list(map(list, a))))))",
    choices: ["4", "2", "Not specified", "Error"],
    answer: 3,
  },
  {
    question:
      "Which of these functions can NOT be defined under the sys module?",
    choices: ["sys.argv", "sys.readline", "sys.path", "sys.platform"],
    answer: 1,
  },
  {
    question: "Which function doesn’t accept any argument?",
    choices: ["re.compile", "re.findall", "re.match", "re.purge"],
    answer: 3,
  },
  {
    question: "In Python, the primary use of the tell() method is that:",
    choices: [
      "within the file, it tells the end position",
      "within the file, it tells the current position",
      "it tells us if the file is opened",
      "none of the above",
    ],
    answer: 2,
  },
  {
    question: "The hasattr(obj,name) is used to:",
    choices: [
      "check if any specific attribute exists",
      "set an attribute",
      "access the object’s attribute",
      "delete an attribute",
    ],
    answer: 0,
  },
  {
    question:
      "Find out the private data field among the following:<br>def init(self):<br>_m = 1<br>self.n = 1<br>self._o = 1<br>p= 1",
    choices: ["_m", "n", "_o", "p"],
    answer: 1,
  },
  {
    question: "In Python, find which one isn’t an exception handling keyword.",
    choices: ["accept", " finally", "try", "except"],
    answer: 0,
  },
  {
    question: "A queue follows _________:",
    choices: [
      "LIFO principle",
      "FIFO principle",
      "Linear tree",
      "Ordered array",
    ],
    answer: 1,
  },
  {
    question:
      "The time complexity used for inserting a node in a priority queue on the basis of key is",
    choices: ["O(n)", "O(n2)", "O(nlogn)", "O(logn)"],
    answer: 0,
  },
  {
    question: "Which of these is a postfix expression?",
    choices: ["a+b-c", "+ab", "abc*+de-+", "a*b(c+d)"],
    answer: 2,
  },
  {
    question: "Which data structure do we use for testing a palindrome?",
    choices: ["Heap", "Tree", "Priority queue", "Stack"],
    answer: 3,
  },
  {
    question:
      "Which of these will form an inversion in this given array?<br>arr = {2,8,5,3}",
    choices: [
      "(2,8)",
      "(8,5), (8,3)",
      "(2,8), (2,5), (1,3)",
      "(8,5), (8,3), (5,3)",
    ],
    answer: 3,
  },
  {
    question: "Which one isn’t the property of the XOR lists?",
    choices: ["X⊕0 = X", "X⊕X = 0", "X⊕0 = 1", "(X⊕Y)⊕Z = X⊕(Y⊕Z)"],
    answer: 2,
  },
  {
    question: "The tango tree is a type of:",
    choices: ["Binary Search Tree", "K-ary Tree", " Ternary Tree", "AVL Tree"],
    answer: 0,
  },
  {
    question: "In an AA-tree, we can remove a left horizontal link by:",
    choices: [
      "inserting a new element",
      "deleting both the elements",
      " performing left rotation",
      "performing right rotation",
    ],
    answer: 3,
  },
  {
    question:
      "We can use a self–balancing binary search tree for implementing the:",
    choices: [
      "Hash table",
      "Priority queue",
      "Heap sort and Priority queue",
      "Heap sort",
    ],
    answer: 1,
  },
  {
    question: "A splay operation refers to:",
    choices: [
      "the removal of leaf node",
      "the movement of root to leaf",
      "the movement of a node to root",
      "the movement of parent node to a child node’s down",
    ],
    answer: 2,
  },
  {
    question: " Out of these, which one is NOT true about a 2-3 tree?",
    choices: [
      "it is perfectly balanced",
      "the leaves are always at the same level",
      "it refers to a B-tree of the order 3",
      "postorder traversal would yield the elements in a sorted order",
    ],
    answer: 3,
  },
  {
    question: "How do we define the Ackermann’s function?",
    choices: [
      "for i<1, A(1,i) = i+1",
      "for i = j, A(i,j) = i+j",
      "for i>=j, A(i,j) = i+j",
      "for i>=1, A(1,i) = i+1",
    ],
    answer: 3,
  },
  {
    question:
      "A recursive implementation would presumably fail in skew heaps because:",
    choices: [
      "lack of stack space",
      "time complexity",
      "these heaps are self adjusting",
      "efficiency gets reduced",
    ],
    answer: 0,
  },
  {
    question: "Which operation can we NOT perform directly in a d-heap?",
    choices: [
      "Linear to the Length of Tree",
      "Exponential to the Length of Tree",
      "O (M!)",
      "O (log M)",
    ],
    answer: 0,
  },
  {
    question: "The time does taken for the construction of suffix tree is:",
    choices: ["create", "find", "delete", "insert"],
    answer: 1,
  },
  {
    question: "The best technique for handling collision is:",
    choices: [
      "Separate chaining",
      "Double hashing",
      "Linear probing",
      "Quadratic probing",
    ],
    answer: 3,
  },
  {
    question:
      "Which one is the most desirable out of these traits of a hash function?",
    choices: [
      "it must cause more collisions",
      "it must be easy to implement",
      "it must cause less collisions",
      "it must occupy less space",
    ],
    answer: 2,
  },
  {
    question:
      "What is the time complexity for checking if an undirected graph with E edges and V vertices is Bipartite, given its adjacency matrix?",
    choices: ["O(E)", "O(V)", "O(E*E)", "O(V*V)"],
    answer: 3,
  },
  {
    question:
      "The members of two of the sets are relatively more common when the Jaccard Index is:",
    choices: ["Closer to 0", "Closer to 1", "Farther to 1", "Closer to -1"],
    answer: 1,
  },
  {
    question:
      "The polynomial-time graph manipulation algorithms can’t implement which of these logical operations using the Binary Decision Diagrams?",
    choices: ["Tautology Checking", "Negation", "Disjunction", "Conjunction"],
    answer: 0,
  },
  {
    question:
      "____________ offers the ability to query the data and insert, alter, and delete tuples.",
    choices: [
      "Transaction Control Language (TCL)",
      "Data Control Language (DCL)",
      "Data Definition Language (DDL)",
      "Data Manipulation Language (DML)",
    ],
    answer: 3,
  },
  {
    question:
      "We can add or remove the user IDs using which of these fixed roles?",
    choices: [
      "db_setupadmin",
      "db_securityadmin",
      "db_accessadmin",
      " db_sysadmin",
    ],
    answer: 2,
  },
  {
    question: "Which symbol do we use in place of the except?",
    choices: ["~", "¬", "V", "^"],
    answer: 1,
  },
  {
    question: "What is an alternative name for a weak entity?",
    choices: ["Dominant", "Owner", "Child", "All of the above"],
    answer: 2,
  },
  {
    question: "Fifth Normal form is concerned with:",
    choices: [
      "Join dependency",
      "Domain-key",
      "Multivalued dependency",
      "Functional dependency",
    ],
    answer: 0,
  },
  {
    question:
      "The _____ system does not require a password to travel across the internet.",
    choices: ["Response", "Challenge-response", "Manipulation", "Readable"],
    answer: 1,
  },
  {
    question: "We can force a log switch by using:",
    choices: [
      "ALTER SYS LOGFILES",
      "ALTER SYSTEM SWITCH LOGS",
      "ALTER SYSTEM LOG",
      "ALTER SYSTEM SWITCH LOGFILE",
    ],
    answer: 3,
  },
  {
    question: "When recovering from a failure:",
    choices: [
      "examination of each pair of physical blocks occurs",
      "examination of a specified pair of physical blocks occurs",
      "examination of the first pair of physical blocks occurs",
      "none of the above",
    ],
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
