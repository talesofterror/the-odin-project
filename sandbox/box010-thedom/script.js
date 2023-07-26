
let container = document.querySelector("#container")
// grabs the first element (the only in this case) with the name "container"
let containerHead = document.createElement("span")
containerHead.textContent = "Container"
container.insertBefore(containerHead, container.firstElementChild)
// doing container.innerHTML += "<span>" here didn't work because the html is already
// written, so it was appending the span after .controls. 

spanList = document.querySelectorAll("span")

spanList.forEach(span => {
    span.style.cssText = "display: block; background: white;"
});

let display = document.querySelector(".display")
display.textContent = "Display"

let controls = document.querySelector(".controls")
controls.textContent = "Controls"

console.dir(container.firstElementChild)
// console.dir prints the element's properties in a dropdown in the console
console.dir(display.nextElementSibling)
console.dir(controls.parentElement)

console.dir(document.querySelectorAll("div"))
// returns a NodeList in the console
// It's not an array 

console.log(Array.from(document.querySelectorAll("div")))
// this can be iterated through, a NodeList can't 
 
let nodelistToArray = Array.from(document.querySelectorAll("div"))
let nodelistArraySpread = [...nodelistToArray]
console.log(nodelistArraySpread)
console.log(nodelistToArray)
// Was trying to find out what OP meant about using the spread operator to
// create an array out of a NodeList but I don't think this is what they
// meant. Redundant, they nodelistToArray and nodelistArraySpread both return
// the same array. 

let newElement = document.createElement("div")
newElement.className = "new-element"
container.appendChild(newElement)
console.dir(document.querySelector(".new-element"))

container.appendChild(newElement)
newElement.textContent = "New Element"

let borderColor = "red"
let borderThickness = "1px"
containerHead.style.cssText += `border: ${borderThickness} ${borderColor} solid; background: #00FBC3; padding: 5px;`
container.style.cssText = `border: ${borderThickness} ${borderColor} solid; background: #00FBC3; padding: 5px;`
display.style.cssText = `border: ${borderThickness} ${borderColor} solid; background: #00CBA3; padding: 10px;`
controls.style.cssText = `border: ${borderThickness} ${borderColor} solid; background: #00AB63; padding: 15px;`
newElement.style.cssText = `border: ${borderThickness} ${borderColor} solid; background: #003B60; padding: 20px; color: white;`

for ( i = 0; i <= container.children.length-1; i++){
    container.children[i].addEventListener("mouseover", (e) => {
        e.target.style.cssText += "opacity: 0.5"
    })
    container.children[i].addEventListener("mouseout", (e) => {
        e.target.style.cssText += "opacity: 1"
        console.log(e)
    })
}
// accessing container.children[i].style.cssText from within the loop and
// the EventListener wasn't working for some reason. Access the event target
// works fine. (???)




// below is modified from https://eloquentjavascript.net/14_dom.html

let quote = document.createElement("blockquote")
let testElement = document.createElement("div")
quote.textContent = "This is a famous quote"
quote.setAttribute("id", "quote")

function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
      if (typeof child != "string") node.appendChild(child);
      else node.appendChild(document.createTextNode(child));
    }
    return node;
  }

  quote.appendChild(
    elt("footer", 
        "—",
        elt("strong", "Karl Popper"),
        ", preface to the second edition of ",
        elt("em", "The Open Society and Its Enemies"),
        ", 1950",
        elt("em", "test em")
    ));

    container.appendChild(quote)

    
