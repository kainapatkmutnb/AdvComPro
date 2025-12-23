const furniture = ["Table", "Chairs", "Couch"];

// วนลูปแต่ละคำใน Array
for (let i = 0; i < furniture.length; i++) {
  // วนลูปแต่ละตัวอักษรในคำ
  for (let j = 0; j < furniture[i].length; j++) {
    console.log(furniture[i][j]);
  }
}