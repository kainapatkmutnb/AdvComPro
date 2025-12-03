// วิธีที่ 1: ใช้ Math.round() (ต้องคูณและหาร 100 เอง)
const productPrice = 1599.5;
const vatRate = 0.07;
const totalPrice = productPrice * (1 + vatRate); // 1711.465

const roundedPrice = Math.round(totalPrice * 100) / 100;
console.log(`ราคารวม (Math.round): ${roundedPrice}`);
// Output: 1711.47

// วิธีที่ 2: ใช้ .toFixed() (แนะนำสำหรับสกุลเงิน)
// คืนค่าเป็น String แต่แม่นยำและง่ายกว่า
const fixedPrice = totalPrice.toFixed(2);
console.log(`ราคารวม (.toFixed): ${fixedPrice}`);
// Output: "1711.47"