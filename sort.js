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


// -------------------------------- selection sort -------------------------------

function bubbleSort(arr){
    let n = arr.length
    for(let i=0; i<=n-1; i++){
        let min_index = i
        for(let j=i+1; j<=n-1; j++){
            if(arr[j] < arr[min_index]){
                min_index = j
                console.log(j)
            }
        }
        [arr[i],arr[min_index]] = [arr[min_index],arr[i]]
    }
    return arr
}

const arr = [20,30,1,5,60,6,80,8,7]
const result = bubbleSort(arr)
console.log("sorted Array : ",result)