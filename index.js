const passwordBox = document.getElementById("password");
const length = 12;

const uppperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%^&*(){}?></.,";

const allChars = uppperCase + lowerCase + number + symbol;

function createPassword() {
  let psswrd = "";
  psswrd += uppperCase[Math.floor(Math.random() * uppperCase.length)];
  psswrd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  psswrd += number[Math.floor(Math.random() * number.length)];
  psswrd += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > psswrd.length) {
    psswrd += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value=psswrd;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
