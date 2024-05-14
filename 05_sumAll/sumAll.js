const sumAll = function(min, max) {
    // Some Error-handling;
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    // Fix: If min > max --> switch "min" to "max" and assign a temporary "temp" to the actual "max"
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    // Initialise a variable that holds the total sum;
    let sum = 0

    // looping thru, compare the two arguments, and sum them up;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
