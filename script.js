const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    // Add more questions here
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerText = option;
        li.addEventListener('click', () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(li);
    });
}

function checkAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = `Quiz completed! Your score is ${score}/${quizData.length}`;
    optionsElement.innerHTML = "";
    submitButton.style.display = 'none';
    resultElement.innerText = "";
}

loadQuestion();
