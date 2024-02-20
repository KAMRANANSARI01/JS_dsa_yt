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

      // Q-6 remove the duplicate number in sorted array.
      // Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

//this is two pointer approach : In which firstly we take a first pointer and then make a loop to arr.length and then compare thatif arr[j] is not equal to arr[i] then i++ and i become j.

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  const resultLength = i + 1;
  console.log(resultLength)

  // Update the array with underscores for remaining elements
  for (let i = resultLength; i < nums.length; i++) {
    nums[i] = "_";
  }

  return [resultLength , nums];

}

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums))


//Q-7 Largest element in the array

//first method (this is not optimal solution)

function findLar(arr){
  let sortedarr = arr.sort((a,b)=>a-b);
  return sortedarr[arr.length-1]

}
console.log(findLar([3,4,5,6,6,44,55,4,333]))

//now we will get the optimal solution

function largestEle(arr){
  let largestElement =arr[0]
  for(let i=1; i< arr.length; i++){
    if(arr[i]>largestElement){
      largestElement = arr[i]
    }
  }
  return largestElement;
}

console.log(largestEle([3,4,5,6,6,44,55,4,333]))

//Q-8 find the second largest element in the array;

//approach firstly we have to find the largest ele in the array and then we let the second largest ele is -1 and apply loop then compare that if arr[i] is greater than second large ele and it is not equal to the largest num then it will be second largest;

function secondLargestEle(arr){
  let largestEle = arr[0]
  for(let i=1; i< arr.length; i++){
    if(arr[i]>largestEle){
       largestEle = arr[i]
    }
  }
  let secondLar = -1;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>secondLar && arr[i] !== largestEle){
      secondLar = arr[i]
    }
  }
  return secondLar;
}

console.log(secondLargestEle([3,4,5,6,6,44,55,4,333]))

//sqaure of sorted arry

var sortedSquaress = function(nums) {
  let sqrArr=[]
  for( let i=0; i<nums.length; i++){
     sqrArr.push(nums[i]*nums[i])
  }
  sqrArr.sort((a,b)=>a-b);
  return sqrArr;
};

console.log(sortedSquaress([-4,-1,0,3,10]));

//now we will use an optimal solution using two pointers method

var sortedSquares = function(nums) {
  let n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n-1;
  for(let i=n-1; i>=0; i--){
      if(nums[left]**2 < nums[right]**2){
          result[i] = nums[right]**2;
          right--;
      }else{
          result[i] = nums[left]**2;
          left++
      }
  }
  return result;
};
console.log(sortedSquares([-6,-4,-1,0,3,10]));