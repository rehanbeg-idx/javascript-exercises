function numberChecker(number) {
  if (typeof number === "number" &&  number >= 10) {
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
