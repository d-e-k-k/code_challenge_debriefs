// function isTriangle(a, b, c) {
// 	let array = [a, b, c].sort((a, b)=> a - b);
//     return array[0] + array[1] > array [2] ? true: false;
    
// }

function isTriangle(a, b, c) {
    // console.log([a,b,c].sort((a,b)=> b-a));
	return [a,b,c].sort((a,b) => b-a).reduce((a,b) => a-b) < 0 ? true: false;
}

console.log(isTriangle(1,2,3));
