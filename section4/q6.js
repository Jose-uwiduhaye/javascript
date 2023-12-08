
while (true) {

    let operation = prompt("Enter an operation (+, -, *, /) or 'Q' to quit:");
  
   
    if (operation.toUpperCase() === 'Q') {
      break;  
    }
  
  
    let operand1 = parseFloat(prompt("Enter the first operand:"));
    let operand2 = parseFloat(prompt("Enter the second operand:"));
  
   
    let result;
    switch (operation) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
       
        if (operand2 !== 0) {
          result = operand1 / operand2;
        } else {
          alert("Error: Division by zero");
          continue;  
        }
        break;
      default:
        alert("Invalid operation. Please enter +, -, *, /, or Q to quit.");
        continue; 
    }
  
 
    alert(`Result: ${result}`);
  }
  