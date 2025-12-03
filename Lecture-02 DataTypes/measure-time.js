// 1. บันทึกเวลาเริ่มต้น (เป็น timestamp)
const startTime = Date.now();

// 2. จำลองการทำงานที่ใช้เวลา
function someHeavyTask() {
  for (let i = 0; i < 5e7; i++) {
    Math.sqrt(i);
  }
}
someHeavyTask();

// 3. บันทึกเวลาสิ้นสุด
const endTime = Date.now();

const duration = endTime - startTime;
console.log(`ฟังก์ชันใช้เวลาทำงาน: ${duration} มิลลิวินาที`);
// Output (ตัวอย่าง): ฟังก์ชันใช้เวลาทำงาน: 53 มิลลิวินาที