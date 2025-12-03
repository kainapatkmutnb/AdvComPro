const status = 200;

if (status === 200) { 
    console.log("OK!");
} else if (status === 400) {
    console.log("Bad Request");
} else {
    console.log("Other Status");
}

switch (status) {
    case 200:
        console.log("OK!");
        break;
    case 400:
        console.log("Bad Request");
        break;
    default:
        console.log("Other Status");
}

const result = (status === 200) ? "OK!" : "Not OK!";
console.log(result);