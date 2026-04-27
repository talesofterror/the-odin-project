const fetchData = async (id) => {
  const results = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then( (p)=> p.json())
  // console.log(results)
  return results
}

const forEach = (items, callback, number = 10) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], number)
  }
}

const mockedCallback = jest.fn(x => 42 + x)

it("mocks a callback function", () => {
	mockedCallback.mockReturnValueOnce("whatever")

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
  // the first call of mockedCallback is 0
  expect(mockedCallback.mock.results[0].value).toBe("whatever")
	// passes if mocked the first return value at the beginning of the test
  expect(mockedCallback.mock.results[1].value).toBe(43)
	// the actual return value for the second call of mockedCallback
})

it("mocks a return value", ()=> {
	mock = jest.fn()

	mock.mockReturnValueOnce(10).mockReturnValueOnce("whatever")

	mock()
	mock()

	expect(mock.mock.results[0].value).toBe(10)
	expect(mock.mock.results[1].value).toBe("whatever")
})

function spyTarget(string) {
	return {
		fn: () => string
	}
}

it("spies on a function", ()=> {
	func = spyTarget("whatever")
	jest.spyOn(func, "fn")
		.mockReturnValueOnce(10)
		.mockReturnValueOnce( {value: 1} )
	
	console.log(func.fn())
	console.log(func.fn())	
	console.log(func.fn())

	// Use jest.spyOn() to target a specific function
	// for mocking returns
})

beforeEach( ()=> {
	console.log("beforeEach will run before every test")
})
afterEach( ()=> {
	console.log("afterEach will run after every test")
})
// these called to before/afterEach() run with all 
// the tests in the project. if it's called within a
// jest's describe() block it will only apply to tests
// within that block.

describe("how after each works", ()=> {
	it("tests the function calls above", ()=> {
		expect(spyTarget("whatever").fn()).toBe("whatever")
	})
	afterEach(() => { console.log("This should only run once.") })
})

