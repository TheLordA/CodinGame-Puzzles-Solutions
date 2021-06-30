const [n, m, c] = readline().split(" ").map(Number);

const cst = readline().split(" ").map(Number);
const seq = readline().split(" ").map(Number);

let sum = 0;
let max = 0;

seq.forEach((id) => {
	sum += cst[id - 1];
	cst[id - 1] *= -1;
	max = Math.max(sum, max);
});

if (max > c) {
	console.log("Fuse was blown.");
} else {
	console.log("Fuse was not blown.");
	console.log("Maximal consumed current was " + max + " A.");
}
