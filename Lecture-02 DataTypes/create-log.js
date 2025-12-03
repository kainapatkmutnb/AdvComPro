function createLog(message) {
  // 1. สร้าง timestamp
  const now = new Date();
  const timestamp = now.toLocaleTimeString('th-TH'); // เช่น 10:00:00

  // 2. สร้าง Event ID (Math + String)
  const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

  // 3. จัดรูปแบบข้อความ (String)
  const logMessage = message.toUpperCase();

  return `[${timestamp} [${eventId}] - ${logMessage}`;
}

const log = createLog("User Login Successful");
console.log(log);
// Output: (ตัวอย่าง) [10:00:00 [12345678] - USER LOGIN SUCCESSFUL