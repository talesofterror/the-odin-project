const getTheTitles = function(a) {
  let titles = [] 
  a.forEach(element => {
    titles.push(element.title)
  });
  return titles
};

// Do not edit below this line
module.exports = getTheTitles;
