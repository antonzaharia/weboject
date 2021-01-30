const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function randomNumber() {
  return Math.floor(Math.random() * 26) + 1 - 1;
}

function createArray() {
  let array = [];
  let number = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i <= number; i++) {
    array.push(ABC[randomNumber()]);
  }
  return array;
}
