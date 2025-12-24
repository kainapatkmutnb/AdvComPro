const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true,
  // Method สำหรับยืมหนังสือ
  checkOut: function () {
    this.isAvailable = false;
  },
  // Method สำหรับคืนหนังสือ
  checkIn: function () {
    this.isAvailable = true;
  },
};

console.log(`Title: ${book.title}`);
console.log(book.isAvailable); // true
book.checkOut();
console.log(book.isAvailable); // false
book.checkIn();
console.log(book.isAvailable); // true
