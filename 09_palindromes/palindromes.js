const palindromes = function(string) {
    stringArray = string.split("")
    filteredString = stringArray.filter((item) => {
        return item.match(/[A-Za-z0-9]/i);
    });
    a = filteredString.reverse().join("").toLowerCase();
    b = filteredString.reverse().join("").toLowerCase();
    if (a === b) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
