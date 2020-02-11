// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function with prompts and confirms that guide the user for proper password criteria
function writePassword() {
  answer = prompt("What is the length of your password?");
  if (answer < 8) {
    alert("Password too short fix it!");
    writePassword()
  } else if (answer > 128) {
    alert("Password is way too shorten it!");
    writePassword()
  } else {
    lcConfirm = confirm("Do you want lowercase characters");
    if (lcConfirm) {
      ArrLc = "abcdefghijklmnopqrstuvwxyz"
    } 
    else {
      ArrLc = ""
    }
    upConfirm = confirm("Do you want uppercase characters");
    if (upConfirm) {
      ArrUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } 
    else {
      ArrUc = ""
    }
    numConfirm = confirm("Do you want numeric characters");
    if (numConfirm) {
      ArrNum = "0123456789"
    } 
    else {
      ArrNum = ""
    }
    spConfirm = confirm("Do you want special characters");
    if (spConfirm) {
      ArrSp = "!@#$%^&+=?/"
    } 
    else {
      ArrSp = ""
    }

    var password = generatePassword(ArrUc, ArrNum, ArrSp, ArrLc);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
// Click begins event that triggers the prompts/confirms
generateBtn.addEventListener("click", writePassword);



// Loop that returns random password based on the strings
function generatePassword(ArrUc, ArrNum, ArrSp, ArrLc) {
  var length = answer,
    charset = ArrUc + ArrNum + ArrLc + ArrSp,
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}   
