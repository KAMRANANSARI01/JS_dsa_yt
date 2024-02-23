// //Q-1 find the sum of the digit of given number;

function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    let remainder = num % 10;
    sum = sum + remainder;
    num = Math.floor(num / 10);
  }
  return sum;
}
function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    let remainder = num % 10;
    sum = sum + remainder;
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumOfDigit(121));

//Q-2 checking palindrome

function isPalindrom(num) {
  let copyNum = num;
  let reverseNum = 0;
  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  // if(reverseNum === num){
  //     console.log(`this ${num} number is a palindrom number`)
  // }else{
  //     console.log(`this ${num} number is not a palindrom number`)
  // }
  return reverseNum === num;
}

console.log(isPalindrom(121));

// second way to solve this question

const isPalindromNum = (num) => {
  const numString = num.toString(); // Convert the number to a string
  const reverseNum = numString.split("").reverse().join("");
  return reverseNum === numString;
};

// console.log(isPalindromNum(1214));

// Q-3 print the fibbonacci series (0, 1, 1, 2, 3, 5, 8, 13) it means previous num + current num

const fibbonacci = (num) => {
  if (num < 2) return num;

  let pre = 0;
  let curr = 1;
  let next;

  for (let i = 2; i < num; i++) {
    next = pre + curr;
    pre = curr;
    curr = next;
  }
  return next;
};

// console.log(fibbonacci(6))//this will print only 6th number of fibonacci.

//print whole fibonacci series

function fibSeries(num) {
  let pre = 0;
  let curr = 1;
  let fstart = [pre, curr];

  for (let i = 2; i < num; i++) {
    let next = pre + curr;
    fstart.push(next);
    pre = curr;
    curr = next;
  }

  console.log(fstart);
}

// fibSeries(6);//this function print the whole fib series

//Q-4  find the missing number in given array

function missingNum(arr) {
  let sum = 0;
  let totalSum;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  let num = arr.length;
  totalSum = (num * (num + 1)) / 2;
  return [totalSum - sum];
}

// console.log(missingNum([0,1,3,4,5,6]))//2

//Q-5 find the number of odd between given range

const findOdd = (low, high) => {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
};

console.log(findOdd(4, 12));

//Q-6  Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function FizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

// console.log(FizzBuzz(15));

// Q-8 Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2**x.

function PowerTwo(n) {
  if (n < 0) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(PowerTwo(2056));//false
// console.log(PowerTwo(1));//true
// console.log(PowerTwo(2));//true
// console.log(PowerTwo(4096));//true

//Q-9 Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

function sqrt(n){
  if(n<0){
    return NaN;
  }

  let guess = n/2;
  for(let i=0; i<=10; i++){
    guess = (guess+n/guess)/2
  }
  return Math.round(guess);
}

console.log(sqrt(15))