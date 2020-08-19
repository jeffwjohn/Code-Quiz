var mainEl = document.querySelector("#main");
var startCard = document.querySelector("#startCard");
var startButton = document.querySelector("#start");
//var choiceButton = document.querySelectorAll(".choice-btn");
var buttons = document.getElementsByTagName("button");
// var quizObj = {
//     question: "",
//     choices: []
// }
var question1 = "The condition in an if/else statement is enclosed with __________.";
var choices1 = ["quotes", "curly brackets", "parentheses", "square brackets"]
var question2 = "Commonly used data types DO NOT include:";
var choices2 = ["strings", "booleans", "alerts", "numbers"];
var question3 = "A very useful tool used during development and debugging for printing content to the debugger is:";
var choices3 = ["JavaScript", "Terminal/Bash", "for loops", "console.log"];
var question4 = "String values must be enclodsed within __________ when being assigned to variables.";
var choices4 = ["commas", "curly brackets", "quotes", "parentheses"];
var question5 = "Arrays in JavaScript can be used to store __________";
var choices5 = ["numbers and strings", "other arrays", "booleans", "all of the above"];


var startQuiz = function (event) {
    //var startCard = document.getElementById("#startCard");
    startCard.remove();
    createCard()


};

var createCard = function () {
    // create question 
    var questionEl = document.createElement("article");
    questionEl.className = "question";
    questionEl.innerHTML = "<h2>The condition in an if / else statement is enclosed with ________.</h2>";

    // create choices
    var choice1El = document.createElement("button");
    choice1El.textContent = "1. quotes";
    choice1El.id = "choice1";
    choice1El.className = "button choice-btn";
    var choice2El = document.createElement("button");
    choice2El.textContent = "2. curly brackets";
    choice2El.id = "choice2";
    choice2El.className = "button choice-btn";
    var choice3El = document.createElement("button");
    choice3El.textContent = "3. parentheses";
    choice3El.id = "choice3";
    choice3El.className = "button choice-btn correct";
    choice3El.name = "correct";
    var choice4El = document.createElement("button");
    choice4El.textContent = "4. square brackets";
    choice4El.id = "choice4";
    choice4El.className = "button choice-btn";

    questionEl.appendChild(choice1El);
    questionEl.appendChild(choice2El);
    questionEl.appendChild(choice3El);
    questionEl.appendChild(choice4El);


    mainEl.appendChild(questionEl);

    console.log(mainEl);
    // console.log(choice1El)
    // // choiceButton.onclick = function () {
    // //     alert("you clicked a choice");
    // };
};
// choiceButton.onclick = function () {
//     alert("you clicked a choice");
// };

var checkAnswer = function (e) {
    if (e.target.classList.contains('choice-btn') && e.target.classList.contains('correct')) {
        alert("CORRECT!");
    } else if (e.target.id === 'start') {
        alert("QUIZ BEGINS!");
    } else {
        alert("INCORRECT!");
    }
};

var gameOver = function () {

};

var highScore = function () {

};

startButton.addEventListener("click", startQuiz);

document.querySelector("#main").addEventListener('click', checkAnswer);

// choiceButton.addEventListener("click", checkAnswer);
// pageContentEl.addEventListener("click", taskButtonHandler);

//startQuiz(e)