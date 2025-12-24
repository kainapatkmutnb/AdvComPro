const furniture = ["Table", "Chairs", "Couch"];

// วนลูปแต่ละคำใน Array (แบบ for loop)
for (let i = 0; i < furniture.length; i++) {
  // วนลูปแต่ละตัวอักษรในคำ
  for (let j = 0; j < furniture[i].length; j++) {
    console.log(furniture[i][j]);
  }
}

console.log("\n--- forEach Version ---\n");

// วนลูปแต่ละคำใน Array (แบบ forEach - The Modern Way)
furniture.forEach((word) => {
  // วนลูปแต่ละตัวอักษรในคำ
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
});

console.log("\n--- forEach Version (ทั้งสองลูป) ---\n");

// ใช้ forEach ทั้งสองลูป
furniture.forEach((word) => {
  // แปลง string เป็น array ของตัวอักษร แล้วใช้ forEach
  Array.from(word).forEach((char) => {
    console.log(char);
  });
});
