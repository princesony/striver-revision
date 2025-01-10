const data = [99,88,77,66]
let selection_Sort_Algo = (arr)=>{
    let  len = arr.length;
    for(let i = 0; i < len-1; i++){
        let small = i
        let j = i+1
        for ( j ; j <len; j++) {
           if(arr[j]<arr[small]){
            small = j
           }
            
        }
        if(arr[i]  !== arr[small]){
            [arr[i],arr[small]] = [arr[small],arr[i]]
        }

    }
    return arr
}
// console.log(selection_Sort_Algo(data))


let bubble_Sort_Algo = (arr)=>{
    let len = arr.length
    for(let i = 0; i < len-1; i++){
      
        for(let j = 0; j < len-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
               
            }
        }
    }
    return arr
}

// console.log(bubble_Sort_Algo(data))


const merge_Sort_Algo = (arr)=>{
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(merge_Sort_Algo(left),merge_Sort_Algo(right))
}
const merge = (left,right)=>{
    let result = []
    let i = 0
    let j = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }
    result = result.concat(left.slice(i))
    result = result.concat(right.slice(j))
    return result
}
//  console.log(merge_Sort_Algo(data))

const quick_Sort_Algo = (arr)=>{
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[Math.floor(arr.length/2)];
    let left = []
    let middle = []
    let right = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else if(arr[i] === pivot){
            middle.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return quick_Sort_Algo(left).concat(middle).concat(quick_Sort_Algo(right))

}
  console.log(quick_Sort_Algo(data))

let dataBinary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, target) {
  let length = arr.length;
  let left = 0;
  let right = length ;

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

// console.log(binarySearch(dataBinary, 7));


let inseration_Sort_Algo = (arr)=>{
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && key < arr[j]){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log(inseration_Sort_Algo(dataBinary));





