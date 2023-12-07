'use strict'

// Створити функцію, яка може приймати необмежену кількість вхідних значень, та буде повертати кількість рядків, які будуть серед переданих даних. При рішенні використати стрілочні функції.
const numberOfRows = (...restNumbers) => {
  return restNumbers.length;
}


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