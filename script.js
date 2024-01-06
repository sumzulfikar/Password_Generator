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

//declaring global variables to be used in the functions
var choiceLength=0;
var choiceLowerCase=false;
var choiceUpperCase=false;
var choiceNumeric=false;
var choiceSpecialCharacter=false;

//Following section is for employee to make choices for password
//User Prompts to make choices for the character types


// Function to prompt user for password options
function getPasswordOptions() {
    choiceLength=parseInt(prompt("Please enter a number between 8 to 128 for your password length "));
   //An alert for user if they do not enter the expected length for password
    if(choiceLength<8||choiceLength>128)
    {
      alert("Please enter a value between 8-128");
      return false;
    }
    // User meets the correct length requirements and are able to chose the character combinations
    //for password generation
      choiceLowerCase=confirm("Would you like to include 'lower case' in your password?"
                              +"\n Click OK if Yes or Cancel if No");

      choiceUpperCase=confirm("Would you like to include 'upper case' in your password?"
                              +"\n Click OK if Yes or Cancel if No");

      choiceNumeric=confirm("Would you like to include 'number' in your password?"
                              +"\n Click OK if Yes or Cancel if No");

      choiceSpecialCharacter=confirm("Would you like to include 'special character' in your password?"
                              +"\n Click OK if Yes or Cancel if No");
    
    //Logging user input for password length and character choices
      console.log(`Password length:${choiceLength}`);
      console.log(`Lowercase: ${choiceLowerCase}`);
      console.log(`Uppercase: ${choiceUpperCase}`);
      console.log(`Numeric: ${choiceNumeric}`);
      console.log(`Special Character: ${choiceSpecialCharacter}`);
    
    // An alert for user if they didn't choose any character type for password generation
    if((choiceLowerCase===false && choiceUpperCase===false && choiceNumeric===false && choiceSpecialCharacter===false))
    {
      alert("You need to choose OK for at lease one character type!");
      return false;
    }
    return{
      choiceLength:choiceLength,
      choiceLowerCase:choiceLowerCase,
      choiceUpperCase:choiceUpperCase,
      choiceNumeric:choiceNumeric,
      choiceSpecialCharacter:choiceSpecialCharacter,
    };
  }

// Function for getting a random element from an array
function getRandom(arr) {
  console.log(arr.length);
  var randomGen=Math.floor(Math.random()*arr.length);
  return arr[randomGen];
}


// Function to generate password with user input

function generatePassword() {
  var passwordOption=getPasswordOptions();
  if(!passwordOption){
    return "";
  }
  var password="";

  //Ensuring the following conditions are checked as per user choices for length and characters
while (password.length<passwordOption.choiceLength) {
  if(passwordOption.choiceLowerCase){
    var lcRandom=getRandom(lowerCasedCharacters);
    password=password.concat(lcRandom);   
  } 

  if(passwordOption.choiceUpperCase){
    var ucRandom=getRandom(upperCasedCharacters);
    password=password.concat(ucRandom);
  }

  if(passwordOption.choiceNumeric){
    var nmRandom=getRandom(numericCharacters);
    password=password.concat(nmRandom);
  }

 if(passwordOption.choiceSpecialCharacter){
    var spRandom=getRandom(specialCharacters);
    password=password.concat(spRandom);
  }
}
//Trimming password to the password length chosen by user
  password=password.slice(0,passwordOption.choiceLength);
  console.log(`Your password is ${password}`);
  return password;
} 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click',writePassword);
