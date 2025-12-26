// Q1 — Print numbers from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Explaination: I used a for loop where i starts from 1 and runs until 10. On each iteration, console.log(i) prints the value.

// ---------------------------------------------------------------------------------------------------------------------

// Q2 — Sum of numbers from 1 to 10.

// let sum = 0;

// for (let i = 1; i <=10; i++) {
//     sum += i
// }

// console.log(sum)

// Output: 55

// Explaination: I declared a variable sum its value will be 0 and then i have used for loop where initial value to i will be 1 and target is 10 and i will be increment then i have added sum += i. The code uses a loop to add all numbers from 1 to 10 together, giving 55 as the result.

// ---------------------------------------------------------------------------------------------------------------------

// Q3 — Print star pattern.

// for (let i = 1; i <=5; i++ ) {
//     console.log('*'.repeat(i))
// }

// Output:
// *
// **
// ***
// ****
// *****

// Explaination: I have used for loop to print the * with the value of i.

// ---------------------------------------------------------------------------------------------------------------------

// Q4 — Print decreasing number pattern.

// for (let i = 5; i >= 1; i--) {
//   let line = "";

//   for (let j = i; j >= 1; j--) {
//     line += j;
//   }
//   console.log(line);
// }

// Output: 
// 54321
// 4321
// 321
// 21
// 1

// Explaination: I used two loops. The outer loop controls the number of rows. The inner loop prints numbers in each row. For every row, I start from the current value of i and go down to 1, building the string and printing it.


// ---------------------------------------------------------------------------------------------------------------------

// Q5 — Count Character Frequency.

    // let str = 'program'
    // let freq = {}

    // for (let char of str) {
    //     freq[char] = (freq[char] || 0) + 1
    // }

    // console.log(freq)

    // Output: { p: 1, r: 2, o: 1, g: 1, a: 1, m: 1 }

    // Explaination: I have used for loop to count the frequency of each character in the string. Counts how many times each letter appears in "program". 'r' appears twice, others once.