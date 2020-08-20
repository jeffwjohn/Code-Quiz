var mainEl = document.querySelector("#main");
var startCard = document.querySelector("#startCard");
var questionCard = document.querySelector(".question");
var choiceButton = document.querySelector(".choice-btn");
var startButton = document.querySelector("#start");
// var now = new Date().getTime();

function startTimer () {
var timeLimit = new Date().getTime() + 60000;
// Set the date we're counting down to
var countDownDate = new Date(timeLimit).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = "Time: " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIME UP!";
    }
}, 1000);
}
// //var choiceButton = document.querySelectorAll(".choice-btn");
// var buttons = document.getElementsByTagName("button");
// var quizObj = {
//     question: "",
//     choices: []
// }

// var Question = function(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }

// var questions = [
//     new Question("The condition in an if/else statement is enclosed with __________.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
//     new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
//     new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal/Bash", "for loops", "console.log"], "console.log"),
//     new Question("String values must be enclodsed within __________ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
//     new Question("Arrays in JavaScript can be used to store __________", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above")
// ];

// // var createCard = function () {
// //     // create question 
// //     var questionEl = document.createElement("article");
// //     questionEl.className = "question";
// //     questionEl.innerHTML = "<h2>The condition in an if / else statement is enclosed with ________.</h2>";

// //     // create choices
// //     var choice1El = document.createElement("button");
// //     choice1El.textContent = "1. quotes";
// //     choice1El.id = "choice1";
// //     choice1El.className = "button choice-btn";
// //     var choice2El = document.createElement("button");
// //     choice2El.textContent = "2. curly brackets";
// //     choice2El.id = "choice2";
// //     choice2El.className = "button choice-btn";
// //     var choice3El = document.createElement("button");
// //     choice3El.textContent = "3. parentheses";
// //     choice3El.id = "choice3";
// //     choice3El.className = "button choice-btn correct";
// //     choice3El.name = "correct";
// //     var choice4El = document.createElement("button");
// //     choice4El.textContent = "4. square brackets";
// //     choice4El.id = "choice4";
// //     choice4El.className = "button choice-btn";

// //     questionEl.appendChild(choice1El);
// //     questionEl.appendChild(choice2El);
// //     questionEl.appendChild(choice3El);
// //     questionEl.appendChild(choice4El);


// //     mainEl.appendChild(questionEl);
// // };
// // choiceButton.onclick = function () {
// //     alert("you clicked a choice");
// // };

// var initialize = function () {
//     if (createCard.isEnded()) {
//         showScores();
//     }
//     else {
//         var element = document.getElementById("question");
//         element.innerHTML = createCard.get
//     }
// }

// var checkAnswer = function (e) {
//     if (e.target.classList.contains('choice-btn') && e.target.classList.contains('correct')) {
//         var rightEl = document.createElement("div");
//         rightEl.textContent = "Right!";
//         rightEl.className = "verify";
//         mainEl.appendChild(rightEl);
//         var nextEl = document.createElement("button");
//         nextEl.textContent = "Next";
//         nextEl.id = "next";
//         nextEl.className = "button";
//         mainEl.appendChild(nextEl);
//         console.log("RIGHT!");

//     } else if (e.target.id === 'start' || e.target.id === 'next') {
//         console.log("QUIZ BEGINS!");

//     } else {
//         var wrongEl = document.createElement("div");
//         wrongEl.textContent = "Wrong!";
//         wrongEl.className = "verify";
//         mainEl.appendChild(wrongEl);
//         console.log("WRONG!");
//     }
// };

// var gameOver = function () {

// };

// var highScore = function () {

// };

// // START QUIZ
var startQuiz = function (event) {
    //var startCard = document.getElementById("#startCard");
    startCard.remove();
    // createCard()
    populate()
    startTimer()
};

// // CREATE QUESTION CARD
// var createCard = new Card(questions);

// // SHOW QUIZ
// initialize();

// LISTENERS
// startButton.addEventListener("click", startQuiz);

//document.querySelector("#main").addEventListener('click', checkAnswer);

// choiceButton.addEventListener("click", checkAnswer);
// pageContentEl.addEventListener("click", taskButtonHandler);

//startQuiz(e)
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
        // show question
        // var element = document.getElementById("question");
        // element.innerHTML = quiz.getQuestionIndex().text;

        // create question 
        var questionEl = document.createElement("article");
        questionEl.className = "question";
        questionEl.innerHTML = quiz.getQuestionIndex().text;
        mainEl.appendChild(questionEl);


        // show options
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

var gameOver = function () {
    var scoreCard = document.createElement("article");
    scoreCard.id = "score-card-id";
    scoreCard.className = "score-card";
    mainEl.appendChild(scoreCard);
    var gameOverHTML = "<h3>All done!</h3>";
    gameOverHTML += "<p id='score'> Your final score is " + quiz.score + "</p>";
    scoreCard.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("The condition in an if/else statement is enclosed with __________.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
    new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal/Bash", "for loops", "console.log"], "console.log"),
    new Question("String values must be enclosed within __________ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("Arrays in JavaScript can be used to store __________", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
startButton.addEventListener("click", startQuiz);
//populate();