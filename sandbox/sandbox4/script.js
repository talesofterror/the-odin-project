// usestrict;

let test = (num) => num

function checkAge(age) {
    if (age > 18) {
        return true
    } else {
        return confirm("Did your parents allow you?")
    }
}

let checkAge1 = (age) => {
    age > 18 ? true : confirm("Did your parents allow you?")
}

let checkAge2 = (age) => age > 18 || confirm("Did your parents allow you?")


let pow = (x, n) => {
    let result = x
    for (i = 0; i < n; i++) {
            result *= x
        }
    return result;     
}

// function ask(question, yes, no){
//     if (confirm(question)) yes()
//     else no()
// }

// ask("Confirm choice?",
//     function() {alert("confirmed")},
//     function() {alert("denied")}
// )

let sum = (a, b) => a + b



let ask = (question, yes, no) => 
    confirm(question) ? yes() 
    : no()

ask("confirm choice?",
() => alert("confirmed."),
() => alert("denied.")
)





/* 
pow(3, 2)
it takes a number in, x. assigns result to the original value of x, say 3 
first iteration, i is 1. if i is less than 2, increment i by 1 
i = 1
    result = 3
    3 * 3 = 9
    i = 2
i = 2
    exit
    return result 9

WHAT I WAS DOING: 
i = 0 
    result = 3
    3 * 3 = 9
    i = 1
i = 1
    result = 9 
    9 * 3 = 27
    i = 2
i = 2
    exit 
    return result 27

*/
