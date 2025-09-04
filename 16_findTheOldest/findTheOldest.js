const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    const currentYear = new Date().getFullYear();
    const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return currentAge > oldestAge ? currentPerson : oldest;
  });
};


// Do not edit below this line
module.exports = findTheOldest;
