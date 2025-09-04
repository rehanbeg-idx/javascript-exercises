const fibonacci = function (numb) {
  let num;
  if (typeof numb !== "number") {
    num = parseInt(numb);
  } else num = numb;
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;

  let current = 1;
  let previous = 0;
  for (let i = 2; i <= num; i++) {
    let next = current + previous;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
