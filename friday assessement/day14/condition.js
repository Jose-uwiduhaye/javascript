let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady)
{
    alert("User ready!");
}


let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
 if (pieces > 0) {
    let total = unitPrice * pieces;
   console.log(total);
 }
 console.log(total);


 let userAge = 23;
  let isFemale = false;
  let points = 703;
  let cartValue = 299;
  let shippingCost = 9.99;
 if (userAge > 21) {
      if (cartValue >= 300 || points >= 500) {
       shippingCost = 0;
    }
 }
 console.log(shippingCost);


 if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
         shippingCost = 0;
    }


    number = float(input("Enter a number: "));




    let c = confirm("Are you ready?");
   if (c) {
       console.log("User ready!");
   } else {
      console.log("User not ready!");
    }


    let d = confirm("Are you ready?");
 if (d) {
    console.log("User ready!");
 }
 if ( d== false) {
    console.log("User not ready!");
 }




 let number = prompt("Enter a number", 0);
 if (number < 10) {
    alert("<10");
 }
  else if (number < 30) {
    alert("<30");
 } 
 else if (number < 60) {
     alert("<60");
 }
  else if (number < 90) {
     alert("<90");
 } 
 else if (number < 100) {
     alert("<100");
 } 
 else if (number == 100) {
     alert("100");
 } 
 else {
     alert(">100");
 }

 let price = 100;
 let ft = price > 50 ? 0 : 5;
 console.log(`price = ${price}, shipping = ${ft}`);




 let gate = prompt("Choose gate: a, b, or c");
 let win = false;
    switch (gate) {
     case "a":
     alert("Gate A: empty");
     break;
     case "b":
     alert("Gate B: main prize");
      win = true;
    break;
     case "c":
    alert("Gate C: empty");
     break;
    default:
              alert("No gate " + String(gate));
 }
 if (win) {
   alert("Winner!");
}