const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function randomNumber() {
  return Math.floor(Math.random() * 26) + 1 - 1;
}

export function createArray() {
  let array = [];
  let number = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i <= number; i++) {
    array.push(ABC[randomNumber()]);
  }
  return array;
}
export function makeColumns() {
  let output = [];
  for (let i = 0; i <= 15; i++) {
    output.push(createArray());
  }
  return output;
}
