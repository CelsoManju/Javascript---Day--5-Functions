let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let arr3 = [1,2,2,1];
let arr2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tocaps = ['a','b','c','d','e'];
var sum = 0;
console.log("find odd numbers in an array with IIFE functions");
(function () {
  
    
    var oddNumbers = arr2.filter(function (num) {
      return num % 2 !== 0;
    });
    
    console.log("Odd numbers:", oddNumbers);
  })(arr2);
  console.log("********************************************************");
console.log("find odd numbers in an array with anonymous function");
var oddNumbers = (function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return numbers.filter(function(num) {
      return num % 2 !== 0;
    });
  })();
  
console.log("Odd numbers:", oddNumbers);
console.log("********************************************************");
console.log("find odd numbers in an array with arrow function");
var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers2.filter(num => num % 2 !== 0);

oddNumbers.forEach(num => console.log(num));
console.log("********************************************************");
console.log("Convert all the strings to title caps in a string array with IIFE functions");
(function () {
    for(i=0;i<tocaps.length; i++) 
    {
        console.log(tocaps[i].toUpperCase());
        
        
    }
})(tocaps);
console.log("********************************************************");
console.log("Convert all the strings to title caps in a string array with anonymous functions");

var uppercaseLetters = (function(arr) {
  return arr.map(function(letter) {
    return letter.toUpperCase();
  });
})(tocaps);
console.log("Uppercase letters:", uppercaseLetters);
console.log("********************************************************");
console.log("Convert all the strings to title caps in a string array with arrow functions");
var letters = ['a', 'b', 'c', 'd', 'e'];

const uppercaseLetters = letters.map(letter => letter.toUpperCase());

console.log("Uppercase letters:", uppercaseLetters);
console.log("********************************************************");
console.log("Sum of all numbers in an array IIFE functions");
(function () {
    for(i=0;i<arr.length; i++) 
    {
        sum += arr[i];
        
    }
    console.log(sum);
})(arr);
console.log("********************************************************");
console.log("Sum of all numbers in an array with anonymous functions");
var numbers = [1, 2, 3, 4, 5];
var sum = (function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  })(numbers);
  
  console.log("Sum:", sum);
console.log("********************************************************");
console.log("Return all the prime numbers in an array IIFE functions");
(function () {
    for(i=2;i<arr.length; i++) 
    {
        sum += arr[i];
        
    }
    console.log(sum);
})(arr);
console.log("********************************************************");
console.log("Return all the prime numbers in an array arrow functions");
var numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum);
console.log("********************************************************");
console.log("Return all the prime numbers in an array with anonymous functions");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  return arr.filter(function(num) {
    return isPrime(num);
  });
})(numbers);

console.log("Prime numbers:", primeNumbers);

console.log("********************************************************");
console.log("isPalindromefunc with anonymous function");
var isPalindromefunc = function(arr3) {

    let isPalindrome = true;
     
    
    for(let i = 0; i < arr3.length / 2; i++) {

        
        if(arr3[i] !== arr3[arr3.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    
    return isPalindrome; };
    
    if (isPalindromefunc(arr3)== true) {
        console.log("this array is a palindrome");
    };
    console.log("********************************************************");
    console.log("isPalindromefunc with IIFE function");
    (function () {
        let isPalindrome = true;
     
      
        for(let i = 0; i < arr3.length / 2; i++) {
    
            
            if(arr3[i] !== arr3[arr3.length - i - 1]){
              isPalindrome = false; 
              break;
            }
        }
        if(isPalindrome==true) {console.log("this array is a palindrome");}
         
    })(arr3);

    console.log("********************************************************");
    console.log("isPalindromefunc with arrow function");
    const isPalindrome = str => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
      };
      
      const inputString = 'Madam';
      const isPalindromeResult = isPalindrome(inputString);
      
      console.log(`"${inputString}" is a palindrome: ${isPalindromeResult}`);