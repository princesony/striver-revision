// * * * * * * * * * * 
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
let print_linear_start = (n=10)=>{
    for (let i = 0; i < n; i++) {
        let start = ""
      for (let j = 0; j < n; j++) {
        start += "* "
        
      }  
      console.log(start)
        
    }
}
// print_linear_start() // prints 10 lines of 10 stars each
// * 
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *


let prinst_Peramid_Start = (n=10)=>{
    for (let o = 0; o <n; o++) {
        let star = ""
        for (let i = 0; i < o+1; i++) {
            star += "* "
        }
       console.log(star)
        
    }
}

// prinst_Peramid_Start()


let prinst_Peramid_Num = (n=10)=>{
    for (let o = 0; o <n; o++) {
        let star = ""
        for (let i = 0; i <= o; i++) {
            star += `${i+1} `
        }
       console.log(star)
        
    }
}
//  prinst_Peramid_Num() // prints 10 lines of numbers from 1 to


// 1
// 22
// 333
// 4444
// 55555



let prinst_Peramid_Reapet = (n=5)=>{
    for (let o = 1; o <=n; o++) {
        let star = `${o}`.repeat(o)
        // for (let i = 0; i <= o; i++) {
        //     star += `${o+1}`

        // }

       console.log(star)
        
    }
}
//  prinst_Peramid_Reapet() // prints 10 lines of numbers from 1

// * * * * * 
// * * * *
// * * *
// * *
// *

let oppsite_Peramid = (n=5)=>{
    for (let o = 0; o < n; o++) {
        let star = ""
        for (let i = n; i>o; i--) {
         star += "* ";
        }
        console.log(star)
    }
}
//   oppsite_Peramid() // prints 5 lines of numbers from 5 to

let oppsite_Peramid_Num = (n=5)=>{
    for (let o = 0; o < n; o++) {
        let star = ""
        for (let i = n; i>o; i--) {
         star += n-i + 1;
        }
        console.log(star)
    }
}
//    oppsite_Peramid_Num() // prints 5 lines of numbers from 5 to

// 12345
// 1234
// 123
// 12
// 1
let oppositePyramidNum = (num=5)=>{
    for (let i = 0; i < num; i++) {
        let numb = ""
      for (let j = 1; j <=num-i; j++) {
        numb += j
        
      }
      console.log(numb)
    }
}

// oppositePyramidNum()



//      *
//     ***
//    *****
//   *******
//  *********
let middle_peramid = (num =5)=>{
    for (let i = 0; i < num; i++) {
        let star = ""
        star += " ".repeat(num-i)
        star += `*`.repeat(i+(i+1))
        console.log(star)
    }
}
// middle_peramid()


let middle_peramid_opposite = (num = 5) => {
    
    for (let i = 1; i<=num; i++) {
        let star = "";
        // Add spaces for alignment
        star += " ".repeat(num - i);
        // Add stars for the pyramid shape
        star += "*".repeat(2 * i - 1);
        console.log(star);
    }
    for (let i = num; i >= 1; i--) {
        let star = "";
        // Add spaces for alignment
        star += " ".repeat(num - i);
        // Add stars for the pyramid shape
        star += "*".repeat(2 * i - 1);
        console.log(star);
    }
  
}

middle_peramid_opposite();


