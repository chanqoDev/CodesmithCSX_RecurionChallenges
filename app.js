// ## CSX Recurison 

// Challenge1 : Repeater = Write a function that takes an input character and returns that character repeated 5 times using recursion

// Solution A: 
function repeater(char) {
    if (char.length === 5) return char; 
    return repeater(char += char[0]); 
  }
  
  
  // Solution B: solution with default paramater 'parameter storage'; 
  
//   function repeater(char, str='') {
//    //basecase
//     if (str.length === 5) return str; 
//    //recursive case
//     return repeater(char, str += char); 
//   }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(repeater('g'));
  console.log(repeater('j'));
  
  
  // Bonus: repeater with passed-in value
  
//   function repeater(char, n,  str='') {
//     if (str.length === n) return str; 
//    recursive case
//     return repeater(char, n, str += char); 
//   }
  
//   console.log(repeater('g', 6));
//   console.log(repeater('j', 9));
  
  
  
  
  
  
  
  // Challenge: Factorial = Write a function that returns the factorial of a number.
  
  // EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
  


  // Solution : A using Tail-Call Optimization
  
  function factorial(num, acc = 1) {
    if (num < 2) return acc;
  return factorial(num - 1, num * acc) 
}
    
  // Solution : B using Tail-Call Optimization
  
  // function factorial(num, acc) {
  // 	if (num < 2) return 1;
  //   acc = factorial(num -1);
  //   return num * acc; 
// }
  

  // Solution : C
  
  // function factorial(num) {
  // 	// basecase: 
  //   if (num === 1) return 1; 
  //   console.log(num); 
  //   // recursive: 
  //   return num * factorial(num - 1); 
  // }
  
  
  console.log(factorial(4));
  console.log(factorial(1)); 
  console.log(factorial(0)); 
  
  
  
  // Challenge: POW = Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.
  
  // Solution A: recursively solved. 
  
  function pow(base, exponent, total = 1) {
    if (!exponent) return total;
    return pow(base, exponent-1, total * base); 
  };
  
  
  // Solution B: while loop solution
  // function pow(base, exponent, total = 1) {
  // 	while (exponent > 1) {
  // 	base *= arguments[0];
  // 	exponent--; 
  // 	}
  // 	return base;   
//   };
  
  
  console.log(pow(3, 4)); // -> 81
  console.log(pow(1, 0)); // -> 1
  console.log(pow(2, 4)); // -> 16
  console.log(pow(3, 5)); // -> 243
  
  
  
  
  
  // Challenge: flow
  // Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.
  
  
  
  function flow(input, funcArray ) {
      if (!funcArray.length) return input;
    const output = funcArray[0](input); 
    return flow(output, funcArray.slice(1)); 
  }
  
  // To check if you've completed the challenge, uncomment this code!
  function multiplyBy2(num) { return num * 2; }
  function add7(num) { return num + 7; }
  function modulo4(num) { return num % 4; }
  function subtract10(num) { return num - 10; }
  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
  console.log(flow(2, arrayOfFunctions)); 
  