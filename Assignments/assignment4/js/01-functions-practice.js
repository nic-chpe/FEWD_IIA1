//STEP 1
let halfNumber = function(num) {
	let result = num/2;
	let msg = `Half of ${num} is ${result}.`;
	console.log(msg);

	return result;
};
// halfNumber(11);

//STEP 2
let squareNumber = function(num) {
	let sq = num*num;
	let msg = `The result of squaring the number ${num} is ${sq}.`
	console.log(msg);

	return sq;
};
// squareNumber(7);

//STEP 3
let percentOf = function(num1, num2) {
	let result = (num1/num2) * 100;
	let msg = `${num1} is ${ num2%num1===0 ? result : result.toFixed(2)}% of ${num2}.`;
	console.log(msg);
	printMsg = msg;

	return result;
};
percentOf(10,0);

//STEP 4
let findModulus = function(num1, num2) {
    let result = (num1%num2);
    let msg = `${num1} divided by ${num2} has a remainder of ${result}.`;
    console.log(msg);
    printMsg = msg;

    return result;
};
findModulus(100,8);

//STEP 5
function sum() {
    sumofNums = 0;
    nums = prompt('Enter any amount of numbers separated by commas.').value.split(",");
    for (i=0; i < nums.length; i++) {
        sumofNums += parseInt(nums[i]);
    }
    return sumofNums;
};
