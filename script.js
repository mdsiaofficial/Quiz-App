"use strict";

const ques = [

    {
        q: "What is the capital of Bangladesh?",
        ans: [
            {text: "Chittagong", correct: false},
            {text: "Dhaka", correct: true},
            {text: "Khulna", correct: false},
            {text: "Sylhet", correct: false},
            
        ]
    },
    {
        q: "What is the national flower of Bangladesh?",
        ans: [
            {text: "Rose", correct: false},
            {text: "Lily", correct: true},
            {text: "Water Lily", correct: true},
            {text: "Marigold", correct: false},
            
        ]
    },
    {
        q: "Which river is known as the lifeline of Bangladesh?",
        ans: [
            {text: "Brahmaputra River", correct: false},
            {text: "Ganges River", correct: true},
            {text: "Meghna River", correct: false},
            {text: "Padma River", correct: true},
            
        ]
    },
    {
        q: "What is the main religion in Bangladesh?",
        ans: [
            {text: "Hinduism", correct: false},
            {text: "Buddhism", correct: true},
            {text: "Islam", correct: true},
            {text: "Christianity", correct: false},
            
        ]
    },
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

const quesElement = document.getElementById("ques");
const ansBtn = document.getElementById("ansBtns");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;

