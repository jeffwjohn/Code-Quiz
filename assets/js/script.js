var startButton = document.querySelector("#start");



var startQuiz = function (event) {
    event.preventDefault();
    alert("The quiz has started!");

    createCard()

}

var createCard = function (quizObj) {
    // create question 
    var questionEl = document.createElement("div");
    questionEl.className = "question";
    questionEl.innerHTML = "<h2>The condition in an if/else statement is enclosed with ____.</h2>";
    console.log(questionEl);
    // create div to hold answer choices
    
}

var gameOver = function () {

}

var highScore = function () {

}




startButton.addEventListener("click", startQuiz);
// pageContentEl.addEventListener("click", taskButtonHandler);

// startQuiz()