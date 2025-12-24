const furniture = ["Table", "Chairs", "Couch"];

console.log("\n--- for Loop Version ---\n");
// for loop วนลูปแต่ละคำใน Array
for (let i = 0; i < furniture.length; i++) {
    // วนลูปแต่ละตัวอักษรในคำ
    for (let j = 0; j < furniture[i].length; j++){
        console.log(furniture[i][j]);
    }
}


/*
console.log("\n--- forEach Version ---\n");
furniture.forEach((word) => {
    Array.from(word).forEach((char) => {
        console.log(char);
    });
});
*/
