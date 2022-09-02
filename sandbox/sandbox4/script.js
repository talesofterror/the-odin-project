const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// function isShort(name) {
//   return name.length < 5;
// }

// let isShort = (name) => name.length < 5

// const shortNames = names.filter(isShort);

const shortNames = names.filter(name => name.length < 5)

// this one took me some time and I ended up looking up a better answer in
// discord. The final answer immediately above created a variable shortNames
// uses it to call the names.filter() function, which takes an arrow
// function variable which has a name parameter which the filter uses
// to iterate through the indexes, checking each string to see if it's 
// less exclusively less than 5 characters long. 

para.textContent = shortNames;

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);


