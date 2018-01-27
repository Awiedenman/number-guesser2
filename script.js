var userInput = document.querySelector('.main__input-form');
var guessButton = document.querySelector('.main__submit-btn');
var clearButton = document.querySelector('.main__clear-btn');
var resetButton = document.querySelector('.main__reset-btn');
var randomNumber =Math.floor(Math.random()* 100 +1);
console.log(randomNumber);
var yourGuessWas = document.querySelector('.main__input-guess-was');
var displayedGuess = document.querySelector('.main__display-guess');
var guessResponse = document.querySelector('.main__input-response');

guessButton.addEventListener('click', prependGuess);


function disableClear() {
clearButton.setAttibute('disabled', true);
}

function prependGuess(event) {
  event.preventDefault();
  yourGuessWas.innerText = 'Your Last Guess Was';
  displayedGuess.innerHTML = userInput.value;
  checkGuessCorrect();
 }

 function checkGuessNan() {
  if (parseInt(userInput.value) = NaN){
    yourGuessWas.innerHTML = 'Your guess Must be a number'
  }
 }

 function checkGuessCorrect() {
   if (parseInt(userInput.value) === randomNumber) {
      guessResponse.innerText ='BOOM!';
    } else if 
      (parseInt(userInput.value) > randomNumber) {
      guessResponse.innerText = 'That is too high';
    } else
      guessResponse.innerText ='That is too low';
 }
    

//  function clearGuess() {

//  }