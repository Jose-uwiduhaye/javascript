//let age=[2,3,4,5,8];
//let sum=0;
//let average;
//for (let i=0;i<age.length;i++){
    
  //  sum+=age[i];
    //average=sum/age.length;
//}

//console.log("the average"+average);

let user=[];
let sum=0;
let avg=0;
for (let i=0;i<3;i++){
    let age=prompt("enter your age:");
    let userage=number(age);
    user.push(userage);
    sum+=user[i];
    avg=sum/user.length;
}
alert("the average=" +avg);

//other way

let age=0;
let avg=0;
let sum=0;
let i=0;
let nbr=prompt("enter number of student");
for(i;i<nbr;i++){


age=number(prompt("enter age"));
sum+=age;
}
avg=sum/i;
console.log("the avg" +avg);