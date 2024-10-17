// ---------------------------------------Question 1 ------------------------------------

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer. And since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned. Also, talk about the time complexity of your code.

// Test Cases:

// Input: 4
// Output: 2
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.8284...., the decimal part is truncated, and 2 is returned.
// Hint: Try to use a modified binary search approach for an optimized solution.

// -------------------------------------Question 2 ------------------------------------

// Given a positive integer num, write a program that returns True if num is a perfect square else return False. Do not use built-in functions like sqrt. Also, talk about the time complexity of your code.

// Test Cases:

// Input: 16
// Output: True
// Input: 14
// Output: False

// ----------------------------------Question 3 -------------------------------------------------

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions and you want to find out the first bad one, which causes all the following ones to be bad. Also, talk about the time complexity of your code.

// Test Cases:

// Input: [0,0,0,1,1,1,1,1,1]
// Output: 3
// Explanation: 0 indicates a good version and 1 indicates a bad version. So, the index of the first 1 is at 3. Thus, the output is 3.


// ==================Solution 1 ==============================

// function squareRoot(num){
//     let left = 0
//     let right = num
//     while(left<=right){
//         let mid = Math.floor(left + (right-left)/2)
//         if(mid*mid === num){
//             return mid
//         }
//         if(mid*mid < num){
//             left = mid + 1
//         }
//         if(mid*mid > num){
//             right = mid -1
//         }
//     }
//     return right
// }



// let num = 1024
// const result = squareRoot(num)
// console.log(result)

// ============================= solution 2 ================================

// function perfectSquareRoot(x){
//     let left = 0 
//     let right = x
    
//     while(left <= right){
//         let mid = Math.floor(left + (right - left)/2)

//         if(mid*mid === x){
//             return true
//         }
//         if(mid*mid < x){
//             left = mid + 1
//         }
//         if(mid*mid > x){
//             right = mid - 1
//         }
//     }
//     return false
// }

// let num = 16
// console.log(perfectSquareRoot(num))


// ================================== solution 3 ===========================================

// function firstInt(arr){
//     let left = 0
//     let right = arr.length - 1
//     while(left<= right){
//         let mid = Math.floor(left + (right - left)/2)
//         console.log(mid)

//         if(arr[mid] === 1){
//             right = mid - 1
//         }
//         if(arr[mid] === 0){
//             left = mid + 1
//         }
//     }
//     return left
// }



// const arr = [0,1,1,1,1,1]
// console.log(firstInt(arr))