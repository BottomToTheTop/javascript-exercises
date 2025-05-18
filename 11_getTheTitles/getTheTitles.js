const getTheTitles = function(books) {
    return books.reduce((accumulator, element) =>  {
        accumulator[accumulator.length] = element.title;
        return accumulator;
    }, []);
}

// Do not edit below this line
module.exports = getTheTitles;
