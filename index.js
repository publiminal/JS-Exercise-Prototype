/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood){
  const isEdible = someFood || false;
  const isFull = this.stomach.length >= 10;
  if(isEdible && !isFull){
    this.stomach.push(someFood);
    console.log(`${this.name} is eating food : is edible:${isEdible} - isFull:${isFull} / ${this.stomach.length} `)
    }else if(isEdible && isFull){
       console.log(`${this.name} is trying to eat but is full :  isFull:${isFull} - ${this.stomach.length}  `);
  }else if(!isEdible)
      console.log(`${this.name} is trying but it is not edible :  isEdible:${isEdible} - ${this.stomach.length}  `);
}
Person.prototype.poop = function (){
  this.stomach = [];
  console.log(`${this.name} is pooping.`);
}

Person.prototype.toString = function (){
   return `${this.name}, ${this.age} `;
}
let neo = new Person('Neo',20);
neo.toString();
neo.eat('1');
neo.eat('2');
neo.eat('3');
neo.eat('4');
neo.eat('5');
neo.eat('6');
neo.eat('7');
neo.eat('8');
neo.eat('9');
neo.eat('10');
neo.eat('11');
neo.eat('12');
neo.poop();





/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  Car.prototype.fill = function(gallons){
    this.tank += gallons;
  }

  Car.prototype.drive = function(distance){
    this.odometer = distance / this.tank; 
    const milesAvail = this.tank*this.milesPerGallon;
    const isOutOfFuel = this.tank >= 0;
    const canDrive = distance <= milesAvail; 
    if(!isOutOfFuel && canDrive){
      this.odometer++;
      this.tank--;
    }else if(isOutOfFuel){
      return `I ran out of fuel at ${this.odometer} ${distance} miles!`
    }
  }
}

const batMobile = new Car('BatMobile', 20);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

const bebe = new Baby('andres', 4, 'cars');

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. window / global : main context where all js code is initialized by default.
  2. Implicit : attached to an the current object of any inner property called by the dot operator.
  3. Explicit : overwrite the current object's context with another one. 
  4. New : attached to the object's instances created by the object Constructor.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}