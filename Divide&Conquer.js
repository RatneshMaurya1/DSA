//  -----------------------finding max and min val using Divide and Conquer ----------------------------------------------

function findMinAndMax(arr,i,j){
    let min_val = 0;
    let max_val = 0;

    // if arr has one element
    if(i===j){
        min_val = arr[i];
        max_val = arr[j];
    // if arr has two element
    } else if (i == j-1) {
        if (i<j) {
            min_val = arr[i]
            max_val = arr[j]
        }else{
            min_val = arr[j]
            max_val = arr[i]
        }
    }else{
        let mid = Math.floor(i + (j-i)/2)
        //     10    94
        const [min_1,max_1] = findMinAndMax(arr,i,mid)
        //     20     80
        const [min_2,max_2] = findMinAndMax(arr,mid+1,j)

        if (min_1 < min_2) {
            min_val = min_1
        }else{
            min_val = min_2
        }
        if (max_1 < max_2) {
            max_val = max_2
        }else{
            max_val = max_1
        }
    }
    return [min_val,max_val]
}



const arr = [11,56,37,28,94,80,70,43,20]
let i = 0;
let j = arr.length -1;
console.log(findMinAndMax(arr,i,j))