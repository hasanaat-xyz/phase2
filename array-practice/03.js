// count occurences
// approach 1: using a loop and counter
function countOcc(arr, val){
    let count = 0;
    for(let num of arr){
        if(num == val){
            count ++
        }
    }
    return count;
}
console.log(countOcc([1,3,3,3,3,5,6], 3));

// Approach 2: using array.reduce

function countreduce(arr, val){
    return arr.reduce((count, num) => (num === val ? count + 1 : count), 0)
}
console.log(countreduce([1,2,2,3,4,],2));

// Approach 3: using a frequency map

function countmap(arr, val){
    const freq = new Map();
    for(let num of arr){
        freq.set(num,(freq.get(num)|| 0)+ 1);
    }
    return freq.get(val) || 0;
}
console.log(countmap([1,2,3,4,4,4,4,5,2],4));