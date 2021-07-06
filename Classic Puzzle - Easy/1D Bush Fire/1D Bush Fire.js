const N = parseInt(readline());
for (let i = 0; i < N; i++) {
	const drops = readline().match(/f.f|f{1,2}/g);
	console.log(drops !== null ? drops.length : 0);
}
