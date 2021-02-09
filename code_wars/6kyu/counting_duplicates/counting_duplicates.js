function duplicateCount(text) {
	let counter = 0
	for(let i = 0; i<text.length; i ++){
		const regex = new RegExp(`${text[i]}`, "gi")
		if(text.match(regex).length > 1){
			text = text.replace(regex, "")
			counter += 1
			i=0
		}
	
	}
		return counter
}

// function duplicateCount(text) {
// 	const regex = new RegExp(`${text[0]}.*${text[0]}`, 'gi');
// 	const match = (text.match(regex));
// 	console.log(match);

// }

console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('bcdbbe'));
console.log(
	duplicateCount('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')
);