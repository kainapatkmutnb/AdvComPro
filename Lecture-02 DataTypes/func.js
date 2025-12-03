function findPerimeter(length, width) {
  const perimeter = 2 * (length + width);
  return perimeter;
}
let result = findPerimeter(6, 7);
console.log(`Perimeter is: ${result}`); // → 26