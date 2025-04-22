const reverseString = function(word) {
    reverse = [];
    reverseWord = '';
    for (let i = 0; i < word.length; i++) {
        reverse.push(word[i])
    }
    reverse.reverse();
    while(reverse.length > 0) {
        reverseWord += reverse.shift()
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
