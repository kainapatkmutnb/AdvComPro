function generateTempId() {
  // Math.random() ให้ค่าสุ่มระหว่าง 0 ถึง 1
  // .toString(36) แปลงเป็นเลขฐาน 36 (0-9, a-z)
  // .substring(2, 8) ตัด "0." ข้างหน้าออก และเอาเฉพาะ 6 ตัวอักษร
  const randomPart = Math.random().toString(36).substring(2, 8);

  // .toUpperCase() เพื่อให้ตัวอักษรเป็นตัวพิมพ์ใหญ่ทั้งหมด
  return randomPart.toUpperCase();
}

const orderId = generateTempId();
console.log(`ID ออเดอร์ชั่วคราว: ${orderId}`);
// Output (ตัวอย่าง): ID ออเดอร์ชั่วคราว: 4B2A1Z