const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

function chooseName(names) {
  return names[Math.floor((Math.random() * 8))]
}

para.textContent = `Name: ${chooseName(names)}.`

// Add your code here

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);