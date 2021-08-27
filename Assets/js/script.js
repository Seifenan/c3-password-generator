// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
var randomLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomNum = ["0","1","2","3","4","5","6","7","8","9"];

var randomSpChar = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function setPassLength(passLength) {
  if (isNaN(passLength)) {
    alert("Please enter a Number!");
    return false;
  } else if (parseInt(passLength) < 8 ) {
    alert("Please make sure your password is between 8 to 128 Characters")
    return false;
  } else if (parseInt(passLength) > 128 ) {
    alert("Please make sure your password is between 8 to 128 Characters")
    return false;
  } 
  return true;
}

function generatePassword() {
  
  var passLength = prompt("How many Characters would you like your Password to Include?");

  var valid = setPassLength(passLength);
  if (valid) {
    var selUpper = confirm("Would you like to include Uppercase Alphabets in your Password?");

    var selLower = confirm("Would you like to include Lowercase Alphabets in your Password?");
  
    var selNum = confirm("Would you like to include Numbers in your Password?");
  
    var selSpChar = confirm("Would you like to include Special Characters in your Password?");
  }

  var userSel = [];

  var userOutput = [];
  if (selUpper) {
    userSel = userSel.concat(randomUpper);
    userOutput.push (randomUpper[Math.floor(Math.random() * randomUpper.length)]);
  }
  if (selLower) {
    userSel = userSel.concat(randomLower);
    userOutput.push (randomLower[Math.floor(Math.random() * randomLower.length)]);
  }
  if (selNum) {
    userSel = userSel.concat(randomNum);
    userOutput.push (randomNum[Math.floor(Math.random() * randomNum.length)]);
  }
  if (selSpChar) {
    userSel = userSel.concat(randomSpChar);
    userOutput.push (randomSpChar[Math.floor(Math.random() * randomSpChar.length)]);
  }
  
  var sysOutput = [];
  for (var i = 0; i < passLength; i++) {

    var Character = Math.floor(Math.random() * userSel.length);
    sysOutput.push(userSel[Character]);
  }
  return sysOutput.join("");
}

function writePassword() {
  
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);