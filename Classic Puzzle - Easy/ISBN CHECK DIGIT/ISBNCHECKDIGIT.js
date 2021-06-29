/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

function isValidISBN(isbn) {
	if (isbn.match(/^[0-9]{13}|[0-9]{10}|[0-9]{9}X$/)) {
		switch (isbn.length) {
			case 10:
				var s = 0;
				for (let i = 0; i < 9; i++) {
					s += isbn[i] * (10 - i);
				}
				s = (11 - (s % 11)) % 11;
				if (s === 10) return isbn[9] === "X";
				return +isbn[9] === s;
			case 13:
				var s = 0;
				for (let i = 0; i < 12; i++) {
					s += isbn[i] * 3 ** (i % 2);
				}
				return +isbn[12] === (10 - (s % 10)) % 10;
		}
	}
	return false;
}

const R = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
	const ISBN = readline();
	if (!isValidISBN(ISBN)) {
		R.push(ISBN);
	}
}

console.log(R.length + " invalid:");
R.map((x) => console.log(x));
