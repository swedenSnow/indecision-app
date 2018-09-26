// *Arguments object - no longer bound with arrow function
// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };
//! if you need arguments obj use es5
// console.log(add(55, 1, 1001));

//* this keyword - no longer bound with arrow functions

const user = {
  name: 'Hani',
  cities: ['Stockholm', 'Södermalm', 'Casablanca'],
  //!Use es5 functions for methods to bind this == printPlacesLived: function() {
  //!  or es6 syntax for methods for objects
  printPlacesLived() {
    // console.log(this.name);
    // console.log(this.cities);
    // const that = this;
    return this.cities.map(city => this.name + ' has lived in ' + city);

    // this.cities.forEach(city => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  },
};
// user.printPlacesLived();
console.log(user.printPlacesLived());

//! Challange
const multiplier = {
  // array of numbers
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());

// const user = {
//   name: "Hani",
//   age: 34,
//   location: "",
// };
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
