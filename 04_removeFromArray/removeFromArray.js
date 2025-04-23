const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) { // Goes through each argument
        for (let x = 0; x < arr.length; x++) { // Checks each element in array for argument
            if (arr[x] === arguments[i]) {
                arr.splice(x, 1)
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

