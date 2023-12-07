'use strict'

// Створити функцію, яка може приймати необмежену кількість вхідних значень, та буде повертати кількість рядків, які будуть серед переданих даних. При рішенні використати стрілочні функції.


const numberOfString = (...restNumbers) => {
  let result = 0;
  for ( let i = 0 ; i < restNumbers.length ; i++) {
    typeof(restNumbers[i]) === 'string'? result++ : '';
  }
  console.log(result);
}




// const newLetter =
// Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase();
// return newLetter;


// Створити функцію просунутого калькулятора. Функція приймає спочатку знак, а потім необмежену кількість чисел, над якими буде виконана вказана операція.
// * 2 3 4


const calculatorAdvances = (sign, ...restNumbers) => {
  let result = eval(restNumbers.join(sign));
  return result;
}

// Маючи масив з числами, отримайте найбільше число серед них. При рішенні не користуватися циклами або методами перебору масиву.

const numberLargest = (...restNumbers) => {
  let result = Math.max(...restNumbers);
  return result;
}