// Exercise 2.1: ค้นหาชื่อ
console.log("Exercise 2.1: ค้นหาชื่อ");
const guests = ["Alice", "Bob", "Charlie", "David"];

let i = 0;
while (i < guests.length) {
  if (guests[i] === "Charlie") {
    console.log("Found Charlie!");
    break;
  }
  i++;
}
console.log("\n-------------------------\n");

// Exercise 2.2: พิมพ์เฉพาะสระ
console.log("Exercise 2.2: พิมพ์เฉพาะสระ");
const message = "Hello World";

// กำหนดสระทั้งหมด (ทั้งตัวพิมพ์เล็กและใหญ่)
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// วนลูปผ่านแต่ละตัวอักษรใน message
for (let char of message) {
  // ถ้าตัวอักษรเป็นสระ ให้พิมพ์ออก
  if (vowels.includes(char)) {
    console.log(char);
  }
}