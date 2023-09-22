const questions = [
    {
        question: "What is the real name of the character known as 'Saul Goodman'?",
        answers: [
            { text: "Jimmy McGill", correct: true },
            { text: "Walter White", correct: false },
            { text: "Mike Ehrmantraut", correct: false },
            { text: "Gus Fring", correct: false }
        ]
    },
    {
        question: "Where does most of 'Better Call Saul' take place?",
        answers: [
            { text: "Albuquerque, New Mexico", correct: true },
            { text: "Los Angeles, California", correct: false },
            { text: "Chicago, Illinois", correct: false },
            { text: "Las Vegas, Nevada", correct: false }
        ]
    },
    {
        question: "What is the name of the law firm where Jimmy McGill works?",
        answers: [
            { text: "Hamlin, Hamlin & McGill", correct: true },
            { text: "McGill & Associates", correct: false },
            { text: "Goodman & Co.", correct: false },
            { text: "Saul & Partners", correct: false }
        ]
    },
    {
        question: "Who is Mike Ehrmantraut's granddaughter?",
        answers: [
            { text: "Kaylee", correct: true },
            { text: "Lily", correct: false },
            { text: "Emily", correct: false },
            { text: "Sophie", correct: false }
        ]
    },
    {
        question: "What is the alias used by Gustavo Fring in the show?",
        answers: [
            { text: "The Chicken Man", correct: true },
            { text: "The Cartel Kingpin", correct: false },
            { text: "The Heisenberg", correct: false },
            { text: "The Blue Sky Lord", correct: false }
        ]
    },
    // Add more questions following the same format
];


const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetState(); // Call resetState() here to clear previous answer buttons.
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerHTML = questionNo + ". " + currentQuestion.question;

    // Change the Answer Buttons As Well
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); 
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
       
    });

    // Show the "Next" button after setting up the question.
    nextButton.style.display = "block";
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedButton =  e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
    }else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === true){
            button.classList.add("correct");
        }
        button.disable = true;
    });
    nextButton.style.display = "block";
}
startQuiz();

// ...
