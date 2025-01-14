// Reverse an Array
// Write a function to reverse an array in place.
// Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1]

let data = [1, 2, 3, 4, 5]
let reverse_data = (arr)=>{
    let len = arr.length-1 
    let data =[]
    for (let i = 0; i <= len; i++) {
     data.push(arr[len-i])
        
    }
   arr = [...data]
   console.log(data)
   return arr
}
// console.log(reverse_data(data)) // Output: [5, 4, 3, 2]
let reverse_data_1 = (arr)=>{
    let len = arr.length-1 
    let data =[]
    for (let i = len; 0<=i; i--) {
     data.push(arr[i])
        
    }
   arr = [...data]
 
   return arr
}
// console.log(reverse_data_1(data))

let reverse_data_2 = (arr)=>{
   return arr.reverse()
}
 //console.log(reverse_data_2(data)) // Output: [5, 4, 3


 function reverseArray(arr) {
    let reversed = [];
    while (arr.length) {
        reversed.unshift(arr.shift());
    }
    return reversed;
}

//console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]



function findMaxMin(arr) {
    const max = Math.max(...arr); // Spread operator to pass array elements
    const min = Math.min(...arr); // Spread operator to pass array elements
    return { max, min };
}

//const result = findMaxMin([3, 1, 4, 1, 5, 9, 2, 6]);
//console.log(`Max: ${result.max}, Min: ${result.min}`); // Output: Max: 9, Min: 1


function findMaxMin(arr) {
    let max = arr[0]; // Start with the first element as the initial max
    let min = arr[0]; // Start with the first element as the initial min

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]; // Update max if a larger element is found
        if (arr[i] < min) min = arr[i]; // Update min if a smaller element is found
    }

    return { max, min };
}

//const result = findMaxMin([3, 1, -4, 1, 5, 9, 2, 6]);
//console.log(`Max: ${result.max}, Min: ${result.min}`); // Output: Max: 9, Min: 1

function findMaxMin(arr) {
    const result = arr.reduce(
        (acc, num) => {
            if (num > acc.max) acc.max = num; // Update max
            if (num < acc.min) acc.min = num; // Update min
            return acc;
        },
        { max: arr[0], min: arr[0] } // Initial values set to the first element
    );

    return result;
}

//const result = findMaxMin([3, 1, 4, 1, 5, 9, 2, 6]);
//console.log(`Max: ${result.max}, Min: ${result.min}`); // Output: Max: 9, Min: 1



function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    arr.forEach(num => {
        if (num > max) max = num;
        if (num < min) min = num;
    });

    return { max, min };
}

//const result = findMaxMin([3, 1, 4, 1, 5, 9, 2, 6]);
//console.log(`Max: ${result.max}, Min: ${result.min}`); // Output: Max: 9, Min: 1


function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

//console.log(hasDuplicates([1, 2, 3])); // Output: true

function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            return true;
        }
    }
    return false;
}

//console.log(hasDuplicates([1, 2, 3])); // Output: true


function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return true;
        }
    }
    return false;
}

//console.log(hasDuplicates([1, 2, 3, 1])); // Output: true



function hasDuplicates(arr) {
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return true;
        }
        seen[arr[i]] = true;
    }
    return false;
}

//console.log(hasDuplicates([1, 2, 3, 2])); // Output: true


let hasDuplicates_hashing = (data)=>{
    let hash = {};

    for (let i = 0; i < data.length; i++) {
        if(hash[data[i]]){
            return true;
        }
        hash[data[i]] = true;
        
    }
}
//console.log(hasDuplicates_hashing([1, 2, 3, 1]))

function rotateArray(arr, k) {
    const n = arr.length;
   
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

const result = rotateArray([1, 2, 3, 4, 5], 2);
//console.log(result); // Output: [4, 5, 1, 2, 3]

let rotateArray01 = (data = [1, 2, 3, 4, 5], k = 2) => {
    let len = data.length;

    // Rotate the array k times
    for (let i = 1; i <= k; i++) {
        let lastElement = data.pop();  // Remove the last element
        data.unshift(lastElement);     // Insert it at the beginning
    }

    console.log(data);
}

//rotateArray01();  // Output after rotating the array k times

let missing_num = [1, 2, 4, 5, 6]


let miss_find = (num)=>{
    let n = num.length+1;
    let expected_sum = (n * (n+1)/2);
    let actual_sum = num.reduce((acc,curent)=>(acc + curent),0);
    return expected_sum - actual_sum;
}
//console.log(miss_find(missing_num)); // Output: 3



// find all pair with a given sum

let aaagLga_di = [2,3, 4,  5, 7, 8, 9];
let target = 7;

let pair = (arr, target) => {
    let n = arr.length;
    let pairs = [];
    
    for (let i = 0; i < n; i++) {
        let expected_num = target - arr[i];
        let correct_index = arr.indexOf(expected_num, i + 1); // Start search after the current index
        
        if (correct_index !== -1) {
            pairs.push([arr[i], arr[correct_index]]);
        }
    }
    
    return pairs;
};

let result10 = pair(aaagLga_di, target);
console.log(result10); // Output: [ [2, 5], [3, 4] ]


//Flatten a Nested Array
//Write a function to flatten a deeply nested array.
//Input: [1, [2, [3, [4]], 5]] → Output: [1, 2, 3, 4, 5]

let nested_array = [1, [2, [3, [4]], 5]];
let flatten = (arr) => {
       return arr.flat(Infinity)
}
console.log(flatten(nested_array)); // Output: [1, 2, 3