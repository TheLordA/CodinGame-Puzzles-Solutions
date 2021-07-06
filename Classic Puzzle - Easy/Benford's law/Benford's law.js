const N = parseInt(readline());

let res = false;

const cnt = new Uint32Array(10);
const bnf = [0.0, 0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];

for (let i = 0; i < N; i++) {
	cnt[readline().match(/\d/)[0]]++;
}

for (let i = 1; i < 10; i++) {
	if (Math.abs(bnf[i] - cnt[i] / N) > 0.1) {
		res = true;
		break;
	}
}
console.log(res);
