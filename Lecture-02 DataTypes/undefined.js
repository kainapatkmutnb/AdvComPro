// ฟังก์ชันสำหรับตรวจสอบว่าค่าที่ส่งเข้ามาเป็น undefined หรือไม่
function test(t) {
  // เช็คว่าพารามิเตอร์ t เป็น undefined หรือไม่
  // ใช้ === เพื่อเปรียบเทียบแบบเข้มงวด (strict equality)
  if (t === undefined) {
    return "Undefined value!"; // ถ้าเป็น undefined ให้คืนค่าข้อความนี้

    // บรรทัดนี้จะไม่ทำงาน เพราะอยู่หลัง return แล้ว (unreachable code)
    return t;
  }
  // ถ้า t ไม่เป็น undefined ฟังก์ชันจะไม่คืนค่าอะไร (จะได้ undefined)
}

// ประกาศตัวแปร x โดยไม่กำหนดค่าเริ่มต้น
// ดังนั้น x จะมีค่าเป็น undefined
let x;

// เรียกใช้ฟังก์ชัน test() โดยส่ง x (ที่เป็น undefined) เข้าไป
// ผลลัพธ์: "Undefined value!"
console.log(test(x));