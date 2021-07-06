function shortestPath(G, c) {
	let minDist = Infinity;
	let min = null;
	for (let i = 0; i < G.length; i++) {
		const dist = Dist(c, G[i]);
		if (minDist > dist) {
			minDist = dist;
			min = i;
		}
	}
	return { ndx: min, dist: minDist };
}

const N = parseInt(readline());
const G = [];

const Dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

for (let i = 0; i < N; i++) {
	G.push(readline().split(" ").map(Number));
}

const first = G.shift();
let sum = 0;
let cur = first;

while (G.length > 0) {
	const { ndx, dist } = shortestPath(G, cur);
	sum += dist;
	cur = G.splice(ndx, 1)[0];
}
console.log(Math.round(sum + Dist(cur, first)));
