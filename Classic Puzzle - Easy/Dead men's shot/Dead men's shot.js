function inPoly(Px, Py, poly) {
	let flag = 0;

	for (let i = 0; i < poly.length; i++) {
		const j = (i + 1) % poly.length;

		// Current point A
		const Ax = poly[i][0];
		const Ay = poly[i][1];

		// Successive point B
		const Bx = poly[j][0];
		const By = poly[j][1];

		// 2D Cross product
		const d = (Px - Ax) * (By - Ay) - (Py - Ay) * (Bx - Ax);

		// Flag the sign in a bitmap
		flag |= 1 << (d <= 0);

		if (flag === 3) {
			return false;
		}
	}
	return true;
}

const E = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
	E.push(readline().split(" ").map(Number));
}

const M = parseInt(readline());
for (let i = 0; i < M; i++) {
	const [x, y] = readline().split(" ").map(Number);
	console.log(inPoly(x, y, E) ? "hit" : "miss");
}
