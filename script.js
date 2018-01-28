var userInput = document.querySelector('.main__input-form');
var guessBtn = document.querySelector('.main__submit-btn');
var clearBtn = document.querySelector('.main__clear-btn');
var resetBtnn = document.querySelector('.main__reset-btn');
var randomNumber =Math.floor(Math.random()* 100 +1);
console.log(randomNumber);
var yourGuessWas = document.querySelector('.main__input-guess-was');
var displayedGuess = document.querySelector('.main__display-guess');
var guessResponse = document.querySelector('.main__input-response');

guessBtn.addEventListener('click', prependGuess);
userInput.addEventListener('keyup', enableBtns);
userInput.addEventListener('keyup', disableBtns);
clearBtn.addEventListener('click', clearInput);


disableBtns();

function prependGuess(event) {
  event.preventDefault();
  console.log('event')
  yourGuessWas.innerText = 'Your Last Guess Was';
  displayedGuess.innerHTML = userInput.value;
  checkGuessCorrect();
  disableBtns();
}

// function checkGuessNan() {
//   if (parseInt(userInput.value).isInteger){
//     yourGuessWas.innerHTML = 'Your guess Must be a number'
//   }
// }

function checkGuessCorrect() {
   if (parseInt(userInput.value) === randomNumber) {
    guessResponse.innerText ='BOOM!';
  } else if 
  (parseInt(userInput.value) > randomNumber) {
    guessResponse.innerText = 'That is too high';
  } else
  guessResponse.innerText ='That is too low';
}

function disableBtns() {
  if (userInput.value === '') {
    clearBtn.setAttribute('disabled', true);
    guessBtn.setAttribute('disabled', true); 
  }
}

function clearInput(event) {
event.preventDefault();
  userInput.value = '';
  disableBtns();
}

function enableGuessBtn() {
  if(userInput.value != '') {
    guessBtn.removeAttribute('disabled');
  }
}

function enableClearBtn() {
    clearBtn.removeAttribute('disabled'); 
}

function enableBtns () {
  enableClearBtn();
  enableGuessBtn();
}

//  function clearGuess() {

//  }