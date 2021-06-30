/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let n = parseInt(readline());

let s = "";

do {
	// negative digits
	let r = (n + 30000) % 3;
	// Handle carry
	n -= [0, 1, -1][r];
	// Divide for base change
	n = (n / 3) | 0;
	// Select the correct digit and add in reverse order
	s = "01T"[r] + s;
} while (n != 0);

console.log(s);
