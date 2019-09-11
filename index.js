function sayHello(name, age) {
  return `Hello ${name} you have ${age} years old`;
}

const greetingDevinan = sayHello("Devinan", 20);

console.log(greetingDevinan);

/* 
    greetingDevinan 은 sayHello함수를 실행한 결과값이다 = 즉 리턴한값이다.
    만약 함수안에 console.log가 되어 있으면 성립되지 않아 undefind가 된다.
*/

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  multiple: function(a, b) {
    return a * b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const a = 5;
const b = 5;

const plus = calculator.plus(a, b);
const minus = calculator.minus(a, b);
const divide = calculator.divide(a, b);
const multiple = calculator.multiple(a, b);
const power = calculator.power(a, b);

console.log(plus);
console.log(minus);
console.log(divide);
console.log(multiple);
console.log(power);

// 실습 계산기
