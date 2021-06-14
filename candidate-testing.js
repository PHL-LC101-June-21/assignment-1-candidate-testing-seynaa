const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ''
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American women in space ?';
let correctAnswer = 'Sally Ride';
let candidateAnswer ;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  //const input = require('readline-sync')
  let candidateName = input.question('Enter name')
console.log('Hey,'+ candidateName)
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  console.log(question)
  let candidateAnswer = input.question('Enter answer')
  //console.log(candidateAnswer)
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
if (candidateAnswer === correctAnswer){
    console.log('Correct!')
    } else {
      console.log('Incorrect,'+' try again')
    }
//console.log(candidateAnswer)

}

function gradeQuiz(candidateAnswers) {
  //if (candidateAnswer === correctAnswer){
   // console.log(correctAnswer)
  //  } else {
  //    console.log('Incorrect,'+' try again')
   // }
//console.log(candidateAnswer)
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  
  //console.log('Hey',candidateName)
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};