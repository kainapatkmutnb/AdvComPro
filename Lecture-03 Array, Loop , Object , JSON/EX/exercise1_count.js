// Exercise 1.1
// นับถอยหลังจาก 10 ไปถึง 1
console.log("Exercise 1.1: นับถอยหลัง");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("\n-------------------\n");

// Exercise 1.2
// หาผลรวมของคะแนน
console.log("Exercise 1.2: หาผลรวม");
const scores = [85, 92, 78, 95, 88];
let sum = 0;

// วิธีที่ 1: ใช้ for loop
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

console.log("Total score:", sum);

// วิธีที่ 2: ใช้ for..of loop (สามารถใช้แทนได้)
// for (let score of scores) {
//     sum += score;
// }
// console.log('Total score:', sum);