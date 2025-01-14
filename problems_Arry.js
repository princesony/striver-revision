const arr = [1, 5, 6, 8, 9];
// const largest = Math.max(...arr);
// console.log(largest); // Output: 9


let largest = -Infinity; // Assume the first element is the largest

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i]; // Update largest if a bigger number is found
  }
}

// console.log(largest); // Output: 9


let find_Bigget = arr.reduce((acc,current)=>(current>acc?current:acc),-Infinity)
// console.log(find_Bigget); // Output: 9


let find_Second_Largest = ()=>{
    let largest = -Infinity;
    let second_largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second_largest = largest;
            largest = arr[i];
        }
        else if (arr[i] > second_largest && arr[i] !== largest) {
            second_largest = arr[i];
        }
    }
    return second_largest;
}
// console.log(find_Second_Largest()); // Output: 6


//  console.log(secondLargest(arr))
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
function removeDuplicates(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
    }, []);
}



function findMissingNumber(arr) {
    let n = arr.length + 1; // Since one number is missing, the expected length is arr.length + 1
    let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array
     console.log(actualSum)
    return expectedSum - actualSum; // The missing number is the difference between the expected and actual sum
}

// Example usage:
// let array09 = [1, 2, 3, 5];
// console.log(findMissingNumber(array09)); // Output: 4




function findUnion(arr1, arr2) {
    // Use Set to get unique values and combine the arrays
    return [...new Set([...arr1, ...arr2])];
}

// Example usage:
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// console.log(findUnion(array1, array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]





function maxProfit(arr) {
    let maxPro = 0;
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Compare with subsequent elements
        for (let j = i + 1; j < arr.length; j++) {
            // Check if we can make a profit (arr[j] > arr[i])
            if (arr[j] > arr[i]) {
                maxPro = Math.max(arr[j] - arr[i], maxPro);
            }
        }
    }
    return maxPro;
}

// Example usage
const arr01 = [7, 1, 5, 3, 6, 4];
const maxProfitValue = maxProfit(arr01);
console.log("Max profit is: " + maxProfitValue);



function fibonacci(n) {
    let result = [];
  
    // If n is less than 1, return an empty array.
    if (n < 1) {
        return [];
    }
  
    // If n is 1, return an array with only the first Fibonacci number (0).
    if (n === 1) {
        return [0];
    }
  
    // Initialize the result array with the first two Fibonacci numbers [0, 1].
    result = [0, 1];
  
    // Generate the Fibonacci sequence up to the n-th number.
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);  // Sum of the previous two numbers
    }
  
    return result;  // Return the Fibonacci sequence up to the n-th number
  }
  console.log(fibonacci(5));  // Output: [0, 1, 1, 2, 3]
  console.log(fibonacci(1));  // Output: [0]
  console.log(fibonacci(0));  // Output: []
  console.log(fibonacci(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]


