let booleanConstructor = new Boolean(false);

// Number
let numberLiteral = 42;
let numberConstructor = new Number(3.14);

// BigInt
let bigIntLiteral = 9007199254740991n;
let bigIntConstructor = BigInt(12345678901234567890);

// String
let stringLiteral = "hirwa, nora!";
let stringConstructor = new String("jose");

// Undefined
let undefinedValue = undefined;

// Displaying the values
console.log("Boolean (Literal):", booleanLiteral);
console.log("Boolean (Constructor):", booleanConstructor.valueOf());
console.log("Number (Literal):", numberLiteral);
console.log("Number (Constructor):", numberConstructor.valueOf());
console.log("BigInt (Literal):", bigIntLiteral);
console.log("BigInt (Constructor):", bigIntConstructor);
console.log("String (Literal):", stringLiteral);
console.log("String (Constructor):", stringConstructor.valueOf());
console.log("Undefined:", undefinedValue);