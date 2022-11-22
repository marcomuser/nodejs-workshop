console.log("hello");

let variable = "this is a string";
console.log(variable);
let twoStrings = variable + " " + variable;
console.log(twoStrings);
let stringLength = variable.length;
console.log(stringLength);
let firstLetter = variable[0];
console.log(firstLetter);
let lastLetter = variable[stringLength - 1];
console.log(lastLetter);

let upperCaseVariable = variable.toLocaleUpperCase();
console.log(upperCaseVariable);
/*Mini Kata
Create a variable that always stores acronyms from 3 variables
Example
let firstWord=united
let secondWord=states
let thridWord=america
let acronym=USA 
*/

let numberVariable = 4;
let numberVariableWithDecimals = 4.5;
console.log(numberVariableWithDecimals, "this are decimals");
let negativeNumberVariable = -numberVariable;
console.log(negativeNumberVariable);

let threeTimesNumberVariable = 3 * numberVariable;
console.log(threeTimesNumberVariable);

let numberVariableDividedBy2 = numberVariable / 2;
console.log(numberVariableDividedBy2);

let numberVariableSquaredBy3 = numberVariable ** 3;
console.log(numberVariableSquaredBy3);

let plusOperationExample = numberVariable + 3;
console.log(plusOperationExample);

let minusOperationExample = numberVariable - 3;
console.log(minusOperationExample);

let moduloOfVariable = 4 % 4;
console.log(moduloOfVariable);
let moduloOfVariable2 = 4 % 3;
console.log(moduloOfVariable2);

let stringNumber = 1 + "";
console.log(typeof stringNumber, stringNumber);

let moreComplexString = `This is a variable:${numberVariable} and this is another one:${variable}`;

console.log(moreComplexString);
/* Mini Kata

Try these calculations:
350 plus 455
25 squared to 10
4055 multiplied by 5
600 divided by 5
*/

let undefinedVariable;
console.log(undefinedVariable);

let anotherString = "ABC";
console.log(anotherString[3]);

undefinedVariable = "Now is not undefined";
console.log(undefinedVariable);

let firstNullVariable = null;

//we make some calculations
let newCalculatedVariable = 49;
let number60 = 60;
firstNullVariable = newCalculatedVariable;
console.log(firstNullVariable);

if (newCalculatedVariable > 50) {
  console.log("is bigger than 50");
} else {
  console.log("is not bigger than 50");
}

let isEqualTo60 = number60 === 60;
console.log(isEqualTo60);

if (isEqualTo60) {
  console.log("is equal to 60");
}
let isEqualTo50 = number60 === 50;
console.log(isEqualTo50);

if (isEqualTo50) {
  console.log("is  equal to 50");
} else {
  console.log("is not equal to 50");
}
if (number60 < 50) {
  console.log("is smaller than 50");
} else if (number60 > 20 && number60 < 70) {
  console.log("number is between 20 and 70");
}

if (number60 === 40 || number60 > 1) {
  console.log("is either equal to 40 or bigger than 1");
}

/* Kata
Create fizzBuzz without loop?
*/
