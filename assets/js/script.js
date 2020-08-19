var startButton = document.querySelector("#start");
var choiceButton = document.querySelector(".button")
var quizObj = {
    question: "The condition in an if/else statement is enclosed with ____.</h2>",
    choices: []
}



var startQuiz = function (event) {
    event.preventDefault();
    var startCard = document.getElementById("#startCard");
    startCard.remove();
    createCard()

}

var createCard = function (quizObj) {
    // create question 
    var questionEl = document.createElement("article");
    questionEl.className = "question";
    questionEl.innerHTML = "<h2>The condition in an if / else statement is enclosed with ________.</h2>";
   
    // create 
    var choice1El = document.createElement("button");
    choice1El.textContent = "1. quotes";
    choice1El.id = "choice1";
    choice1El.className = "button";
    var choice2El = document.createElement("button");
    choice2El.textContent = "2. curly brackets";
    choice2El.id = "choice2";
    choice2El.className = "button";
    var choice3El = document.createElement("button");
    choice3El.textContent = "3. parentheses";
    choice3El.id = "choice3";
    choice3El.className = "button";
    var choice4El = document.createElement("button");
    choice4El.textContent = "4. square brackets";
    choice4El.id = "choice4";
    choice4El.className = "button";

    questionEl.appendChild(choice1El);
    questionEl.appendChild(choice2El);
    questionEl.appendChild(choice3El);
    questionEl.appendChild(choice4El);

    var mainEl = document.getElementById("#main");
    mainEl.appendChild(questionEl);

    console.log(mainEl);
    // console.log(choice1El)
}

var gameOver = function () {

}

var highScore = function () {

}




startButton.addEventListener("click", startQuiz);
// pageContentEl.addEventListener("click", taskButtonHandler);

// startQuiz()