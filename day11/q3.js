



let booleanVarLiteral = true;
let booleanVarConstructor = new Boolean(false);

// Number
let numberVarLiteral = 42;
let numberVarConstructor = new Number(3.14);


let bigIntVarLiteral = 9007199254740991n;
let bigIntVarConstructor = BigInt(12345678901234567890);

// String
let stringVarLiteral = "hirwa, nora!";
let stringVarConstructor = new String("jose");

// undefined
let undefinedVarLiteral = undefined;
let undefinedVarConstructor = new Object();

console.log(` ${booleanVarLiteral} - ${typeof booleanVarLiteral}`);
console.log(` ${numberVarLiteral} - ${typeof numberVarLiteral}`);
console.log(` ${bigIntVarLiteral} - ${typeof bigIntVarLiteral}`);
console.log(` ${stringVarLiteral} - ${typeof stringVarLiteral}`);
console.log(` ${undefinedVarLiteral} - ${typeof undefinedVarLiteral}`);

