export function makeListItem(data, next = null) {
  return {
    data: data,
    next: next
  }
}

export function list(head = null, tail = null) {
  return {
    head: head,
    tail: tail ? tail : head,
    append: function (data) {
			let newNode = makeListItem(data)
			if (this.head == null && this.tail == null) {
				this.head = newNode
				this.tail = newNode
			}
			else {
				this.tail.next = newNode
				this.tail = this.tail.next
			}
		},
    prepend: function (data) {
      let newNode = makeListItem(data, this.head)
      this.head = newNode
			if (this.tail == null) this.tail = newNode
    },
    size: function (node = this.head, tally = 0) {
			if (node == null) return 0
      if (node.next == null) {
        return ++tally
      }
      else {
        return this.size(node.next, ++tally)
      }
    },
    headValue: function () { return this.head.data },
    tailValue: function () { return this.tail.data },
    at: function (index, node = this.head, tally = 0) {
      if (tally == index) {
        return node.data
      }
      else if (node.next != null) {
        return this.at(index, node.next, ++tally)
      }
      else {
        return "not found"
      }
    },
		pop: function () {
			let poppedValue = this.head.data
			this.head = this.head.next
			return poppedValue
		},
		contains: function (value, node = this.head) {
			if (node.data == value) {
				return true
			}
			else if (node.next != null) {
				return this.contains(value, node.next)
			}
			else {
				return false
			}
		},
		findIndex: function (value, node = this.head, tally = 0) {
			if (node.data == value) {
				return tally
			}
			else if (node.next != null) {
				return this.findIndex(value, node.next, ++tally)
			}
			else {
				return -1
			}
		},
		toString: function (node = this.head, string = '') {
			if (this.size() == 0) return string
			else if (node.next != null) {
				return this.toString(node.next, string + `( ${node.data} ) -> `)
			}
			else { return ` ${string}( ${node.data} ) -> null` }
		},
		insertAt: function (index, ...values) {
			let tempList = list()
			for (let value of values) {
				tempList.append(value)
			}
			function traverse(idx, node, list, i = 0) {
				if (i == idx) {
					tempList.tail.next = node.next
					node.next = tempList.head
					if (idx == 0) {	list.head = tempList.head	}
					if (idx == list.size()-1) { list.tail = tempList.tail }
				}
				else if (node.next != null) { return traverse(idx, node.next, list, ++i) }
				else { throw new Error("RangeError") }
			}
			traverse(index, this.head, this)
		},
		removeAt (index, node = this.head, list = this, tally = 0) {
			let isSizeOne = list.size() - 1 == 1
			if (index == 0) {
				list.head = node.next
				if (isSizeOne) list.tail = node.next
			}
			else if (index != 0 && tally == index-1) {
				if (index == list.size()-1) { 
					list.tail = node 
					node.next = null
				}
				else {
					node.next = node.next.next
				}
				if (isSizeOne) list.tail = node.next
			}
			else if (node.next != null) {
				return this.removeAt(index, node.next, list, ++tally)
			}
			else {
				throw new Error("RangeError")
			}
		}
	}
}

// [0] [1] [2] [3]

//
// let list00 = list(makeListItem("first item"))
// console.log(list00)
// console.log(list00.head)
// console.log(list00.head.data)
// console.log(list00.tail)
//
// list00.append("second item")
// console.log(list00.tail)
// list00.append("third item")
// console.log(list00.tail)
// list00.prepend("prepended first item")
// console.log(list00.head)
// console.log("list00 size: " + list00.size())
// console.log("list00 head value: " + list00.headValue())
// console.log("list00 tail value: " + list00.tailValue())
// console.log("list00[2].data: " + list00.at(2))
// console.log("list00[0].data: " + list00.at(0))
// list00.pop()
// console.log("new list00 head after pop(): " + list00.head.data)
// console.log("list00 contains a node with value 'first item'?: " + list00.contains("first item"))
// console.log("list00 contains a node with value 'whatever'?: " + list00.contains("whatever"))
// console.log("index of the list00 item containing 'second item': " + list00.findIndex("second item"))
// console.log(list00.toString())
//


