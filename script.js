var userInput = document.querySelector('.main__input-form');
var minRange = document.querySelector('.form__range-minimum');
var maxRange = document.querySelector('.form__range-maximum');
var guessBtn = document.querySelector('.main__submit-btn');
var clearBtn = document.querySelector('.main__clear-btn');
var resetBtn = document.querySelector('.main__reset-btn');
var randomNumber = Math.floor(Math.random()* 100 +1);
console.log('random number', randomNumber);
var yourGuessWas = document.querySelector('.main__your-guess-was');
var displayGuess = document.querySelector('.main__display-guess');
var guessResponse = document.querySelector('.main__input-response');
var mainGuessSection = document.querySelector('.main__guess-section');
var count = 10;
var usermin, usermax;
var min = 1;
var max = 100;

guessBtn.addEventListener('click', checkNumberRange);
guessBtn.addEventListener('click', guessCount);
userInput.addEventListener('input', enableBtns);
userInput.addEventListener('input', disableBtns);
clearBtn.addEventListener('click', clearInput);
resetBtn.addEventListener('click', resetUserGuess);
minRange.addEventListener('blur', setMinRange);
maxRange.addEventListener('blur', setMaxRange);
minRange.addEventListener('keyup', clearRangeInput);
maxRange.addEventListener('keyup', clearRangeInput);

disableBtns();

function setMinRange(event) {
  // checkNewNumberRange()
  min = parseInt(minRange.value);
  console.log('min', min)
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
  console.log('randomNumber', randomNumber);
  console.log(minRange.value)
  incrementOf10()
}

function setMaxRange(event) {
  // checkNewNumberRang
  max = parseInt(maxRange.value)
  console.log('max', max)
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
  console.log('randomNumber', randomNumber)
  console.log(maxRange.value);
  incrementOf10()
}

function incrementOf10() {
  if ((max % 10 != 0 || min % 10 != 0) && min != 1) {
    document.querySelector('.form__message-range').innerText = 'Your Range Must Be In Increments of 10!';
  } else {
    document.querySelector('.form__message-range').innerText = '';
  }
}

function clearRangeInput() {
  document.querySelector('.form__message-range').innerText = '';
}

function checkNumberRange() {
  event.preventDefault();
  console.log('count', count);
  if (parseInt(userInput.value) <= max && parseInt(userInput.value) >= min) {
    console.log('user input', userInput.value)
    guessText();
    prependGuess();
  } else if (parseInt(userInput.value) > max || parseInt(userInput.value) < min) {
    prependGuess();   
    displayGuess.innerText = '?';
    guessResponse.innerText = 'Sorry, Your Guess Must be Between ' + min + ' and ' + max;
    showResetButton();
  } else {
    prependGuess();
    checkGuessNaN();
  }
} 

function guessText() {
  yourGuessWas.innerText = 'Your Last Guess Was';
  displayGuess.innerHTML = userInput.value;
}

function youWinIncrease() {
  max = max + 10;
  // maxRange.innerText = max;
  console.log('new-max',max);
  document.querySelector('.max__new-range').innerText = max;
  minRange.setAttribute('hidden',true);
}


function youWinDecrease() {
  min = (min - 10);
  // min.innerText = min - 10;
  console.log('new-min', min);
  document.querySelector('.min__new-range').innerText = min;
  maxRange.setAttribute('hidden',true);
}

function hideIncrementInstruction() {
  var hideIncrement = document.querySelector('.increment-instruction');
  hideIncrement.setAttribute('hidden', true);
}

function prependGuess(event) {
  checkGuessCorrect();
  showMainSection();
  showResetButton(); 
  clearInput();
  disableBtns();
}

function showResetButton (event) {
  resetBtn.removeAttribute('hidden');
}

function checkGuessNaN() {
  console.log(checkGuessNaN);
  event.preventDefault();
  if (isNaN(parseInt(userInput.value)) === true) {
    guessResponse.innerHTML = 'Your Guess Must Be A Number';
  }
} 


// __________________________________________________
// CHECK IF GUESS IS NOT A NUMBER

// function checkGuessNaN() {
//   if (parseInt(userInput.value).isInteger(true) { 
//     displayGuess.innerHTML = 'Your Guess Must Be A Number';
//   }
// } 

// function checkGuessNaN() {
// if (!typeof === 'number')
// if (typeof (parseInt(userInput.value)) !== 'number') {
//   displayGuess.innerHTML = 'Your Guess Must Be A Number';
//   }
// }
// ___________________________________________________

function checkGuessCorrect() {
  if (parseInt(userInput.value) === randomNumber) {
    guessResponse.innerText ='BOOM!';
    youWinIncrease();
    youWinDecrease();
    hideIncrementInstruction();
    createRandomNumber();
  } else if (parseInt(userInput.value) > randomNumber) {
    guessResponse.innerText = 'That is too high';
  } else{
    guessResponse.innerText ='That is too low';
  }
}


function disableBtns() {
  if (userInput.value === '') {
    clearBtn.setAttribute('disabled', true);
    guessBtn.setAttribute('disabled', true);
    // disableClearHover();
  }
}
// __________________________________________________
  // DISABLE THE HOVER ON THE BUTTONS

// function disableClearHover() {
//   if(clearBtn.hasAttribute('disabled',true)){
//     clearBtn.classList.remove('btn:hover'); 
//     console.log(clearBtn.classList)
//   }
// }
// _____________________________________________________

function enableGuessBtn() {
  if(userInput.value != '') {
    guessBtn.removeAttribute('disabled');
  }
}

function enableClearBtn() {
  clearBtn.removeAttribute('disabled'); 
}

function enableBtns() {
  enableClearBtn();
  enableGuessBtn();
}

function showMainSection() {
  mainGuessSection.removeAttribute('hidden');
}


function resetUserGuess(event) {
  console.log('click')
  // event.preventDefault()
  clearInput();
  mainGuessSection.setAttribute('hidden', true);
}

function clearInput(event) {
  userInput.value = '';
}

function guessCount(event) {
  count --
  document.querySelector('.counter').innerText = count;
  gameOver();
}

function gameOver () {
  if (count < 1){
    displayGuess.innerText = 'GAME OVER';
    displayGuess.style.fontSize = '250px';
  }
}

function createRandomNumber() {
   randomNumber = Math.floor(Math.random()* 100 +1);
   console.log('new Random number', randomNumber)
 }