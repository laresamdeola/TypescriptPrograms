/*
To build a simple calculator using typescript

First we need to create an interface for the calculating command i.e first number, second number
and what action to perform (add, substract, divide and multiply)

Then a function that takes this object and returns the output value. I'd use a conditional here,
preferably the switch statement.

*/

interface calculator {
  firstNumber: number,
  secondNumber: number,
  action: string
}

const calculate = (calc: calculator) => {
  let value: number = 0
  switch (calc.action) {
    case 'add':
      value = calc.firstNumber + calc.secondNumber
      break;
    case ('substract'):
      value = calc.firstNumber - calc.secondNumber
      break;
    case 'divide':
      value = calc.firstNumber / calc.secondNumber
      break;
    case 'multiply':
      value = calc.firstNumber * calc.secondNumber
      break;
  }
  return value
}

const valueOne : calculator = {
  firstNumber: 100,
  secondNumber: 1000,
  action: 'multiply'
}

console.log(calculate(valueOne))