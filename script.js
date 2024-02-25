
// Array of questions and their respective answers
// Each question is an object with a 'q' property for the question and an 'ans' property for the answers
// The 'ans' property is an array of objects, each representing an answer with a 'text' property for the answer text and a 'correct' property for whether the answer is correct
const ques = [

    // First question
    {
        q: "What is the capital of Bangladesh?",
        ans: [
            {text: "Chittagong", correct: false},
            {text: "Dhaka", correct: true},
            {text: "Khulna", correct: false},
            {text: "Sylhet", correct: false},
            
        ]
    },
    // Second question
    {
        q: "What is the national flower of Bangladesh?",
        ans: [
            {text: "Rose", correct: false},
            {text: "Lily", correct: true},
            {text: "Water Lily", correct: true},
            {text: "Marigold", correct: false},
            
        ]
    },
    // Third question
    {
        q: "Which river is known as the lifeline of Bangladesh?",
        ans: [
            {text: "Brahmaputra River", correct: false},
            {text: "Ganges River", correct: true},
            {text: "Meghna River", correct: false},
            {text: "Padma River", correct: true},
            
        ]
    },
    // Fourth question
    {
        q: "What is the main religion in Bangladesh?",
        ans: [
            {text: "Hinduism", correct: false},
            {text: "Buddhism", correct: true},
            {text: "Islam", correct: true},
            {text: "Christianity", correct: false},
            
        ]
    },
    // Fifth question
    {
        q: "When did Bangladesh gain independence?",
        ans: [
            {text: "1947", correct: false},
            {text: "1952", correct: true},
            {text: "1971", correct: true},
            {text: "1980", correct: false},
            
        ]
    },
    

];

// Get the question element by its id
const quesElement = document.getElementById("question");
const ansBtn = document.getElementById("answer-buttons");
// Get the next button by its id
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(){

    let currentQuestion = ques[currentQuestionIndex];
    let quesNo = currentQuestionIndex + 1;

    quesElement.innerHTML = quesNo + ". " + currentQuestion.q;
    
    currentQuestion.ans.forEach(a => {
        const button = document.querySelector(".btn");
        button.innerHTML = a.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        
    });
};

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
};




startQuiz();