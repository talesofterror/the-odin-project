// Linked List: A recursive ordered list with a "next" property referencing the next item
// in the list (which is itself of the same type as object a whole). 

function linkedList01 (v) {
	return {
		value: v,
		next: null,
	}
}

let list01 = linkedList01(10)
list01.next = linkedList01(11)
list01.next.next = linkedList01(12)
list01.next.next.next = linkedList01(13)

// A linked list with a recursive depth of 4

function printValues (list, base = 0) {
	if (list.next == null) {
		return list.value + base
	}
	else {
		base += list.value
		// console.log("current value of base: " + base)
		return printValues(list.next, base)
	}
}

function countItems (list, base = 0) {
	if (list.next == null) {
		return ++base // here and below I have to prefix increment and i'm not yet sure why
	}
	else {
		// console.log(base)
		return countItems(list.next, ++base)
	}
}

// manipulating the linked list

//split
let list02 = list01.next.next // new list is assigned to the desired "next" point in the list
list01.next.next = null // the last "next" value of the last item in the original list is nulled
console.log("first list is " + countItems(list01) + " items long")
console.log("second list is " + countItems(list02) + " items long")

//join 
list01.next.next = list02

console.log("first list is now " + countItems(list01) + " items long")

// prepend
list01 = {value: 9, next: list01}
console.log("first list now has " + countItems(list01) + " items")

// remove
list01.next = list01.next.next
console.log("first list now has " + countItems(list01) + " items")

// divide and conquer: divide a problem into two or more subproblems (base and recursive cases)
// so as to more easily solve the larger problem.

// doubly linked list: when each node has pointers to the prev and next node. 
// better for manipulating
//
// the less properties the better, since the stack will keep copies of all of them