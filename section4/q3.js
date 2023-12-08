let a = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];


console.log("All numbers:");
console.log(a);


console.log("\nEven numbers:");
for (let i = 0; i < numbers.length; i++) {
  if (a[i] % 2 === 0) {
    console.log(a[i]);
  }
}


console.log("\nNumbers larger than 10 and smaller than 60:");
for (let i = 0; i < a.length; i++) {
  if (a[i] > 10 && a[i] < 60) {
    console.log(a[i]);
  }
}