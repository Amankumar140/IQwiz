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
const questions = [
  {
    question: "Which of the following is not a component of the cell membrane?",
    choices: ["Phospholipids", "Proteins", "Cholesterol", "Nucleic acids"],
    answer: 3,
  },
  {
    question: "What is the powerhouse of the cell?",
    choices: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
    answer: 1,
  },
  {
    question:
      "Which process involves the movement of water across a semipermeable membrane?",
    choices: [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Facilitated diffusion",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a purine base in DNA?",
    choices: ["Adenine", "Thymine", "Cytosine", "Uracil"],
    answer: 0,
  },
  {
    question: "What is the main function of ribosomes?",
    choices: [
      "Lipid synthesis",
      "Protein synthesis",
      "DNA replication",
      "Carbohydrate metabolism",
    ],
    answer: 1,
  },
  {
    question: "Which organelle is responsible for photosynthesis?",
    choices: ["Mitochondria", "Chloroplast", "Golgi apparatus", "Lysosome"],
    answer: 1,
  },
  {
    question: "What is the basic unit of life?",
    choices: ["Tissue", "Organ", "Cell", "Organism"],
    answer: 2,
  },
  {
    question: "Which phase of the cell cycle involves DNA replication?",
    choices: ["G1 phase", "S phase", "G2 phase", "M phase"],
    answer: 1,
  },
  {
    question: "Which of the following is not a type of RNA?",
    choices: ["mRNA", "tRNA", "rRNA", "dRNA"],
    answer: 3,
  },
  {
    question: "What is the primary pigment involved in photosynthesis?",
    choices: ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
    answer: 0,
  },
  {
    question: "Which blood group is known as the universal donor?",
    choices: ["A", "B", "AB", "O"],
    answer: 3,
  },
  {
    question: "What is the functional unit of the kidney?",
    choices: ["Neuron", "Nephron", "Alveolus", "Sarcomere"],
    answer: 1,
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    answer: 2,
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    choices: ["Insulin", "Adrenaline", "Thyroxine", "Cortisol"],
    answer: 0,
  },
  {
    question: "What is the largest organ in the human body?",
    choices: ["Liver", "Skin", "Heart", "Lungs"],
    answer: 1,
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    choices: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    answer: 1,
  },
  {
    question: "Which blood vessels carry blood away from the heart?",
    choices: ["Arteries", "Veins", "Capillaries", "Lymphatics"],
    answer: 0,
  },
  {
    question: "What is the main structural component of plant cell walls?",
    choices: ["Cellulose", "Chitin", "Glycogen", "Starch"],
    answer: 0,
  },
  {
    question: "Which process converts glucose into pyruvate?",
    choices: [
      "Glycolysis",
      "Krebs cycle",
      "Electron transport chain",
      "Photosynthesis",
    ],
    answer: 0,
  },
  {
    question: "Which enzyme breaks down starch into maltose?",
    choices: ["Amylase", "Lipase", "Protease", "Lactase"],
    answer: 0,
  },
  {
    question: "Which gas is produced during photosynthesis?",
    choices: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
    answer: 1,
  },
  {
    question: "What is the genetic material in retroviruses?",
    choices: ["DNA", "RNA", "Protein", "Lipid"],
    answer: 1,
  },
  {
    question: "Which of the following is a vestigial organ in humans?",
    choices: ["Appendix", "Liver", "Heart", "Kidney"],
    answer: 0,
  },
  {
    question: "Which process involves the fusion of gametes?",
    choices: ["Mitosis", "Meiosis", "Fertilization", "Budding"],
    answer: 2,
  },
  {
    question: "Which blood component is primarily responsible for clotting?",
    choices: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    answer: 2,
  },
  {
    question: "Which part of the plant is responsible for water absorption?",
    choices: ["Leaves", "Stems", "Roots", "Flowers"],
    answer: 2,
  },
  {
    question: "Which hormone regulates the sleep-wake cycle?",
    choices: ["Melatonin", "Serotonin", "Dopamine", "Oxytocin"],
    answer: 0,
  },
  {
    question:
      "Which structure in the cell is responsible for packaging and transporting proteins?",
    choices: ["Nucleus", "Golgi apparatus", "Ribosome", "Lysosome"],
    answer: 1,
  },
  {
    question: "Which of the following is not a type of connective tissue?",
    choices: ["Bone", "Blood", "Muscle", "Cartilage"],
    answer: 2,
  },
  {
    question:
      "Which process involves the engulfing of particles by the cell membrane?",
    choices: ["Exocytosis", "Endocytosis", "Diffusion", "Osmosis"],
    answer: 1,
  },
  {
    question:
      "Which organ is primarily responsible for detoxification in the human body?",
    choices: ["Kidney", "Liver", "Lungs", "Spleen"],
    answer: 1,
  },
  {
    question: "Which of the following is a lipid-soluble vitamin?",
    choices: ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin B6"],
    answer: 2,
  },
  {
    question:
      "Which structure in the male reproductive system stores and matures sperm?",
    choices: ["Testes", "Epididymis", "Vas deferens", "Prostate gland"],
    answer: 1,
  },
  {
    question:
      "Which of the following is a characteristic feature of prokaryotic cells?",
    choices: ["Nucleus", "Mitochondria", "Ribosomes", "Endoplasmic reticulum"],
    answer: 2,
  },
  {
    question: "What is the primary function of the large intestine?",
    choices: [
      "Nutrient absorption",
      "Water absorption",
      "Protein digestion",
      "Fat digestion",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a polysaccharide?",
    choices: ["Glucose", "Fructose", "Sucrose", "Cellulose"],
    answer: 3,
  },
  {
    question:
      "Which hormone is responsible for regulating calcium levels in the blood?",
    choices: ["Insulin", "Glucagon", "Parathyroid hormone", "Thyroxine"],
    answer: 2,
  },
  {
    question: "Which of the following is not a function of the liver?",
    choices: [
      "Detoxification",
      "Bile production",
      "Insulin secretion",
      "Protein synthesis",
    ],
    answer: 2,
  },
  {
    question:
      "Which structure in the human eye is responsible for focusing light onto the retina?",
    choices: ["Cornea", "Lens", "Iris", "Pupil"],
    answer: 1,
  },
  {
    question: "Which of the following is a function of the spleen?",
    choices: [
      "Blood filtration",
      "Insulin production",
      "Bile storage",
      "Vitamin D synthesis",
    ],
    answer: 0,
  },
  {
    question:
      "Which type of muscle tissue is found in the walls of hollow organs?",
    choices: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle",
      "Striated muscle",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is a characteristic of monocot plants?",
    choices: [
      "Taproot system",
      "Net-veined leaves",
      "Flower parts in multiples of four or five",
      "Parallel-veined leaves",
    ],
    answer: 3,
  },
  {
    question:
      "Which process involves the conversion of nitrogen gas into ammonia?",
    choices: [
      "Nitrification",
      "Denitrification",
      "Nitrogen fixation",
      "Ammonification",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is a function of the lymphatic system?",
    choices: [
      "Transporting oxygen",
      "Producing hormones",
      "Maintaining fluid balance",
      "Digesting fats",
    ],
    answer: 2,
  },
  {
    question: "Which vitamin deficiency causes scurvy?",
    choices: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 2,
  },
  {
    question:
      "Which of the following is not a component of the central nervous system?",
    choices: ["Brain", "Spinal cord", "Cranial nerves", "Peripheral nerves"],
    answer: 3,
  },
  {
    question: "Which process involves the formation of gametes?",
    choices: ["Mitosis", "Meiosis", "Fertilization", "Binary fission"],
    answer: 1,
  },
  {
    question: "Which of the following is a function of the gallbladder?",
    choices: [
      "Producing bile",
      "Storing bile",
      "Producing insulin",
      "Storing glycogen",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a characteristic of fungi?",
    choices: [
      "Autotrophic",
      "Prokaryotic",
      "Cell walls made of chitin",
      "Photosynthetic",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is not a type of symbiotic relationship?",
    choices: ["Mutualism", "Commensalism", "Parasitism", "Predation"],
    answer: 3,
  },
  {
    question: "Which of the following is a function of the pancreas?",
    choices: [
      "Producing bile",
      "Secreting insulin",
      "Storing glycogen",
      "Filtering blood",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a characteristic of angiosperms?",
    choices: ["Naked seeds", "Flowers", "Cones", "Non-vascular tissue"],
    answer: 1,
  },
  {
    question: "Which of the following is a function of the hypothalamus?",
    choices: [
      "Regulating body temperature",
      "Controlling balance and coordination",
      "Processing visual information",
      "Producing melatonin",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is not a type of connective tissue?",
    choices: ["Bone", "Blood", "Muscle", "Adipose"],
    answer: 2,
  },
  {
    question: "Which of the following is a function of the small intestine?",
    choices: [
      "Water absorption",
      "Nutrient absorption",
      "Protein digestion",
      "Bile production",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a characteristic of eukaryotic cells?",
    choices: [
      "Lack of nucleus",
      "Presence of membrane-bound organelles",
      "Circular DNA",
      "Small ribosomes",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a function of the thalamus?",
    choices: [
      "Regulating sleep-wake cycles",
      "Relaying sensory information",
      "Controlling autonomic functions",
      "Producing cerebrospinal fluid",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a characteristic of gymnosperms?",
    choices: ["Flowers", "Fruits", "Naked seeds", "Vascular tissue"],
    answer: 2,
  },
  {
    question: "Which of the following is a function of the medulla oblongata?",
    choices: [
      "Regulating heart rate",
      "Processing visual information",
      "Controlling voluntary movements",
      "Producing hormones",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a characteristic of enzymes?",
    choices: [
      "They are consumed in reactions",
      "They increase activation energy",
      "They are specific to substrates",
      "They are made of nucleic acids",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is a function of the alveoli?",
    choices: [
      "Filtering blood",
      "Exchanging gases",
      "Producing mucus",
      "Transporting oxygen",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a characteristic of viruses?",
    choices: [
      "Cellular structure",
      "Ability to reproduce independently",
      "Metabolic activity",
      "Obligate intracellular parasites",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a function of the mitochondria?",
    choices: [
      "Protein synthesis",
      "Lipid storage",
      "ATP production",
      "DNA replication",
    ],
    answer: 2,
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
