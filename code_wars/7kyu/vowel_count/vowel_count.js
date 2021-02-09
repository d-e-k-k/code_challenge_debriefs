// function getCount(str) {
//     return str.match(/[aeuio]/gi)?.length || 0
// }

function getCount(str) {
	return (str.match(/[aeuio]/gi)||[]).length;
}

console.log(getCount('mpx'));