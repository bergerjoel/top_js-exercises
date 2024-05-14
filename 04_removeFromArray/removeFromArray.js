// const removeFromArray = function(array, ...args) {
//     // New empty array
//     const newArray = [];

//     // use forEach to go through the array
//     array.forEach((item) => {
//         // push every element into the new array UNLESS it is included in the function arguments;
//     if (!args.includes(item)) {
//         newArray.push(item);
//     }
// });

// return newArray;
// };

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;