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
    question:
      "Which law states that the internal energy of an ideal gas is a function of temperature only?",
    choices: [
      "Zeroth law of thermodynamics",
      "First law of thermodynamics",
      "Second law of thermodynamics",
      "Joule's law",
    ],
    answer: 3,
  },
  {
    question:
      "In a simple harmonic motion, the acceleration is proportional to:",
    choices: ["Displacement", "Velocity", "Mass", "Time"],
    answer: 0,
  },
  {
    question:
      "The ratio of the actual volume of air-fuel mixture drawn into the cylinder to the swept volume is called:",
    choices: [
      "Volumetric efficiency",
      "Thermal efficiency",
      "Mechanical efficiency",
      "Relative efficiency",
    ],
    answer: 0,
  },
  {
    question: "The point of contraflexure is a point where:",
    choices: [
      "Shear force changes sign",
      "Bending moment changes sign",
      "Shear force is maximum",
      "Bending moment is maximum",
    ],
    answer: 1,
  },
  {
    question: "The efficiency of a Carnot engine depends on:",
    choices: [
      "Working substance",
      "Design of engine",
      "Temperatures of heat reservoirs",
      "Speed of engine",
    ],
    answer: 2,
  },
  {
    question:
      "In a Rankine cycle, the work output from the turbine is given by:",
    choices: [
      "Change in enthalpy between inlet and outlet",
      "Change in entropy between inlet and outlet",
      "Change in temperature between inlet and outlet",
      "Change in pressure between inlet and outlet",
    ],
    answer: 0,
  },
  {
    question:
      "The critical radius of insulation for a cylindrical pipe is given by:",
    choices: [
      "Thermal conductivity divided by convective heat transfer coefficient",
      "Convective heat transfer coefficient divided by thermal conductivity",
      "Thermal conductivity multiplied by convective heat transfer coefficient",
      "Convective heat transfer coefficient multiplied by thermal conductivity",
    ],
    answer: 0,
  },
  {
    question: "The Prandtl number is the ratio of:",
    choices: [
      "Kinematic viscosity to thermal diffusivity",
      "Thermal diffusivity to kinematic viscosity",
      "Dynamic viscosity to thermal conductivity",
      "Thermal conductivity to dynamic viscosity",
    ],
    answer: 0,
  },
  {
    question: "In a PERT chart, the critical path is the path that:",
    choices: [
      "Has the most activities",
      "Has the least activities",
      "Takes the longest time to complete",
      "Takes the shortest time to complete",
    ],
    answer: 2,
  },
  {
    question:
      "The modulus of resilience is the area under the stress-strain curve up to:",
    choices: [
      "Proportional limit",
      "Elastic limit",
      "Yield point",
      "Ultimate point",
    ],
    answer: 1,
  },
  {
    question: "The hydraulic diameter is used in calculations involving:",
    choices: [
      "Circular pipes",
      "Non-circular ducts",
      "Open channels",
      "Turbines",
    ],
    answer: 1,
  },
  {
    question:
      "The specific speed of a pump is defined as the speed of a geometrically similar pump that would deliver:",
    choices: [
      "Unit discharge at unit head",
      "Unit discharge at unit power",
      "Unit power at unit head",
      "Unit head at unit discharge",
    ],
    answer: 0,
  },
  {
    question: "The Mach number is defined as the ratio of:",
    choices: [
      "Inertial force to viscous force",
      "Inertial force to elastic force",
      "Inertial force to gravitational force",
      "Inertial force to pressure force",
    ],
    answer: 1,
  },
  {
    question: "The efficiency of a jet engine is highest at:",
    choices: [
      "Low speeds",
      "High speeds",
      "Subsonic speeds",
      "Supersonic speeds",
    ],
    answer: 1,
  },
  {
    question:
      "The Fourier number is a dimensionless number that characterizes:",
    choices: [
      "Conduction heat transfer",
      "Convection heat transfer",
      "Radiation heat transfer",
      "Mass transfer",
    ],
    answer: 0,
  },
  {
    question: "The term 'creep' in materials refers to:",
    choices: [
      "Sudden fracture under stress",
      "Time-dependent deformation under constant load",
      "Elastic deformation under load",
      "Plastic deformation under load",
    ],
    answer: 1,
  },
  {
    question: "The Reynolds number is the ratio of:",
    choices: [
      "Inertial forces to viscous forces",
      "Viscous forces to inertial forces",
      "Gravitational forces to inertial forces",
      "Inertial forces to gravitational forces",
    ],
    answer: 0,
  },
  {
    question: "The term 'enthalpy' is defined as:",
    choices: [
      "Internal energy plus the product of pressure and volume",
      "Internal energy minus the product of pressure and volume",
      "Heat added to the system",
      "Work done by the system",
    ],
    answer: 0,
  },
  {
    question: "The efficiency of an Otto cycle depends on:",
    choices: [
      "Compression ratio",
      "Expansion ratio",
      "Cut-off ratio",
      "Pressure ratio",
    ],
    answer: 0,
  },
  {
    question: "The term 'poisson's ratio' is defined as the ratio of:",
    choices: [
      "Lateral strain to longitudinal strain",
      "Longitudinal strain to lateral strain",
      "Shear strain to lateral strain",
      "Lateral strain to shear strain",
    ],
    answer: 0,
  },
  {
    question: "The term 'bulk modulus' is defined as the ratio of:",
    choices: [
      "Volumetric stress to volumetric strain",
      "Shear stress to shear strain",
      "Tensile stress to tensile strain",
      "Compressive stress to compressive strain",
    ],
    answer: 0,
  },
  {
    question: "The term 'metacentric height' is used in the study of:",
    choices: [
      "Stability of floating bodies",
      "Buoyancy of submerged bodies",
      "Pressure in fluid mechanics",
      "Flow rate in open channels",
    ],
    answer: 0,
  },
  {
    question: "The term 'specific gravity' is defined as the ratio of:",
    choices: [
      "Density of a substance to the density of water",
      "Density of a substance to the density of air",
      "Density of a substance to the density of mercury",
      "Density of a substance to the density of oil",
    ],
    answer: 0,
  },
  {
    question:
      "The term 'specific heat' is defined as the amount of heat required to raise the temperature of:",
    choices: [
      "Unit mass of a substance by one degree Celsius",
      "Unit volume of a substance by one degree Celsius",
      "Unit mass of a substance by one degree Fahrenheit",
      "Unit volume of a substance by one degree Fahrenheit",
    ],
    answer: 0,
  },
  {
    question:
      "The term 'thermal conductivity' is defined as the rate at which heat is conducted through a unit area of a material per unit:",
    choices: ["Temperature gradient", "Length", "Time", "Volume"],
    answer: 0,
  },

  {
    question:
      "In a Rankine cycle, the effect of increasing the boiler pressure is to:",
    choices: [
      "Increase the thermal efficiency",
      "Decrease the thermal efficiency",
      "Have no effect on the thermal efficiency",
      "Increase the work output",
    ],
    answer: 0,
  },
  {
    question:
      "The ratio of the actual volume of air-fuel mixture drawn into the cylinder to the swept volume of the piston is known as:",
    choices: [
      "Volumetric efficiency",
      "Thermal efficiency",
      "Mechanical efficiency",
      "Overall efficiency",
    ],
    answer: 0,
  },
  {
    question:
      "In a simple harmonic motion, the acceleration of the particle is:",
    choices: [
      "Directly proportional to the displacement and directed towards the mean position",
      "Directly proportional to the displacement and directed away from the mean position",
      "Inversely proportional to the displacement and directed towards the mean position",
      "Inversely proportional to the displacement and directed away from the mean position",
    ],
    answer: 0,
  },
  {
    question:
      "The property of a material by which it can be drawn into wires is called:",
    choices: ["Ductility", "Malleability", "Plasticity", "Elasticity"],
    answer: 0,
  },
  {
    question: "The point of contraflexure is a point where:",
    choices: [
      "Bending moment changes its sign",
      "Shear force changes its sign",
      "Deflection is maximum",
      "Slope is zero",
    ],
    answer: 0,
  },
  {
    question: "In a centrifugal pump, the cavitation can be avoided by:",
    choices: [
      "Increasing the suction pressure",
      "Decreasing the suction pressure",
      "Increasing the discharge pressure",
      "Decreasing the discharge pressure",
    ],
    answer: 0,
  },
  {
    question: "The efficiency of a Carnot engine depends upon:",
    choices: [
      "The temperature of the source and sink",
      "The pressure of the working fluid",
      "The type of working fluid",
      "The speed of the engine",
    ],
    answer: 0,
  },
  {
    question: "The ratio of lateral strain to longitudinal strain is known as:",
    choices: [
      "Poisson's ratio",
      "Modulus of elasticity",
      "Modulus of rigidity",
      "Bulk modulus",
    ],
    answer: 0,
  },
  {
    question: "In a PERT network, the critical path is the path which has the:",
    choices: [
      "Longest duration",
      "Shortest duration",
      "Maximum number of events",
      "Minimum number of events",
    ],
    answer: 0,
  },
  {
    question:
      "The process of removing material by a concentrated high-velocity stream of electrons is known as:",
    choices: [
      "Electron beam machining",
      "Electrical discharge machining",
      "Electrochemical machining",
      "Laser beam machining",
    ],
    answer: 0,
  },
  {
    question: "The main purpose of annealing is to:",
    choices: [
      "Reduce hardness and increase ductility",
      "Increase hardness and reduce ductility",
      "Refine the grain structure",
      "Relieve internal stresses",
    ],
    answer: 0,
  },
  {
    question:
      "The ratio of the inertia force to the viscous force is known as:",
    choices: [
      "Reynolds number",
      "Froude number",
      "Weber number",
      "Mach number",
    ],
    answer: 0,
  },
  {
    question: "In a gear train, the fixed gear is known as the:",
    choices: ["Sun gear", "Planet gear", "Ring gear", "Carrier"],
    answer: 0,
  },
  {
    question:
      "The process of increasing the carbon content of steel on the surface is known as:",
    choices: ["Carburizing", "Nitriding", "Cyaniding", "Tempering"],
    answer: 0,
  },
  {
    question:
      "The ratio of the actual power output of a turbine to the energy available in the water is known as:",
    choices: [
      "Hydraulic efficiency",
      "Mechanical efficiency",
      "Volumetric efficiency",
      "Overall efficiency",
    ],
    answer: 0,
  },
  {
    question: "The phenomenon of 'choking' in a nozzle occurs when:",
    choices: [
      "The mass flow rate reaches a maximum value",
      "The pressure at the exit is zero",
      "The velocity of the fluid is zero",
      "The temperature of the fluid is maximum",
    ],
    answer: 0,
  },
  {
    question:
      "The process of shaping metals by forcing them through a die is known as:",
    choices: ["Extrusion", "Forging", "Rolling", "Drawing"],
    answer: 0,
  },
  {
    question:
      "The ratio of the actual volume of air-fuel mixture drawn into the cylinder to the swept volume of the piston is known as:",
    choices: [
      "Volumetric efficiency",
      "Thermal efficiency",
      "Mechanical efficiency",
      "Overall efficiency",
    ],
    answer: 0,
  },
  {
    question: "The point of contraflexure is a point where:",
    choices: [
      "Bending moment changes its sign",
      "Shear force changes its sign",
      "Deflection is maximum",
      "Slope is zero",
    ],
    answer: 0,
  },
  {
    question:
      "The property of a material by which it can be drawn into wires is called:",
    choices: ["Ductility", "Malleability", "Plasticity", "Elasticity"],
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
