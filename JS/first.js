console.log("This is the first JavaScript file.");
fullName = "Vineet Seth";
console.log(fullName);
age = 20;
isFollow = false;
console.log(age);
console.log(isFollow);

// let, const, var
let city = "New York"; // block scope variable and can be updated but not re-declared
city = "Los Angeles"; // updated value

const country = "USA"; // block scope variable and cannot be updated or re-declared

var profession = "Developer"; // function scope variable and can be updated and re-declared

console.log(city);
console.log(country);
console.log(profession);


// Data Types
// Primitive Data Types -> String, Number, Boolean, Null, Undefined, Symbol, BigInt
let myName = "Vineet"; // String
let score = 95.5; // Number
let isPassed = true; // Boolean
let address = null; // Null
let phone; // Undefined
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof myName);
console.log(typeof score);
console.log(typeof isPassed);
console.log(typeof address);
console.log(typeof phone);
console.log(typeof uniqueId);
console.log(typeof bigNumber);

// print data
console.log("Name: " + myName);
console.log("Score: " + score);
console.log("Passed: " + isPassed);
console.log("Address: " + address);
console.log("Phone: " + phone);
console.log("Unique ID: " + uniqueId.toString());
console.log("Big Number: " + bigNumber);

const student = { // an object
    name: "Vineet",
    age: 20,
    isEnrolled: true,
    cgpa: 9.5,
};
// to access values
console.log("Student Name: " + student.name); // dot notation
console.log("Student Age: " + student["age"]); // bracket notation
console.log("Is Enrolled: " + student.isEnrolled);
console.log("CGPA: " + student.cgpa);

// to update values
student.cgpa = 9.7;
console.log("Updated CGPA: " + student.cgpa);

// a practice question
const product = {
    title : "Ball Pen",
    rating : 4,
    price : 270,
    offer : 5,
};
console.log(product)

// second practice question
const profile = {
    username: "@vineet_seth",
    isFollowed: false,
    followers: 250,
    following: 180,
};
console.log(profile);




