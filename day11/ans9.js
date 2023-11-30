let stringValue = "1234";

let numberValue = Number(stringValue);

let bigIntValue = BigInt(numberValue);


let booleanValue = Boolean(bigIntValue);
console.log("String:", stringValue);
console.log("Number:", numberValue);
console.log("BigInt:", bigIntValue);
console.log("Boolean:", booleanValue);