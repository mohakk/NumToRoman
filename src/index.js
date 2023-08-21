let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let error = document.getElementById("error");

const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

submit.addEventListener("click", () => {
  inputToRoman(input.value);
  input.value = "";
});

function inputToRoman(num) {
  let number = parseInt(num);
  if (num.trim().length == 0) {
    error.innerHTML = "Invalid Input";
    output.innerHTML = "";
    return false;
  }

  if (number > 4999 || number < 1) {
    error.innerHTML = "Input Out of Range";
    output.innerHTML = "";
    return false;
  }

  error.innerHTML = "";
  output.innerHTML = "";

  let result = "";
  let RomanValues = Object.keys(romanObject);
  RomanValues.forEach((key) => {
    while (romanObject[key] <= number) {
      number -= romanObject[key];
      result += key;
    }
  });

  output.innerHTML = result;
}
