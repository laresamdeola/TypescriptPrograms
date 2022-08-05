const calculate = (calc) => {
  let value = 0;
  switch (calc.action) {
    case "add":
      value = calc.firstNumber + calc.secondNumber;
      break;
    case "substract":
      value = calc.firstNumber - calc.secondNumber;
      break;
    case "divide":
      value = calc.firstNumber / calc.secondNumber;
      break;
    case "multiply":
      value = calc.firstNumber * calc.secondNumber;
      break;
  }
  return value;
};
const valueOne = {
  firstNumber: 100,
  secondNumber: 1e3,
  action: "multiply"
};
console.log(calculate(valueOne));
//# sourceMappingURL=program3.js.map
