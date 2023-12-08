<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Console Output</title>
</head>
<body>
<script>
    let firstNumber = parseInt(prompt("Enter the first number:"));
    let lastNumber = parseInt(prompt("Enter the last number:"));
 

    if (isNaN(firstNumber) || isNaN(lastNumber) || firstNumber <= lastNumber) {
        alert("Invalid input. Please make sure the first number is greater than the last number.");
    } else {
 

        for (let i = firstNumber; i >= lastNumber; i -= 10) {
            console.log(i);
        }
    }
</script>
</body>