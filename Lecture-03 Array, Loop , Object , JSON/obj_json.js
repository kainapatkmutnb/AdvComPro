// 1. เริ่มต้นด้วย JavaScript Object
const bookObj = {
  title: "Becoming",
  author: "Michelle Obama",
  isAvailable: false,
};

// 2. แปลงเป็น JSON String เพื่อส่งข้อมูล
const bookJSON = JSON.stringify(bookObj);

console.log(bookJSON);
// Output: '{"title":"Becoming","author":"Michelle Obama","isAvailable":false}'
console.log(typeof bookJSON); // "string"

// 3. เมื่อได้รับข้อมูลกลับมา แปลง JSON String กลับเป็น Object เพื่อใช้งาน
const receivedBookObj = JSON.parse(bookJSON);

console.log(receivedBookObj.author); // "Michelle Obama"
console.log(typeof receivedBookObj); // "object"
