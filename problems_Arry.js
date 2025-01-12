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