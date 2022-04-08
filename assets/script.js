// declaring variables
var passwordGen;
var passwordLength;

var bank = [];
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
const lowerCaseArray = lowerCase.split("");
let upperCase = "ABCDEFHJIJKLMNOPQRSTUVWXYZ"
const upperCaseArray = upperCase.split("");
let specCharacter = "!@#$%^&*"
const specCharacterArray = specCharacter.split("");
let numbCharacter = "1234567890"
const numbCharacterArray = numbCharacter.split("");


// placed prompt inside function
function promptUser(){

  passwordLength = prompt("Choose a password length between 8 - 128 characters.");
  if (passwordLength < 8, passwordLength > 128){
    alert("Please choose a number between 8 and 128");
  }
  lowerCaseBool = confirm("Would you like to use lower case characters in your password?")
  upperCaseBool = confirm("Would you like to use upper case characters?")
  specCharacterBool = confirm("Would you like to use special characters?")
  numbCharacterBool = confirm("Would you like to use numbers?")
}



function generatePassword(){
  //TODO: your code goes here
  promptUser();


  // check user's answers to prompt
  if (lowerCaseBool) {
    bank.push(...lowerCaseArray);
  } 
  if (upperCaseBool) {
    bank.push(...upperCaseArray);
  } 
  if (specCharacterBool) {
    bank.push(...specCharacterArray);
  } 
  if (numbCharacterBool) {
    bank.push(...numbCharacterArray)
  } else {
    alert("Password too weak.")
  }

  // declare empty string for generated password to sit in
  let passwordGen = "";

  // for loop to go through bank index at passwordLength
  for (let i = 0; i < passwordLength; i++) {
    // grab random index of bank
    let randomIndex = Math.floor(Math.random() * bank.length);
    //console.log(randomIndex);
    let character = bank[randomIndex];
    passwordGen += character;
  }

  console.log(passwordGen);

  return passwordGen;
}





// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// ============ASSIGNING VARIABLES
// snag the button
// password length
// var passwordLength;
// lowercase array
// uppercase array 
// numbers array 
// spec chars array
// piggybank array
// text output field
// output password

// ============PROMPTS / STORING RESPONSES
// listen to the button
// how long is the passowrd?
// passwordLength = prompt("Choose a password length between 8 and 128 characters.")
// lowercase? (if yes) store in empty piggybank array
// uppercase? (if yes) store in empty piggybank array
// spec characters? (if yes) store in empty piggybank array
//  numbers? (if yes) store in empty piggybank array

// ============GENERATING / RETURNED PASSWORD
// for loop grab random characters from piggybank array - password length (tempArray)
// for(let i = 0; i < passwordLength; i++){

// }
// join as string
// print generated password onto page
