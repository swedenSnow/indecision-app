var nameVar = 'Hani';
var nameVar = 'Jocke';
console.log('nameVar', nameVar);

let nameLet = 'Julie';
nameLet = 'Jen';
//* You can reassign but not create a duplicate variable.
// let nameLet = "Jen";'
//* Block scoping

let fullName = 'Hani AbuZeid';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
