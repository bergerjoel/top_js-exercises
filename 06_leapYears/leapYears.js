const leapYears = function (year) {
  // Some Error-handling;
  if (!Number.isInteger(year)) return "ERROR";

  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// Or, more simply:
// const leapYears = function (year) {
//     return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
//   };

// Do not edit below this line
module.exports = leapYears;
