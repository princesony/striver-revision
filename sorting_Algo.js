/// selection

const arr = [64, 25, 12, 22, 11];

let selection_Sort = (arr)=>{
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let small = i;
        let j = i+1
        for (j; j < n; j++) {
          if(arr[j]<arr[small]){
            small = j;
          }
        
        }
      if(arr[i] !== arr[small]){
         [arr[i] ,arr[small]] = [arr[small],arr[i]] 
      }
    }
    return arr  
}

// console.log(selection_Sort(arr))



let bubble_Sort = (arr)=>{
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
//  console.log(bubble_Sort(arr))


let merge_Sort = (arr)=>{
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)

    let left_half = arr.slice(0,mid)
    let right_half = arr.slice(mid)
    return merge(merge_Sort(left_half),merge_Sort(right_half))
}
let merge = (left,right)=>{
    let merged = []
    let left_index = 0
    let right_index = 0
    while(left_index < left.length && right_index < right.length){
        if(left[left_index] < right[right_index]){
            merged.push(left[left_index])
            left_index++
        }
        else{
            merged.push(right[right_index])
            right_index++
        }

    }
    return merged.concat(left.slice(left_index)).concat(right.slice(right_index))
}
//   console.log(merge_Sort(arr))


function quick_Sort(arr){
    if (arr.length <= 1) return arr;  // Add base case her
    let n = arr.length;
    let pivot = arr[Math.floor(n/2)];
    console.log(pivot)

    let left= [];
    let right =[];
  
    for (let i = 0; i < n-1; i++) {
     if (arr[i]<pivot) {
      left.push(arr[i])
     } else {
      right.push(arr[i])
     }
    }
   
    return [...quick_Sort(left),pivot,...quick_Sort(right)]
   }
//   console.log(quick_Sort(arr))

let dataBinary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, target) {
  let length = arr.length;
  let left = 0;
  let right = length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
}

console.log(binarySearch(dataBinary, 7));



