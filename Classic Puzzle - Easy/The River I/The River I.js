/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let r1 = parseInt(readline());
let r2 = parseInt(readline());

const digitSum = (n) => {
	let sum = 0;
	while (n) {
		digit = n % 10;
		sum += digit;
		n = (n - digit) / 10;
	}
	return sum;
};

do {
	if (r1 < r2) {
		r1 += digitSum(r1);
	} else {
		r2 += digitSum(r2);
	}
} while (r1 != r2);

console.log(r1);
