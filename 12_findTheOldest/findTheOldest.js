const findTheOldest = function(arr) {
    peopleAges = arr.map((item) => {
        if (!item.yearOfDeath) {
            const date = new Date()
            return age = date.getFullYear() - item.yearOfBirth;
        }
        
        return age = item.yearOfDeath - item.yearOfBirth;
    });
    oldestAgeIndex = peopleAges.indexOf(Math.max(...peopleAges));
    return arr[oldestAgeIndex];
}
// Do not edit below this line
module.exports = findTheOldest;
