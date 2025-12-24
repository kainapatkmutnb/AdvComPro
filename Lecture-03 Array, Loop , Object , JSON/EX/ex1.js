const furniture = ["Table", "Chairs", "Couch"];

console.log("\n--- for Loop Version ---\n");
// for loop
for (let i = 0; i < furniture.length; i++) {
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
