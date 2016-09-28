//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

// function doSomethingCool() {
//   console.log("Something Cool!");
// }

// Put your answer below -------------------------

var doSomethingCool = function(){
  console.log("Something Cool!");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

// function sayHi() {
//   alert("Hello, World!");
// }
//
// setTimeout(sayHi, 2000);

// Put your answer below -------------------------

setTimeout(function(){
  alert("Hello, World!");
}, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

// var letter = "x";
//
// setTimeout(function(){
//   letter = "y";
//   console.log("The letter is", letter);
// }, 1);
//
// letter = "z";
// console.log("The letter is", letter);

// Put your answer below -------------------------

/*C: "x" will not appear because there is no point in
 * the code that commands the console to log "x",
 * and "z" will appear before "y" because the code
 * tells the interpreter to wait one millisecond
 * before logging "y", whereas "z" has no such
 * time restriction.*/

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

// var reverseStr = function(str) {
//   var arr;
//   arr = str.split("");
//   arr = arr.reverse();
//   str = arr.join("");
//   return str;
// };

// Put your answer below -------------------------

var reverseStr = function(str) {
  return str.split("").reverse().join("");
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the Spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

// var spanishColor = function(colorName) {
//   if (colorName.toLowerCase() === "rojo") {
//     return "#ff0000";
//   }
//   else if (colorName.toLowerCase() === "blanco") {
//     return "#ffffff";
//   }
//   else if (colorName.toLowerCase() === "azul") {
//     return "#0000ff";
//   }
//   else if (colorName.toLowerCase() === "verde") {
//     return "#00ff00";
//   }
//   else if (colorName.toLowerCase() === "negro") {
//     return "#000000";
//   }
// };

// Put your answer below -------------------------

var coloresEnEspanol = {
  rojo: "#FF0000",
  blanco: "#FFFFFF",
  azul: "#0000FF",
  verde: "#00FF00",
  negro: "#000000"
};

function spanishFunction(colorName){
  var hexCode = coloresEnEspanol[colorName.toLowerCase()];
  return hexCode;
};

// function alpha(colorName) {
//   colorName.toLowerCase() === spanishColor;
//   return something;
// }

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

// var foo = "bar";

// Put your answer below -------------------------

var foo;
foo = "bar";

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. -UPDATED-QUESTION---------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  for(var i = 0; i < 10; i++){
    callback();
  }
};

// Put your answer below -------------------------

function callNTimes(callback, n) {
  for(var i = 0; i < n; i++){
    callback();
  }
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

// var score = 0;
//
// var increaseScore = function() {
//   score++;
// };
//
// var decreaseScore = function() {
//   score--;
// };

// Put your answer below -------------------------

(function(){
  var score = 0;

  var increaseScore = function() {
    score++;
  };

  var decreaseScore = function() {
    score--;
  };
}());

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

// var addNumbers = function(numberA, numberB) {
//   console.log(numberA + numberB);
// };
//
// var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------

var twoPlusTwo = addNumbers(2,2);

function addNumbers(numberA, numberB) {
  console.log(numberA + numberB);
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

// var speed = 0;
//
// var accelerate = function(amount) {
//   speed += amount;
// };

// Put your answer below -------------------------

/*The speed would be set to NaN above because +=
 * sets speed's value to speed + amount. Thus, if
 * amount is not given an integer value, the value
 * of speed becomes defined as 0 + [undefined]. And
 * since [undefined] is not a number, it cannot be
 * added to 0 to create an integer value for speed
 * (i.e. NaN).*/

var speed = 0;

function accelerate(amount) {
  if (amount >= 1){
    speed += amount;
  }
  else {
    speed = 1;
  }
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many milliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------



// -----------------------------------------------

//////////////////////////////////////////////////
