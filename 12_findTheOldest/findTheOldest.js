const findTheOldest = function(people) {
    return people.reduce((person, currentPerson) => {
        let older = (
            (('yearOfDeath' in person ? person.yearOfDeath : 2025) - person.yearOfBirth) 
            - (('yearOfDeath' in currentPerson ? currentPerson.yearOfDeath : 2025) - currentPerson.yearOfBirth)
        );

        console.log(person, currentPerson, older);
        return older >= 0 ? person : currentPerson;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
