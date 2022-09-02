const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');


// Add your code here

function chooseName(names) {
  return names[random(0, names.length - 1)]
}
 // name.length = 8 items
 // but the indexing starts at zero (0 -7, 8 values)
 // so I have to substract 1 to get the right number

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1) + min))
}

para.textContent = `Name: ${chooseName(names)}.`

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);