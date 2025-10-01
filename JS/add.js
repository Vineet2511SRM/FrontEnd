// Simple JavaScript functions for user interaction

// Function 1: Greet user with input
function askName() {
  let name = prompt("What's your name?");
  alert("Hello, " + name + "! Welcome back 🙌");
  console.log("Greeted user: " + name);
}

// Function 2: Simple calculator (addition)
function addNumbers() {
  let num1 = prompt("Enter first number:");
  let num2 = prompt("Enter second number:");

  // Convert input (string) → number
  num1 = Number(num1);
  num2 = Number(num2);

  let sum = num1 + num2;
  alert("The sum is: " + sum);
  console.log("Added numbers: " + num1 + " + " + num2 + " = " + sum);
}

// Function 3: Change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
    console.log("Background color changed to light blue");
    alert("Background color changed to light blue!");
}


