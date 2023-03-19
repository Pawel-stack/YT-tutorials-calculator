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

    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return;
    } else if (currentNumber.innerHTML === ''){
        return;
    }

    if(mathSign.innerHTML !== ''){
        showResults();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent; 
    currentNumber.innerHTML = '';

}

function showResults(){

    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '');

    let a = Number(currentNumber.innerHTML); 

    let b = Number(previousNumber.innerHTML);

    let operator = mathSign.innerHTML;

    switch(operator){
        case '+' :
        result = a + b; 
        break;
        case '-' :
        result = b - a;
        break; 
        case '*' :
        result = a * b;
        break;
        case ':' :
        result = b / a; 
        break;
        case '2^' :
        result = b ** a; 
        break;
    }

    addToHistoryPanel();

    currentNumber.innerHTML = result; 
    previousNumber.innerHTML = '';
    mathSign.innerHTML = ''; 

}

function clear(){

    result = '';
    previousNumber.innerHTML = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function addToHistoryPanel(){

    historyItem = document.createElement('li');
    historyItem.innerHTML = `${currentNumber.innerHTML} ${mathSign.innerHTML} ${previousNumber.innerHTML} = ${result}`
    historyItem.classList.add('history');
    calculatorHistory.appendChild(historyItem);
    historyButton.classList.add('active');
}

function clearHistory(){
    calculatorHistory.innerHTML = '';
    if(calculatorHistory.textContent == ''){
        historyButton.classList.remove('active');
    }

}

function clearScreen(){
    result = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
    previousNumber.innerHTML = '';
}



/*Listeners for all buttons*/ 

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

numbersButtons.forEach((button) =>{
    button.addEventListener('click', displayNumber)
});

clearButton.addEventListener('click', clear);

equalsButton.addEventListener('click', showResults);

historyButton.addEventListener('click', clearHistory); 





