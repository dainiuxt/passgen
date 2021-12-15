const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '?', ',', '.', '/'];

const checkletters = document.querySelector("input[id=letters]");
const checkcapitals = document.querySelector("input[id=capitals]");
const checknumbers = document.querySelector("input[id=numbers]");
const checkspecial = document.querySelector("input[id=special]");
const checklength = document.querySelector("input[id=passlength]");
const kaboom = document.querySelector("#kaboom");
const result = document.querySelector(".result");

const assortment = {
  letters: letters,
};

let passwordLength = 15;

function generatePassword() {
  const symbols = Object.values(assortment);
  const myset = [].concat.apply([], symbols);
  let password = "";
  for (i = 0; i < passwordLength; i++) {
    let mychar = Math.floor(Math.random() * myset.length);
    password += myset[mychar];
  }
  result.textContent = password;
  // console.log(password);
}

kaboom.addEventListener("click", function() {
  generatePassword();
});

checklength.addEventListener('change', function() {
  passwordLength = document.querySelector("input[id=passlength]").value;
  console.log(passwordLength);
});

checkletters.addEventListener("change", function() {
  if (this.checked) { assortment.letters = letters; }
  else { delete assortment.letters; }
});

checkcapitals.addEventListener("change", function() {
  if (this.checked) { assortment.capitals = capitals; }
  else { delete assortment.capitals; }
});

checknumbers.addEventListener("change", function() {
  if (this.checked) { assortment.numbers = numbers; }
  else { delete assortment.numbers; }
});

checkspecial.addEventListener("change", function() {
  if (this.checked) { assortment.special = special; }
  else { delete assortment.special; }
});
