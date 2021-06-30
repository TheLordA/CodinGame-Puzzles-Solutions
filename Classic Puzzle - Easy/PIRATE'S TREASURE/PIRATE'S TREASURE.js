/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const W = parseInt(readline());
const H = parseInt(readline());

const map = [];
for (let i = 0; i < H; i++) {
	map.push(readline().split(" ").map(Number));
}

const getCell = (row, col) => (map[row] === undefined || map[row][col] === undefined ? 1 : map[row][col]);

function solution(map) {
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			if (
				map[i][j] === 0 &&
				getCell(i - 1, j - 1) &&
				getCell(i - 1, j) &&
				getCell(i - 1, j + 1) &&
				getCell(i, j - 1) &&
				// i,j == 0
				getCell(i, j + 1) &&
				getCell(i + 1, j - 1) &&
				getCell(i + 1, j) &&
				getCell(i + 1, j + 1)
			) {
				console.log(j, i);
				return;
			}
		}
	}
}

solution(map);
