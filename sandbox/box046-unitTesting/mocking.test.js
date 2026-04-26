
const forEach = (items, callback, number = 10) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], number)
  }
}

const mockedCallback = jest.fn(x => 42 + x)

it("mocks a callback function", () => {

  forEach([0, 1], mockedCallback, 11)

  console.log(mockedCallback)
  // returns the jest.fn() object
  console.log(mockedCallback.mock)
  // returns the jest.fn() mock object
  console.log(mockedCallback.mock.calls[0])
  // returns info about the first call to 
  // mockedCallback (within the forEach function)
  console.log(mockedCallback.mock.calls[0][0])
  // returns the value of the first argument for
  //  the first call of mockedCallback
  console.log(mockedCallback.mock.calls[0][1])
  // returns the value of the second argument for
  //  the first call of mockedCallback
  console.log(mockedCallback.mock.results[0])
  // returns an object containing information about
  // the result of the first call to mockedCallback

  expect(mockedCallback.mock.calls.length).toBe(2)
  // matches the number of times mockedCallback
  // was called
  expect(mockedCallback.mock.calls[0][0]).toBe(0)
  // passes if the value of the first argument to
  // the first call of mockedCallback is 0s
  expect(mockedCallback.mock.results[0].value).toBe(42)

})