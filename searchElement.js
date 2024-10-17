// ----------------------------searching a num in an array---------------------------------------


// const arr = [20,45,27,47,55,67,75,88]
// let x = 88

// function linearSearch(arr,x){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === x){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch(arr,x))

// Time Complexity = O(n)
// Space Complexity = O(1)




// ----------------Binary Search ---------------------------------

// const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// let y = 80
// let i = 0
// let j = arr1.length-1
// function BinarySearch(arr1,y,i,j){
//     while (i <= j) {
//         mid = Math.floor(i + (j - i) / 2)
//         console.log(mid)
//         if(arr1[mid] === y){
//             return mid
//         }else if(arr1[mid] < y){
//             return BinarySearch(arr1,y,mid+1,j)
//         }else if(arr1[mid] > y){
//             return BinarySearch(arr1,y,mid+1,mid-1)
//         }
//     }
//     return -1
// }

// console.log(BinarySearch(arr1,y,i,j))




//--------------------------Two Pointer Approach to find sum of two numbers -------------------------


// const arr = [20, 40, 60, 80, 90, 120, 240]
// let sumValue =200
// let i = 0
// let j = arr.length - 1

// function sumOfTwoNum(arr,sumValue,i,j){
//     while(i<=j){
//         if (arr[i] + arr[j] === sumValue) {
//             return console.log(i,j)
//         }else if (arr[i] + arr[j] > sumValue) {
//             j = j-1
//         }else{
//             i=i+1
//         }
//     }
//     return -1
// }


// sumOfTwoNum(arr,sumValue,i,j)



// -------------------------------------find max profit ----------------------------

// const price = [7,,5,3,6,4,16,20]

// function stockProfit(price){
//     let minPrice = Infinity
//     let maxPrice = -Infinity
//     let maxProfit = 0
//     let maxLoss = 0

//     for(let i = 0; i<price.length; i++){

//         if(price[i]<minPrice){
//             minPrice = price[i]
//         }
//         if(price[i] - minPrice > maxProfit){
//             maxProfit = price[i] - minPrice
//         }
//         if(price[i] > maxPrice){
//             maxPrice = price[i]
//         }
//         if(price[i] - maxPrice < maxLoss){
//             maxLoss = price[i] - maxPrice
//         }
//     }
//     return console.log(maxProfit,maxLoss)
// }

// stockProfit(price)




// -------------------------- find the num in 2D array ----------------------

// function searchDArray(arr,target){
//     let row = arr.length
//     if(row === 0){
//         return false
//     }
//     let col = arr[0].length

//     let left = 0
//     let right = Math.floor(row*col - 1)


//     while(left<= right){
//     let mid = Math.floor(left + (right - left) / 2)
//     console.log(mid)
//         let mid_element = arr[Math.floor(mid/col)][mid%col]

//         if(mid_element === target){
//             return true
//         }else if(mid_element < target){
//             left = mid +1
//         }else{
//             right = right - 1
//         }
//     }
//     return -1
// }

// const arr = [
//     [1,3,5,7],
//     [10,11,16,20],
//     [23,30,34,60]
// ]


// target = 3
// result = searchDArray(arr,target)
// console.log(result)




// =====================================find a num using Ternary Search ----------------------------------------------


// // function ternarySearch(arr,target,i,j){

// //     let mid1 = i + Math.floor((j - i)/3)
// //     let mid2 = j - Math.floor((j - i)/3)

// //     while(i<=j){
// //         if(arr[mid1] === target){
// //             return mid1
// //         }
// //         if(arr[mid2] === target){
// //             return mid2
// //         }
// //         if(arr[mid1] > target){
// //             return ternarySearch(arr,target,i,mid1-1)
// //         }
// //         if(arr[mid2] < target){
// //             return ternarySearch(arr,target,mid2+1,j)
// //         }
// //         else{
// //             return ternarySearch(arr,target,mid1 +1,mid2 - 1)
// //         }
// //     }
// //     return -1
// // }


// // const arr = [20,25,47,50,59,63,65,79,82]
// // const target = 100;
// // let i = 0;
// // let j = arr.length -1
// // result = ternarySearch(arr,target,i,j)
// // console.log(result)


// function ternarySearch(arr,target){
//     let i = 0;
//     let j = arr.length -1


//     while(i<=j){
//         let mid1 = i + Math.floor((j - i)/3)
//         let mid2 = j - Math.floor((j - i)/3)
//         if(arr[mid1] === target){
//             return mid1
//         }
//         if(arr[mid2] === target){
//             return mid2
//         }
//         if(arr[mid1] > target){
//              j = mid1 -1
//         }
//         if(arr[mid2] < target){
//              i = mid2+1
//         }
//         else{
//             i = mid1+1,
//             j = mid2-1
//         }
//     }
//     return -1
// }


// const arr = [20,25,47,50,59,63,65,79,82]
// const target = 59;
// result = ternarySearch(arr,target)
// console.log(result)
