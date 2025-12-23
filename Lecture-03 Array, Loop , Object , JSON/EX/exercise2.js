let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true, "Apple"];
let values3 = ["Mars", 9, "Apple"];

// หาข้อมูลที่ซ้ำกันในทุก Array
let result = [];

for (let i = 0; i < values1.length; i++) {
  // เช็คว่าค่าใน values1 มีอยู่ใน values2 และ values3 หรือไม่
  if (values2.includes(values1[i]) && values3.includes(values1[i])) {
    result.push(values1[i]);
  }
}

console.log(result);