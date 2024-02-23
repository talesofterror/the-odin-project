const findTheOldest = function(arr) {
  let array = []
  arr.forEach((e) => {
    if (!e.yearOfDeath){
      let deathYear = new Date().getFullYear()
      e.yearOfDeath = deathYear
    }
  })
  array = arr.toSorted( (a, b) => {
    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
  })
  return array[0]
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

// Do not edit below this line
module.exports = findTheOldest;
