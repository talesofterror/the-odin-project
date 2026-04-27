function orderTotal(order) {
  return order.items.reduce(
		(prev, curr) => curr.price * (curr.quantity || 1) + prev, 0)
}

test("testing works", ()=> {
  expect(1).toBe(1)
})
