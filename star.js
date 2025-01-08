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

// middle_peramid_opposite();


// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
function printPattern() {
    let n = 6;  // The maximum number of stars in the middle row

    // Top part of the pattern
    for (let i = 1; i <n; i++) {
        let leftStars = '*'.repeat(i);  // Left part of the stars
        let spaces = ' '.repeat(2 * (n - i));  // Spaces between the stars
        let rightStars = '*'.repeat(i);  // Right part of the stars
        console.log(leftStars + spaces + rightStars);
    }

    // Bottom part of the pattern
    for (let i = n ; i >= 1; i--) {
        let leftStars = '*'.repeat(i);  // Left part of the stars
        let spaces = ' '.repeat(2 * (n - i));  // Spaces between the stars
        let rightStars = '*'.repeat(i);  // Right part of the stars
        console.log(leftStars + spaces + rightStars);
    }
}

// printPattern();
// **********
// ****  ****
// ***    ***
// **      **
// *        *
let print_square_Star = (num= 3)=>{
    for (let i = 0; i < num; i++) {
        let star1 = "";
        let space ="";
        let star2= "";
        star1 += "*".repeat(num-i)
        space += " ".repeat(2*i)
        star2 += "*".repeat(num-i)
        console.log(star1 + space + star2);

         
    }

}



// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********

// print_square_Star(5)
let print_square_Star_opposite = (num = 5) => {
    // Top part of the pattern (increasing stars and spaces)
    for (let i = 0; i < num-1; i++) {
        let star1 = "";
        let space = "";
        let star2 = "";
        
        // Create the left and right stars
        star1 += "*".repeat(num - i);
        space += " ".repeat(2 * i); // Increasing spaces
        star2 += "*".repeat(num - i);

        // Print the combined pattern for the current row
        console.log(star1 + space + star2);
    }

    // Bottom part of the pattern (decreasing stars and spaces)
    for (let i = num - 1; i >= 0; i--) {
        let star1 = "";
        let space = "";
        let star2 = "";

        // Create the left and right stars
        star1 += "*".repeat(num - i);
        space += " ".repeat(2 * i); // Increasing spaces
        star2 += "*".repeat(num - i);

        // Print the combined pattern for the current row
        console.log(star1 + space + star2);
    }
}

// Call the function with num = 5
// print_square_Star_opposite(5);


let print_square_Star_opposite1 = (num = 6) => {
    // Upper part of the pattern (increasing stars and spaces)
    for (let i = 1; i <= num; i++) {
        let star1 = "";
        let space = "";
        let star2 = "";

        // Create the left stars (increasing from 1 to num)
        star1 += "*".repeat(i);

        // Create the spaces (decreasing from num-1 to 0)
        space += " ".repeat(2 * (num - i));

        // Create the right stars (increasing from 1 to num)
        star2 += "*".repeat(i);

        // Print the combined pattern for the current row
        console.log(star1 + space + star2);
    }

    // Lower part of the pattern (decreasing stars and spaces)
    for (let i = num -1; i >= 1; i--) {
        let star1 = "";
        let space = "";
        let star2 = "";

        // Create the left stars (decreasing from num-1 to 1)
        star1 += "*".repeat(i);

        // Create the spaces (increasing from 1 to num-1)
        space += " ".repeat(2 * (num - i));

        // Create the right stars (decreasing from num-1 to 1)
        star2 += "*".repeat(i);

        // Print the combined pattern for the current row
        console.log(star1 + space + star2);
    }
}

// Call the function with num = 6
print_square_Star_opposite1(6);

