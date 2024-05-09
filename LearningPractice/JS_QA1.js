/******************************
            What are the possible ways to create objects in JavaScript
            There are many ways to create objects in javascript as mentioned below:
        *******************************/

// 1. Object Literal
var obj1 = {
    name: "Sudheer",
    age: 34,
};
console.log(obj1);
// 2. Object Constructor
var obj2 = new Object();
console.log(obj2);
// 3. Object.create()
var obj3 = Object.create(null);
console.log(obj3);

// 5. ES6 Class
class Employee {
    constructor(name) {
        this.name = name;
    }
}
var obj4 = new Employee("Sudheer");
console.log(obj4.name);

// 5. Function constructor
function Person(name) {
    this.name = name;
    this.age = 21;
}
var obj5 = new Person("Sudheer");
console.log(obj5.name);

/******************************
    What is the difference between Call, Apply and Bind?
    The difference between Call, Apply and Bind can be explained with below examples,
*****************************/
// Call: The call() method invokes a function with a given this value and arguments provided one by one
let employee1 = { firstName: "Rohit", lastName: "Kumar" };
let employee2 = { firstName: "Rahul", lastName: "Mishra" };

function invite(greeting1, greeting2) {
    console.log(`${greeting1}`);
}

// How do you redeclare variables in a switch block without an error
let counter = 1;
switch (counter) {
    case 1:{
        let name;
        break;
    }
    case 2:{
        let name;
        break;
    }
}

// function somemethod() {
//     console.log(counter1); // undefined
//     console.log(counter2); // ReferenceError
//     var counter1 = 1;
//     let counter2 = 2;
//   }
//   somemethod();

// What is an IIFE (Immediately Invoked Function Expression)
// (function (){
//     console.log("Hello World");
// })();
// (function (){
//     console.log("Hello World");
// })()

(function () {
    var message = "IIFE";
    console.log(message);
  })();
//   console.log(message);

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri);
console.log(decoded_uri);

// What is memoization
const memorizAddition = () => {
    let cache = {};
    return (value) => {
        if(value in cache){
            console.log("Fetching from cache");
            return cache[value];
        }else{
            console.log("Calculating result");
            let result = value = 20;
            cache[value] = result;
            return result;
        }
    };
};
const addition = memorizAddition();
console.log(addition(20));
console.log(addition(20));

// What is Hoisting
// console.log(message); //output : undefined
// var message = "The variable Has been hoisted";

// var message;
// console.log(message);
// message = "The variable Has been hoisted";

message("Good morning"); //Good morning
function message(name) {
  console.log(name);
}
// What are classes in ES6
class Bike {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  display() {
    return this.model + " bike has " + this.color + " color";
  }
}
let obj = new Bike("150","Blue");
// console.log(obj.display());

// What are closures
function Welcome(name){
    let greetingInfo = function(message){
        console.log(message + " " + name);
    }
    return greetingInfo;
}
let myFunction = Welcome("John");
// myFunction("Welcome ");
// myFunction("Hello Mr.");

// Why do you need modules
// Below are the list of benefits using modules in javascript ecosystem

// Maintainability
// Reusability
// Namespacing