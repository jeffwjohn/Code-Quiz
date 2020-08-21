var mainEl = document.querySelector("#main");
var startCard = document.querySelector("#startCard");
var questionCard = document.querySelector(".question");
var choiceButton = document.querySelector(".choice-btn");
var startButton = document.querySelector("#start");
var seconds = 60;

function startTimer() {
    var x = setInterval(function () {
        seconds--;
        document.getElementById("timer").innerHTML = "Time: " + seconds + "s ";
        if (seconds < 0) {
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
    populate()
    startTimer()
};

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    } else {
        seconds -= 10;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}

function populate() {
    if (quiz.isEnded()) {
        gameOver();
        
    } else {

        // create question 
        var questionEl = document.createElement("article");
        questionEl.className = "question";
        questionEl.innerHTML = quiz.getQuestionIndex().text;
        mainEl.appendChild(questionEl);


        // create choice buttons
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
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
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
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// Get initials and score and send to local storage
var scores = [];
var submitButton = document.querySelector("#submit");
var scoreListEl = document.querySelector("#score-list");
var scoreEl = scores[0];
var initialsInput = document.querySelector('#initials');

var gameOver = function () {

    var scoreCard = document.createElement("article");
    scoreCard.id = "score-card-id";
    scoreCard.className = "score-card";
    mainEl.appendChild(scoreCard);
    var gameOverHTML = "<h3>All done!</h3>";
    gameOverHTML += "<p id='score'> Your final score is " + quiz.score + "</p>"
    gameOverHTML += "<form><label for='initials'>Enter initials: </label><input type='text' id='initials' name='initials' /><br><button id='submit' class='button'>Submit</button></form>"
    scoreCard.innerHTML = gameOverHTML;
    scores.push(quiz.score);
    var button = document.getElementById('submit');
    button.onclick = function () {
        event.preventDefault();

        var score = quiz.score
        var initials = document.querySelector('#initials').value;

        if (initials === "") {
            alert("Initials field cannot be blank! Try again.");

        } else {
            alert("Your score has been saved. Click on 'View High Scores' to see your rank!");

            localStorage.setItem('score', score);
            localStorage.setItem('initials', initials);
        }
    }
};

var questions = [
    new Question("The condition in an if/else statement is enclosed with __________.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
    new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal/Bash", "for loops", "console.log"], "console.log"),
    new Question("String values must be enclosed within __________ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("Arrays in JavaScript can be used to store __________", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above")
];

var quiz = new Quiz(questions);

startButton.addEventListener("click", startQuiz);