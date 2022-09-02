

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   }
  
//   console.log(factorial(10))


function fac(n) {
    return n < 2 ? 1 : n * fac(n-1)
}

console.log(fac(10))



  /**
   * This is odd.. I might have to write this one out. 
   * 
   * if n is less than 2, return 1. 
   * 
   * else: n * fac(n-1)
   * 
   * if n is 3, then
   * 
   * 3 * fac(3-1) 
   * 3 * fac(2)  [fac function runs again with a parameter of 2]
   *    2 * fac(2-1) [the fac function runs again with a parameter of 1]
   *                [1 is less than 2, so 1 is returned]
   * 
   * It's like it opens up a little hall of mirrors that extends the length of
   * the else condition's executability. 
   * 
   * It's a recursive function
   *  
   */