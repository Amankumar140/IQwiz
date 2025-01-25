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
      "In a PN-junction diode under reverse bias, the magnitude of the electric field is maximum at:",
    choices: [
      "The edge of the depletion region on the P-side",
      "The edge of the depletion region on the N-side",
      "The PN-junction interface",
      "The center of the P-region",
    ],
    answer: 2,
  },
  {
    question:
      "The modulation technique used in the GSM mobile communication system is:",
    choices: [
      "Frequency Modulation (FM)",
      "Phase Modulation (PM)",
      "Quadrature Amplitude Modulation (QAM)",
      "Gaussian Minimum Shift Keying (GMSK)",
    ],
    answer: 3,
  },
  {
    question:
      "In a common-emitter amplifier, the phase difference between the input and the output voltage is:",
    choices: ["0 degrees", "45 degrees", "90 degrees", "180 degrees"],
    answer: 3,
  },
  {
    question: "The Z-transform of a discrete-time signal is used to:",
    choices: [
      "Solve differential equations",
      "Analyze continuous-time systems",
      "Solve difference equations",
      "Analyze analog filters",
    ],
    answer: 3,
  },
  {
    question: "In a microprocessor, the instruction 'MOV A, B' performs:",
    choices: [
      "Moves data from register A to register B",
      "Moves data from register B to register A",
      "Exchanges data between registers A and B",
      "Clears the contents of register A",
    ],
    answer: 1,
  },
  {
    question: "The antenna used for satellite communication is typically a:",
    choices: [
      "Dipole antenna",
      "Yagi-Uda antenna",
      "Parabolic reflector antenna",
      "Loop antenna",
    ],
    answer: 2,
  },
  {
    question:
      "The Nyquist rate for a signal with a maximum frequency component of 5 kHz is:",
    choices: ["5 kHz", "10 kHz", "15 kHz", "20 kHz"],
    answer: 1,
  },
  {
    question:
      "In a J-K flip-flop, when both J and K inputs are high, the output will:",
    choices: ["Remain unchanged", "Be set to 1", "Be reset to 0", "Toggle"],
    answer: 3,
  },
  {
    question: "The primary advantage of using CMOS technology over TTL is:",
    choices: [
      "Higher power consumption",
      "Faster switching speed",
      "Lower power consumption",
      "Higher noise immunity",
    ],
    answer: 2,
  },
  {
    question: "The Fourier transform of a rectangular pulse is a:",
    choices: ["Sine wave", "Cosine wave", "Gaussian function", "Sinc function"],
    answer: 3,
  },
  {
    question:
      "In a superheterodyne receiver, the purpose of the intermediate frequency (IF) stage is to:",
    choices: [
      "Amplify the audio signal",
      "Demodulate the received signal",
      "Convert the received signal to a lower frequency for easier processing",
      "Filter out unwanted frequencies",
    ],
    answer: 2,
  },
  {
    question:
      "The characteristic impedance of a lossless transmission line is determined by:",
    choices: [
      "Resistance and inductance per unit length",
      "Capacitance and conductance per unit length",
      "Inductance and capacitance per unit length",
      "Resistance and conductance per unit length",
    ],
    answer: 2,
  },
  {
    question: "The primary function of a phase-locked loop (PLL) is to:",
    choices: [
      "Generate a stable frequency",
      "Demodulate amplitude-modulated signals",
      "Track the phase of an input signal",
      "Filter out noise from a signal",
    ],
    answer: 2,
  },
  {
    question:
      "In digital communication, the Hamming distance between two code words is defined as:",
    choices: [
      "The number of positions at which the corresponding symbols are the same",
      "The number of positions at which the corresponding symbols are different",
      "The total number of symbols in the code words",
      "The difference in the numerical values of the code words",
    ],
    answer: 1,
  },
  {
    question:
      "The primary advantage of using orthogonal frequency-division multiplexing (OFDM) is:",
    choices: [
      "Increased bandwidth efficiency",
      "Simplified receiver design",
      "Improved resistance to multipath interference",
      "Reduced transmitter power requirements",
    ],
    answer: 2,
  },
  {
    question:
      "In a 3-bit flash analog-to-digital converter (ADC), the number of comparators required is:",
    choices: ["3", "7", "8", "15"],
    answer: 1,
  },
  {
    question:
      "The primary purpose of using a guard band in frequency-division multiplexing (FDM) is to:",
    choices: [
      "Increase the data rate",
      "Reduce the bandwidth requirement",
      "Prevent interference between adjacent channels",
      "Simplify the receiver design",
    ],
    answer: 2,
  },
  {
    question: "In a microcontroller, the watchdog timer is used to:",
    choices: [
      "Generate precise time delays",
      "Reset the system in case of a software fault",
      "Provide real-time clock functionality",
      "Control peripheral devices",
    ],
    answer: 1,
  },
  {
    question:
      "The primary advantage of using a RISC (Reduced Instruction Set Computer) architecture is:",
    choices: [
      "Complex instruction set",
      "Simplified hardware design",
      "Higher power consumption",
      "Variable instruction length",
    ],
    answer: 1,
  },
  {
    question:
      "In a frequency modulation (FM) system, the modulation index is defined as the ratio of:",
    choices: [
      "Frequency deviation to modulating frequency",
      "Modulating frequency to frequency deviation",
      "Carrier frequency to modulating frequency",
      "Modulating frequency to carrier frequency",
    ],
    answer: 0,
  },
  {
    question:
      "The primary function of a voltage regulator in a power supply is to:",
    choices: [
      "Convert AC to DC",
      "Maintain a constant output voltage despite variations in input voltage and load current",
      "Filter out noise from the output voltage",
      "Provide isolation between input and output",
    ],
    answer: 1,
  },
  {
    question: "In a digital circuit, a 'race condition' occurs when:",
    choices: [
      "The output depends on the sequence of input changes",
      "The circuit operates faster than its specified speed",
      "Multiple inputs change simultaneously",
      "The circuit is subjected to high temperatures",
    ],
    answer: 0,
  },
  {
    question:
      "The primary advantage of using a differential amplifier is its ability to:",
    choices: [
      "Amplify AC signals",
      "Reject common-mode signals",
      "Operate at high frequencies",
      "Provide high gain",
    ],
    answer: 1,
  },
  {
    question:
      "In a communication system, the term 'bit error rate' (BER) refers to:",
    choices: [
      "The number of bits transmitted per second",
      "The number of bits received correctly",
      "The ratio of the number of bits received in error to the total number of bits transmitted",
      "The number of bits that can be corrected by the error correction code",
    ],
    answer: 2,
  },

  {
    question:
      "In a MOSFET, the region where the current between drain and source is independent of the drain-source voltage is called the:",
    choices: [
      "Ohmic region",
      "Cutoff region",
      "Saturation region",
      "Subthreshold region",
    ],
    answer: 2,
  },
  {
    question:
      "The primary purpose of a Schmitt trigger in a digital circuit is to:",
    choices: [
      "Amplify weak signals",
      "Convert a sinusoidal signal to a square wave",
      "Provide hysteresis to reduce noise sensitivity",
      "Act as a frequency multiplier",
    ],
    answer: 2,
  },
  {
    question:
      "In a phase modulation system, the phase deviation is proportional to the:",
    choices: [
      "Amplitude of the modulating signal",
      "Frequency of the modulating signal",
      "Amplitude of the carrier signal",
      "Frequency of the carrier signal",
    ],
    answer: 0,
  },
  {
    question:
      "The primary advantage of using a Chebyshev filter over a Butterworth filter is:",
    choices: [
      "Flat passband response",
      "Steeper roll-off rate",
      "Linear phase response",
      "Lower component count",
    ],
    answer: 1,
  },
  {
    question: "In a microprocessor, the instruction 'CMP A, B' performs:",
    choices: [
      "Compares the contents of register A with register B and sets the status flags accordingly",
      "Compares the contents of register B with register A and sets the status flags accordingly",
      "Subtracts the contents of register B from register A and stores the result in register A",
      "Adds the contents of register A and register B and stores the result in register A",
    ],
    answer: 0,
  },
  {
    question:
      "The primary function of a voltage-controlled oscillator (VCO) is to:",
    choices: [
      "Generate a frequency that is proportional to an input voltage",
      "Maintain a constant output frequency regardless of input voltage variations",
      "Convert a digital signal to an analog signal",
      "Amplify low-level signals to higher amplitudes",
    ],
    answer: 0,
  },
  {
    question:
      "In a digital communication system, the process of mapping a group of bits into a single symbol is known as:",
    choices: ["Quantization", "Modulation", "Encoding", "Symbolization"],
    answer: 1,
  },
  {
    question:
      "The primary advantage of using a Gray code in digital systems is to:",
    choices: [
      "Minimize the number of bits required to represent a number",
      "Ensure that only one bit changes state between successive codes",
      "Simplify arithmetic operations",
      "Facilitate error detection and correction",
    ],
    answer: 1,
  },
  {
    question:
      "In a transmission line, the phenomenon where the signal reflects back towards the source due to impedance mismatch is called:",
    choices: ["Refraction", "Diffraction", "Reflection", "Dispersion"],
    answer: 2,
  },
  {
    question:
      "The primary purpose of using a pre-emphasis and de-emphasis technique in FM broadcasting is to:",
    choices: [
      "Increase the bandwidth of the transmitted signal",
      "Reduce the power consumption of the transmitter",
      "Improve the signal-to-noise ratio for higher frequency audio signals",
      "Simplify the receiver design",
    ],
    answer: 2,
  },
  {
    question: "In a synchronous sequential circuit, the output depends on:",
    choices: [
      "Only the current inputs",
      "Only the current state",
      "Both the current inputs and the current state",
      "The previous inputs",
    ],
    answer: 2,
  },
  {
    question:
      "The primary function of a phase detector in a phase-locked loop (PLL) is to:",
    choices: [
      "Generate a signal proportional to the difference in phase between the input signal and the output of the voltage-controlled oscillator",
      "Filter out high-frequency noise from the input signal",
      "Maintain a constant phase difference between the input and output signals",
      "Convert the input signal frequency to a higher frequency",
    ],
    answer: 0,
  },
  {
    question:
      "In a digital system, the term 'setup time' refers to the minimum time that:",
    choices: [
      "The data input must be held stable before the clock transition",
      "The data input must be held stable after the clock transition",
      "The clock signal must be held high",
      "The clock signal must be held low",
    ],
    answer: 0,
  },
  {
    question:
      "The primary advantage of using a delta modulation system is its:",
    choices: [
      "Simplicity and ease of implementation",
      "High signal-to-noise ratio",
      "Ability to handle high-frequency signals",
      "Low bandwidth requirement",
    ],
    answer: 0,
  },
  {
    question:
      "In an amplitude modulation (AM) system, the modulation index is defined as the ratio of:",
    choices: [
      "Peak amplitude of the modulating signal to the peak amplitude of the carrier signal",
      "Frequency of the modulating signal to the frequency of the carrier signal",
      "Amplitude of the carrier signal to the amplitude of the modulating signal",
      "Bandwidth of the modulated signal to the bandwidth of the baseband signal",
    ],
    answer: 0,
  },
  {
    question:
      "The primary function of a decimator in a digital signal processing system is to:",
    choices: [
      "Increase the sampling rate of a signal",
      "Decrease the sampling rate of a signal",
      "Filter out high-frequency components from a signal",
      "Convert an analog signal to a digital signal",
    ],
    answer: 1,
  },
  {
    question:
      "In a microcontroller, the term 'interrupt latency' refers to the:",
    choices: [
      "Time taken to execute an interrupt service routine",
      "Time taken for an interrupt request to be recognized and serviced",
      "Time taken to return from an interrupt service routine to the main program",
      "Time taken to disable all interrupts",
    ],
    answer: 1,
  },
  {
    question:
      "The primary advantage of using a folded-cascode amplifier topology is its:",
    choices: [
      "High input impedance",
      "High output impedance",
      "Improved gain-bandwidth product",
      "Reduced power consumption",
    ],
    answer: 2,
  },
  {
    question: "In a communication system, the term 'jitter' refers to:",
    choices: [
      "Variation in the amplitude of a signal",
      "Variation in the frequency of a signal",
      "Variation in the phase of a signal",
      "Variation in the timing of a signal",
    ],
    answer: 3,
  },
  {
    question:
      "The primary purpose of using a guard interval in an OFDM system is to:",
    choices: [
      "Increase the data rate",
      "Reduce inter-symbol interference",
      "Simplify the receiver design",
      "Improve the signal-to-noise ratio",
    ],
    answer: 1,
  },
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
