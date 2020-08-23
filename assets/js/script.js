var mainEl = document.querySelector("#main");
var startCard = document.querySelector("#startCard");
var startButton = document.querySelector("#start");
var seconds = 60;

// CREATE TIMER
function startTimer() {
    var x = setInterval(function () {
        seconds--;
        document.getElementById("timer").innerHTML = "Time: " + seconds + "s ";
        if (seconds <= 0) {
            seconds = 0;
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Time Up!";
        } else if (quiz.isEnded()) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Quiz Complete!";
        };
    }, 1000)
}

// START QUIZ
var startQuiz = function (event) {
    startCard.remove();
    generate()
    startTimer()
};
// SET GAME DATA
function Game(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
// SELECT QUESTION FROM ARRAY
Game.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}
// ADJUST SCORE AND TIMER USING ANSWER CHOICE
Game.prototype.selection = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    } else {
        seconds -= 10;
    }

    this.questionIndex++;
}
// CREATE FUNCTION TO ID END OF GAME
Game.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

// SET QUESTION DATA
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
// ID AND RETURN CORRECT ANSWER 
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}
// GENERATE QUIZ QUESTION CARDS
function generate() {
    if (quiz.isEnded()) {
        gameOver();

    } else {

        // CREATE QUESTION ELEMENT
        var questionEl = document.createElement("article");
        questionEl.className = "question";
        questionEl.innerHTML = quiz.getQuestionIndex().text;
        mainEl.appendChild(questionEl);


        // CREATE CHOICE BUTTONS
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var choiceEl = document.createElement("button");
            choiceEl.id = "btn" + i;
            choiceEl.className = "button choice-btn";
            mainEl.appendChild(choiceEl);
            var spanEl = document.createElement("span");
            spanEl.id = "choice" + i;
            choiceEl.appendChild(spanEl);
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            selection("btn" + i, choices[i]);
        }
        questionNumber();
    }
};
// CAPTURE USER SELECTION
function selection(id, selection) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.selection(selection);
        // after choosing, card is erased 
        var questionEl = document.querySelector(".question");
        mainEl.removeChild(questionEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        var choiceEl = document.querySelector("button");
        mainEl.removeChild(choiceEl);
        generate();
    }
};
// DISPLAY CURRENT QUESTION NUMBER
function questionNumber() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    
};


var scores = [];
var submitButton = document.querySelector("#submit");
var scoreListEl = document.querySelector("#score-list");
var scoreEl = scores[0];



var gameOver = function () {

    if (seconds < 0) {
        seconds = 0;
    }
    var footer = document.querySelector('#progress');
    footer.innerHTML = "";
    var scoreCard = document.createElement("article");
    scoreCard.id = "score-card-id";
    scoreCard.className = "score-card";
    mainEl.appendChild(scoreCard);
    var gameOverHTML = "<h3>All done!</h3>";
    gameOverHTML += `<p id='score'> Your final score is ${quiz.score + seconds} </p>`
    gameOverHTML += "<form><label for='initials'>Enter initials: </label><input type='text' id='initials' name='initials' /><br><button id='submit' class='button'>Submit</button></form>"
    scoreCard.innerHTML = gameOverHTML;
    
    scores.push(quiz.score);
    
    var button = document.getElementById('submit');
    button.onclick = function () {
        event.preventDefault();
        saveHighscore()
        

    }
}

function saveHighscore() {
    var score = quiz.score + Math.ceil(seconds);
    // get value of input box
    var initialsInput = document.querySelector('#initials');
    var initials = initialsInput.value.trim();

    // make sure input is valid
    if (initials === "" || initials.length < 3 || initials.length > 3) {
        alert("Initials field cannot be blank and must be 3 characters long! Try again.");

    } else {
        // alert("Your score has been saved. Let's see if you made the Top 10!");
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
        // format new score object for current user
        var newScore = {
            score: score,
            initials: initials
        }
        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        location.replace("high-scores.html")
    }
}

var questions = [
    new Question("The condition in an if/else statement is enclosed with __________.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
    new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal/Bash", "for loops", "console.log"], "console.log"),
    new Question("String values must be enclosed within __________ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("Arrays in JavaScript can be used to store __________.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above")
];

var quiz = new Game(questions);

startButton.addEventListener("click", startQuiz);