// ฟังก์ชันสำหรับนับจำนวนสระในสตริง
function getVowels(str) {
  // ใช้ .match() เพื่อค้นหาสระ (a, e, i, o, u) ในสตริง
  // /[aeiou]/gi คือ regular expression:
  //   - [aeiou] = ค้นหาตัวอักษร a, e, i, o, u
  //   - g = global (ค้นหาทั้งหมดในสตริง)
  //   - i = case insensitive (ไม่สนใจตัวพิมพ์เล็ก-ใหญ่)
  // ผลลัพธ์: ถ้าพบสระจะได้ array, ถ้าไม่พบจะได้ null
  const m = str.match(/[aeiou]/gi);

  // เช็คว่าถ้าไม่พบสระเลย (m เป็น null)
  if (m === null) {
    return 0; // คืนค่า 0 เพราะไม่มีสระ
  }

  // ถ้าพบสระ คืนค่าจำนวนสระที่พบ (ความยาวของ array)
  return m.length;
}

// เรียกใช้ฟังก์ชันกับคำว่า "seeing"
// ผลลัพธ์: 3 (เพราะมีสระ e, e, i = 3 ตัว)
console.log(getVowels("seeing"));