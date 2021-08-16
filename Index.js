var readlinesync = require("readline-sync");

var score = 0;
var userName = readlinesync.question("Please add your name: ");

console.log("Welcome " + userName + ", to 'How much you know Muninder'! ");

function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {

    console.log("You are right!");
    score = score + 1;

   } else {

     console.log ("Oops! you are wrong");
   }
}

var questions = [{
  question: "Muninder's hometown? ",
  answer: "Jammu" 
}, {
  question: "Muninder's Birth month? ",
  answer: "January" 
}, {
  question: "What does Muninder like, Montains or Beach ",
  answer: "Mountains" 
},{
  question: "Is Muninder a 'Night Owl'? ",
  answer: "Yes" 
},{
  question: "Is Muninder a Potter Head? ",
  answer: "Yes" 
},{
  question: "What Does Muninder like, Momos or Pizza? ",
  answer: "Momos" 
},{
question: "Which city did Muninder completed his study from? ",
  answer: "Jammu"
}, {
question: "Latest place that Muninder visisted for vacation? ",
  answer: "Himachal"
}, {
  question: "Which product is Muninder currently working with? ",
  answer: "Microsoft Teams"
} , {
  question: "Which company is Muninder currently working with? ",
  answer: "Microsoft"
}];

for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question,currentQuestion.answer)

}

console.log("Congrats! Your score is:", score );









