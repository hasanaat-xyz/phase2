// Write a JavaScript function that takes an array of numbers and returns the maximum and minimum values.

function findminmax(arr){
    let min = arr[0];
    let max = arr[0];

for(let i=1; i<arr.length;i++){
    if(arr[i]<min)min = arr[i];
    if(arr[i]>max)max = arr[i];
}
return{min, max};
}
console.log(findminmax([3,7,2,9,5,1000]));

let numbers = [3,7, 2, 9, 5];
let min = Math.min(3, 7, 2,9,0,5);
let max = Math.max(1,2,34,5,6)
console.log(min, max);