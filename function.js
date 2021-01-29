//add two numbers
//declare a function
function add(a, b){
	return a + b ;
	}
	//take  input from user
	let number1 = parseFloat(prompt("enter first number: "));
	let number2 = parseFloat(prompt("enter second number: "));
	//call a function 
	let result = add(number1, number2);
	// display the result
	console.log("the sum is" + result);
	