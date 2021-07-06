/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const horses = [];

let minDist = Infinity;
for (let i = 0; i < N; i++) {
	const [Vi, Ei] = readline().split(" ").map(Number);
	for (let { Vj, Ej } of horses) {
		const dist = Math.abs(Vi - Vj) + Math.abs(Ei - Ej);
		minDist = Math.min(minDist, dist);
	}
	horses.push({ Vj: Vi, Ej: Ei });
}
console.log(minDist);
