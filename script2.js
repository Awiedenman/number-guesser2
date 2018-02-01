var resetBtnn = document.querySelector('.main__reset-btn');
var randomNumber =Math.floor(Math.random()* 100 +1);
console.log(randomNumber);
var yourGuessWas = document.querySelector('.main__your-guess-was');
var displayGuess = document.querySelector('.main__display-guess');
var guessResponse = document.querySelector('.main__input-response');

document.querySelector('.main__submit-btn').addEventListener('click', prependGuess);
document.querySelector('.main__clear-btn').addEventListener('click', clearInput);
document.querySelector('.main__input-form').addEventListener('keyup', enableBtns);
document.querySelector('.main__input-form').addEventListener('keyup', disableBtns);


disableBtns();

function prependGuess(event) {
var userInput = document.querySelector('.main__input-form').value;
  event.preventDefault();
  console.log('event')
  yourGuessWas.innerHTML = 'Your Last Guess Was';
  displayGuess.innerHTML = userInput.value;
  disableBtns();
  checkGuessCorrect();
}

function checkGuessNan(userInput) {
  consoe.log(userInput);
    if (parseInt(userInput.value) < 1) {
      document.querySelector('.main__input-response').innerText = 'Sorry, Your Guess Must be Between 1 and 100'; 
    }
  }





  // if (parseInt(userInput.value).isInteger){
  //   yourGuessWas.innerHTML = 'Your guess Must be a number'
  // }


function checkGuessCorrect(userInput) {
  if (parseInt(userInput.value) === randomNumber) {
      guessResponse.innerText ='BOOM!';             
  } else if 
      (parseInt(userInput.value) > randomNumber) {
      guessResponse.innerText = 'That is too high';
  } else
      guessResponse.innerText ='That is too low';
}

function disableBtns(userInput) {
var guessBtn = document.querySelector('.main__submit-btn');
var clearBtn = document.querySelector('.main__clear-btn');
  if(userInput === '') {
    clearBtn.setAttribute('disabled', true);
    guessBtn.setAttribute('disabled', true); 
  }
}

function clearInput(event, userInput) {
  event.preventDefault();
  userInput.value = '';
  disableBtns();
}

function enableGuessBtn(userInput) {
  if(userInput.value != '') {
    guessBtn.removeAttribute('disabled');
  }
}

function enableClearBtn(clearBtn) {
    clearBtn.removeAttribute('disabled',true); 
}

function enableBtns () {
  enableClearBtn();
  enableGuessBtn();
}

//  function clearGuess() {

//  }