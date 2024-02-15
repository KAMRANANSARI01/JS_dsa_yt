//Q-1 check the element is present in tge array or not?

function checkElement(arr, target) {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
}

console.log(checkElement([1, 2, 3, 4, 56], 56));

//there is another prebuild method

function checkele(arr, target) {
  if (arr.includes(target)) {
    return true;
  }
  return false;
}
console.log(checkElement([1, 2, 3, 4, 56], 2));

//Q-2 find the index of the target element

function findEleIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `index of target element is ${i}`;
    }
  }
  return `element not found`;
}
console.log(findEleIndex([2, 4, 5, 6, 7, 87, 8, 77],2));

//there is also a sort method

function findEleIndexx(arr, target) {
    return arr.indexOf(target)
  }
  console.log(findEleIndexx([2, 4, 5, 6, 8, 77],77));

  //Q-3 TWO SUM: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.
//   Example 1:
//   Input: nums = [2,7,11,15], target = 9
//   Output: [0,1]
//   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
 
function TwoSum(arr,target){
    for(let i=0; i< arr.length; i++){
        for(let j=1; j< arr.length; j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
    return "such number is not available"
}

console.log(TwoSum([2,3,4,5,6,7],13))

//Q-4 Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majEle(arr) {
    let threshold = Math.floor(arr.length / 2);
    let map = {};
  
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      map[value] = (map[value] || 0) + 1;
      // console.log(map); // Uncomment this line if you want to see the map at each step
      if (map[value] > threshold) {
        return [value];
      }
    }
  
    // If majority element not found, you can return something indicating that.
    return "No majority element found";
  }
  
  console.log(majEle([2, 2, 1, 1, 1, 2, 2]));
  

//this is not an optimal solution 
function majorityEle(arr){
    let numCount = {};
    for(let num of arr){
        if(numCount[num]){
            numCount[num]++
        }else{
            numCount[num] = 1
        }
    }
    return numCount;
}

 let numCountObject = majorityEle([2,3,4,5,5,4,4])
 console.log(numCountObject)//now we a object that denotes which number how many times repeat.
//and now i have to get the max repeatable number from this object

let maxValue = 0;
let maxRepeatNum=[]
for(let value in numCountObject){
    if(numCountObject[value]>maxValue){
        maxValue = numCountObject[value]
    }
}
for(let value in numCountObject){
    if(numCountObject[value]===maxValue){
        maxRepeatNum.push(value)
    }
}

console.log(maxRepeatNum);

//Q-5 Write a function that takes a string as input and returns an object containing the count of each character in the string.

      function countCharacter(str) {
        let charCount = {};
        for (let char of str) {
          if (charCount[char]) {
            charCount[char]++;
          } else {
            charCount[char] = 1;
          }
        }
        return charCount;
      }

      let string = "kamranisagoodcoder";
      console.log(countCharacter(string));