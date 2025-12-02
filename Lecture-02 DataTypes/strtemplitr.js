//Concatenation with template literals
console.log("\n ******** Concatenation with template literals ******** \n");

let str1 = "JavaScript"; // กำหนดตัวแปรสตริง str1 เป็น "JavaScript"
let str2 = "fun"; // กำหนดตัวแปรสตริง str2 เป็น "fun"

// ใช้ template literals (backticks) เพื่อรวมสตริงและตัวแปร
console.log(`I am writing code in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}!`);

//Expressions in template literals
console.log("\n ******** Expressions in template literals ******** \n");

let bool1 = true; // กำหนดตัวแปรบูลีน bool1 เป็น true
// ใช้ template literals เพื่อรวมสตริงกับการคำนวณทางคณิตศาสตร์
console.log(`1 + 1 is ${1 + 1}`);
// ใช้ template literals เพื่อรวมสตริงกับการดำเนินการทางตรรกะ
console.log(`The opposite of true is ${!bool1}`);