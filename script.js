// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Following section is for employee to make choices for password
//User Prompts to make choices for the character types
var choiceLength=parseInt(prompt("Please enter a number between 8 to 128 for your password length "));
if(choiceLength<8||choiceLength>128)
{
  alert("Please enter a value between 8-128");
  
}
else{

var choiceLowerCase=confirm("Would you like to include 'lower case' in your password?"
+"\n Click OK if Yes or Cancel if No");

var choiceUpperCase=confirm("Would you like to include 'upper case' in your password?"
+"\n Click OK if Yes or Cancel if No");

var choiceNumeric=confirm("Would you like to include 'number' in your password?"
+"\n Click OK if Yes or Cancel if No");

var choiceSpecialCharacter=confirm("Would you like to include 'special character' in your password?"
+"\n Click OK if Yes or Cancel if No");
}

// var userInput={
// choiceLength:choiceLength,
// choiceLowerCase:choiceLowerCase,
// choiceNumeric:choiceNumeric,
// choiceUpperCase:choiceUpperCase,
// choiceSpecialCharacter:choiceSpecialCharacter,
// }


// Function to prompt user for password options
function getPasswordOptions() {


if((choiceLowerCase===false && choiceUpperCase===false && choiceNumeric===false && choiceSpecialCharacter===false))
{

alert("You need to choose OK for at lease one character type!");
return;
}
else {
  console.log(`Password length:${choiceLength}`);
  console.log(`Lowercase: ${choiceLowerCase}`);
  console.log(`Uppercase: ${choiceUpperCase}`);
  console.log(`Numeric: ${choiceNumeric}`);
  console.log(`Special Character: ${choiceSpecialCharacter}`);
}
   

}

getPasswordOptions();

// Function for getting a random element from an array for the length chosen by user
function getRandom(arr) {
  console.log(arr.length);
  var randomGen=Math.floor(Math.random()*arr.length);
  return arr[randomGen];
}

var password="";

// Function to generate password with user input
function generatePassword() {
  //Ensuring that the password generated is the length that the user input
for(var i=0; i<choiceLength;i++){
  //Ensuring the following conditions are checked as per user choices for characters

  if(choiceLowerCase===true){
     var lcRandom=getRandom(lowerCasedCharacters);
     password=password.concat(lcRandom);   
   
  } 

  if(choiceUpperCase===true){
      var ucRandom=getRandom(upperCasedCharacters);
      password=password.concat(ucRandom);
      
  }

  if(choiceNumeric===true){
      var nmRandom=getRandom(numericCharacters);
      password=password.concat(nmRandom);
     
  
  }

  if(choiceSpecialCharacter===true){
      var spRandom=getRandom(specialCharacters);
      password=password.concat(spRandom);
      
  }
} 
console.log(`Your password is ${password}`);
return password;

}

//what are these!!!!!!!
generatePassword(choiceLength);
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 

