// Ex-02: Create a function that evaluates an equation and returns the answer

function equation(str) {
    return eval(str);
}

// Test cases
console.log(equation("1+1"));        // → 2
console.log(equation("7*4-2"));      // → 26
console.log(equation("1+1+1+1+1"));  // → 5
