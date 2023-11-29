
let year = 1990;
console.log(typeof year);  // -> number

let name = "Alice";
console.log(typeof name);  // -> string
console.log(typeof "Bob");  // -> string

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);            // -> 1234567890000000000000n
console.log(typeof big);     // -> bigint

console.log(big2);           // -> 1n
console.log(7n / 4n); 


  let  country  =  "Malawi";
  let continent  =  'Africa';
console.log(country);  //  ->  Malawi
 console.log(typeof country);  //  ->  string
 console.log(continent);  //  ->  Africa
 console.log(typeof continent);  //  ->  string




 let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
  let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
  
 console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
  console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
  
  let  path  =  "C:\\Windows";
 console.log(path);  //  ->  C:\Windows





 let  path1  =  "C:\\Windows"  -  "Windows";
 console.log(path1);  //  ->  NaN
 
let  test  =  "100"  -  "10";
 console.log(test);  //  ->  90
 console.log(typeof  test);  //  ->  number


 let  path2  =  "C:\\"  +  "Windows";
 console.log(path2);  //  ->  C:\Windows
   
 let  test1  =  "100"  +  "10";
 console.log(test1);  //  ->  10010
 console.log(typeof  test1);  //  ->  string




 let  path3  =  "C:\\"  +  "Windows";
  console.log(path);  //  ->  C:\Windows
  
 let  test2  =  "100"  +  "10";
  console.log(test2);  //  ->  10010
console.log(typeof  test2);  //  ->  string

let  country1  =  "Malawi";
 let  continent1  =  "Africa";
  
 let  sentence  =  `  ${country1}  is  located  in  ${continent1}.`;
 console.log(sentence);  //  ->  Malawi  is  located  in  Africa.


 console.time();
console.log("test  console");  //  ->  test  console
 console.timeEnd();  //  ->  default:  0.108154296875  ms




 let  river  =  "Mekong";
 let  character  =  river.charAt(2);
 console.log(character);  //  ->  k





 let  str  =  "java  script  language";
 
 console.log(str.length);  //  ->  20
 console.log('test'.length);  //  ->  4
   
 console.log(str.charAt(0));  //  ->  'j'
 console.log('abc'.charAt(1));  //  ->  'b'
   
console.log(str.slice(0,  4));  //  ->  'java'
 console.log('test'.slice(1,  3));  //  ->  'es'
   
 console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
 console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']



 let declaredVar4;
 console.log(typeof declaredVar4);  // -> undefined
 
 declaredVar4 = 5;
 console.log(typeof declaredVar4);  // -> number
 
 // Using typeof with a non-existent variable
 console.log(typeof notDeclaredVar4);  // -> undefined
 let declaredVar4;
console.log(typeof declaredVar4);  // -> undefined
4 = 5;
console.log(typeof declaredVar4);  // -> number

// Using typeof with a non-existent variable
console.log(typeof notDeclaredVar4);  // -> undefined




const str = String();
const num = Number();
 const bool = Boolean();
console.log(str); // ->
console.log(num); // -> 0
console.log(bool); // -> false

 const big1 = BigInt(42);
 const big2 = BigInt(); // -> Uncaught TypeError: Cannot convert undefined to a BigInt


 length

