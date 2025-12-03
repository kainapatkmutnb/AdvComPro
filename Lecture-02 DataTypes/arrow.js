const a = 10 
const b = 5

const add = function(x, y) {
    return x + y;
}

const addArrow = (x, y) => {
    const result = x + y;
    return result;
}

console.log(`Addition: ${add(a, b)}`); // → Addition: 15
console.log(`Addition using Arrow Function: ${addArrow(a, b)}`); // → Addition using Arrow Function: 15
console.log(`Subtraction using Arrow Function: ${subtract(a, b)}`); // → Subtraction using Arrow Function: 5