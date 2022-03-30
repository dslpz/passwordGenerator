// Assignment code here

var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("nums", numsArray.length);

var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log("lowerCase", lowerCaseArray.length);

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log("uppercase", upperCaseArray.length);

var symbolsArray = ["!", "?", "@", "#", "$", "%", "^", "*", "(", ")"];
console.log("symbols", symbolsArray.length);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // new array created for new password
  var selectedChar = [];
  // selects password length
  var passLength = parseInt(
    prompt("How long do you want your password to be? Min 8 - Max 128")
  );
  if (passLength < 8) {
    alert("Please choose password length from 8 to 128.");
    return "";
  }
  if (passLength > 128) {
    alert("Please choose password length from 8 to 128.");
    return "";
  }

  // Confirm other password requirements
  var lowercase = confirm(
    "Do you want lower case? Yes: Ok  No: Cancel"
  );
  
  var uppercase = confirm("Do you want upper case? Yes: Ok  No: Cancel");
  
  var numeric = confirm("Do you want numbers? Yes: Ok  No: Cancel?");
  
  var specChar = confirm("Do you want special characters? Yes: Ok  No: Cancel");
  if (!uppercase && !lowercase && !specChar && !numeric) {
    alert("Please choose at least one category.");
    return("Please Try Again.");
  }
  
  console.log(passLength, lowercase, uppercase, numeric, specChar);
  let userPassword = "";
if (lowercase) {
  userPassword += lowerCaseArray [Math.floor(Math.random() * lowerCaseArray.length)] 
  selectedChar = selectedChar.concat(lowerCaseArray); 
  }
if (uppercase) {
  userPassword += upperCaseArray [Math.floor(Math.random() * upperCaseArray.length)]
  selectedChar = selectedChar.concat(upperCaseArray);
  }
if (numeric) {
  userPassword += numsArray [Math.floor(Math.random() * numsArray.length)]
  selectedChar = selectedChar.concat(numsArray);
  }
if (specChar) {
  userPassword += symbolsArray [Math.floor(Math.random() * symbolsArray.length)]
  selectedChar = selectedChar.concat(symbolsArray);
  }
  console.log("stringuserPassword", userPassword);
  //Append random password based off of user choice
  for (let i = userPassword.length; i < passLength; i++) {
    userPassword += selectedChar [ Math.floor(Math.random() * selectedChar.length)]    
  }
  console.log("stringuserPasswordAgain", userPassword);
  return userPassword;
}