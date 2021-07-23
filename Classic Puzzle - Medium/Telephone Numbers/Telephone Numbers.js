const insert = (str) => {
	let l = L;
	for (let i = 0; i < str.length; i++) {
		let c = str[i];
		if (l[c] === undefined) {
			C++;
			l[c] = {};
		}
		l = l[c];
	}
};

let C = 0;
let L = {};
let N = parseInt(readline());
for (let i = 0; i < N; i++) {
	let telephone = readline();
	insert(telephone);
}

console.log(C);
