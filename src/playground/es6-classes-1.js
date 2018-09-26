// Car
// make
// model
// vin
// getDescription

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //Inject/interpolate values with backtics and template string
    return `Hi! Iam ${this.name} !`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old! `;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  //method
  hasMajor() {
    //!Logical Not operator !! convert the value to a boolean
    return !!this.major;
  }
  //! Override the parent method
  getDescription() {
    let desc = super.getDescription();

    if (this.hasMajor()) {
      desc += ` Their mayor is ${this.major}`;
    }

    return desc;
  }
}

class Traveller extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  hasHomeLocation() {
    return !!this.homelocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homelocation) {
      greeting += `Iam visiting from ${this.homelocation}`;
    } else {
      greeting += `Iam homeless😵`;
    }

    return greeting;
  }
}

const me = new Traveller('Hani Abu Zeid', 34, 'Stockholm');
console.log(me.getGreeting());

const other2 = new Traveller(undefined, undefined, 'Nowhere');
console.log(other2.getGreeting());

const other = new Traveller('Tore', 33);
console.log(other.getGreeting());
