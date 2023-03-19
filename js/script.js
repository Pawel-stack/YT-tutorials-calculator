/*All elements*/

const previousNumber = document.querySelector('.previousNumber p');

const currentNumber = document.querySelector('.currentNumber');

const mathSign = document.querySelector('.mathSign'); 

const operatorsButtons = document.querySelectorAll('.operator');

const numbersButtons = document.querySelectorAll('.number');

const clearButton = document.querySelector('.clear');

const equalsButton = document.querySelector('.equals');

const calculatorHistory = document.querySelector('.history');

const historyButton = document.querySelector('.history-btn');


let result = '';

/* All function*/ 

function displayNumber(){

   if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) 
   return;
   if(this.textContent === '.' && currentNumber.innerHTML === '')
   return currentNumber.innerHTML = " " + this.textContent;

    currentNumber.innerHTML += this.textContent;

}

function operate(){


}

function showResults(){

    let a = currentNumber.innerHTML; 

    let b = previousNumber.innerHTML;

    switch(operate){
        case '+' :
        result = a + b; 
        break;
    }

}

function clear(){

    result = '';
    previousNumber.innerHTML = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function clearHistory(){

}



/*Listeners for all buttons*/ 

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

numbersButtons.forEach((button) =>{
    button.addEventListener('click', displayNumber)
});

clearButton.addEventListener('click', clear);

equalsButton.addEventListener('click', showResults);

historyButton.addEventListener('click', clearHistory); 





