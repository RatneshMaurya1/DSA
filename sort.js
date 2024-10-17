// --------------------------------- Bubble sort -----------------------------------------------

// function bubbleSort(arr){
//     let n = arr.length
//     for(let i = 0; i< n -1; i++){
//         for(let j = 0; j < n-1 -i; j++){
//             if(arr[j] > arr[j +1 ]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr
// }
// function bubbleSort(arr){
//     let n = arr.length
//     for(let i = 0; i< n -1; i++){
//         for(let j = 0; j < n-1 -i; j++){
//             if(arr[j] > arr[j +1 ]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr
// }


// -------------------------------- selection sort -------------------------------

// function bubbleSort(arr){
//     let n = arr.length
//     for(let i=0; i<=n-1; i++){
//         let min_index = i
//         for(let j=i+1; j<=n-1; j++){
//             if(arr[j] < arr[min_index]){
//                 min_index = j
//                 console.log(j)
//             }
//         }
//         [arr[i],arr[min_index]] = [arr[min_index],arr[i]]
//     }
//     return arr
// }

// const arr = [20,30,1,5,60,6,80,8,7]
// const result = bubbleSort(arr)
// console.log("sorted Array : ",result)



// ---------------------------------------Insertion sort ---------------------------------------

// function insertionSort(arr){
//     for(let i = 1; i<arr.length; i++){
//         let key = arr[i]
//         let j = i -1
//             while(j>=0 && key<arr[j]){
//                arr[j+1] = arr[j]
//                 j = j -1
//             }
//             arr[j+1] = key
//         }
//     return arr
//     }



// const arr = [75,35,20,15,10,80]
// console.log(insertionSort(arr))


// --------------------------------- minHeap Sort --------------------------------------
function heapify(arr,n,i){
    let smallest = i
    left = 2*i -1
    right = 2*i - 2

    if(arr[left] < arr[smallest]){
        smallest = left
    }
    if(arr[right] < arr[smallest]){
        smallest = right
    }
    if(smallest != i){
        [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
        heapify(arr,n,smallest)
    }
}

function minheapSort(arr){
    let n = arr.length
    for( let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapify(arr , n , 1)
    }
    return arr

}

const arr = [2,4,60,50,40,7,4]
console.log(minheapSort(arr))

