function square(x) {
  return x * x;
}

// console.log(square(8));
//Arrow fucntions instead

const squareArrow = x => {
  return x * x;
};

// console.log(squareArrow(7));

//* Arrow-function-expression-syntax, single line and implicit return

const squareArrow2 = x => x * x;

// console.log(squareArrow2(5));

const getFirstName = fullName => {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

//* Arrow-function-expression-syntax, single line and implicit return

const getFirstName2 = fullName => fullName.split(' ')[0];

console.log(getFirstName2('Hani AbuZeid'));
