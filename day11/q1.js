
let booleanLit = true;
let booleanConst = new Boolean(false);


let Literal = 42;
let Constructor = new Number(3.14);


let bigInt = 400698700n;
let bigIntCon = BigInt(19758576666);


let stringLit = "hirwa, nora";
let stringCons = new String("jose");


let undefinedValue = undefined;

console.log("Boolean Literal:", booleanLit);
console.log("Boolean Constructor:", booleanConst.valueOf());

console.log("BigInt Literal:", bigInt);
console.log("BigInt Constructor:", bigIntCon);
console.log("String Literal:", stringLit);
console.log("String Constructor):", stringCons.valueOf());
console.log("Undefined:", undefinedValue);31