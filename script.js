



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
            {text: "Lily", correct: false},
            {text: "Water Lily", correct: true},
            {text: "Marigold", correct: false},
            
        ]
    },
    // Third question
    {
        q: "Which river is known as the lifeline of Bangladesh?",
        ans: [
            {text: "Brahmaputra River", correct: false},
            {text: "Ganges River", correct: false},
            {text: "Meghna River", correct: false},
            {text: "Padma River", correct: true},
            
        ]
    },
    // Fourth question
    {
        q: "What is the main religion in Bangladesh?",
        ans: [
            {text: "Hinduism", correct: false},
            {text: "Buddhism", correct: false},
            {text: "Islam", correct: true},
            {text: "Christianity", correct: false},
            
        ]
    },
    // Fifth question
    {
        q: "When did Bangladesh gain independence?",
        ans: [
            {text: "1947", correct: false},
            {text: "1952", correct: false},
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

// The showQuestion function is used to display the current question and its corresponding answer options.
// It first gets the current question from the 'ques' array using the 'currentQuestionIndex'.
// It then sets the 'quesElement' innerHTML to the current question number and the question text.
// It then iterates over the answer options of the current question and creates a button for each option.
// The button text is set to the answer option text and a class of 'btn' is added to each button.
// If the answer option is correct, a 'correct' dataset is added to the button.
// An event listener is added to each button, which calls the 'selectAns' function when the button is clicked.



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){

    resetState();
    let currentQuestion = ques[currentQuestionIndex];
    let quesNo = currentQuestionIndex + 1;

    quesElement.innerHTML = quesNo + ". " + currentQuestion.q;
    
    currentQuestion.ans.forEach(a => {
        const button = document.createElement("button");
        button.innerHTML = a.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);

        if(a.correct){
            button.dataset.correct = a.correct;
        }
        button.addEventListener("click", selectAns);
        
    });
};

function resetState(){
    nextBtn.style.display = "none";

    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
};

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }

    Array.from(ansBtn.children).forEach(button => {

        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });

    nextBtn.style.display = "block";

};

function showScore(){

    resetState();
    quesElement.innerHTML= `You scored ${score} out of ${ques.length}!`;

    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";

};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<ques.length){
        showQuestion();
    }else{
        showScore();
    }
};


nextBtn.addEventListener("click", function(){
    if(currentQuestionIndex<ques.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();