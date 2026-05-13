console.log("hi")

function makeListItem(data, next = null) {
  return {
    data: data,
    next: next
  }
}

function list(head) {
  return {
    head: head,
    tail: head,
    append: function (data) {
      this.tail.next = makeListItem(data)
      this.tail = this.tail.next
    },
    prepend: function (data) {
      let newItem = makeListItem(data, this.head)
      this.head = newItem
    },
    size: function (node = this.head, tally = 0) {
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
			if (node.next != null) {
				return this.toString(node.next, string + `( ${node.data} ) -> `)
			}
			else { return ` ${string}( ${node.data} ) -> null` }
		},
		insertAt: function (index, ...values) {

		}
	}
}


let list00 = list(makeListItem("first item"))
console.log(list00)
console.log(list00.head)
console.log(list00.head.data)
console.log(list00.tail)

list00.append("second item")
console.log(list00.tail)
list00.append("third item")
console.log(list00.tail)
list00.prepend("prepended first item")
console.log(list00.head)
console.log("list00 size: " + list00.size())
console.log("list00 head value: " + list00.headValue())
console.log("list00 tail value: " + list00.tailValue())
console.log("list00[2].data: " + list00.at(2))
console.log("list00[0].data: " + list00.at(0))
list00.pop()
console.log("new list00 head after pop(): " + list00.head.data)
console.log("list00 contains a node with value 'first item'?: " + list00.contains("first item"))
console.log("list00 contains a node with value 'whatever'?: " + list00.contains("whatever"))
console.log("index of the list00 item containing 'second item': " + list00.findIndex("second item"))
console.log(list00.toString())



