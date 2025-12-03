const username = "";

if (username) {
  // โค้ดส่วนนี้จะไม่ถูกดำเนินการเพราะ username เป็นสตริงว่าง เป็นค่า false ในบริบทเชิงตรรกะ
  console.log(`Welcome, ${username}!`);
} else {
  // โค้ดส่วนนี้จะถูกดำเนินการแทน เนื่องจาก username เป็นสตริงว่าง เป็นค่า false ในบริบทเชิงตรรกะ
  console.log("No name provided");
}