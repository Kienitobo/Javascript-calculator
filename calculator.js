let firstNumber=prompt('first number')
let secondNumber=prompt('second number')
let operator=prompt("please enter an operator from the list (+, -, *, /,%)")
let x=parseInt(firstNumber)
let y=parseInt(secondNumber)

if (operator=='+') {alert(x + y);}
else if(operator=='-') {alert(x - y);}
else if(operator=='/') {alert(x / y);}
else if(operator=='*') {alert(x * y);}
else if(operator=='%') {alert(x % y);}

alert('Press F5 to re-run calculator')