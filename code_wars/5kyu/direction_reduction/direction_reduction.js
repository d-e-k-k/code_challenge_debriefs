function dirReduc(arr, done = false) {
    if(done){
        return arr
    }
	for (let i = 0; i < arr.length; i++) {
		if (
			(arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
			(arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') ||
			(arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
			(arr[i] === 'WEST' && arr[i + 1] === 'EAST')
		) {
			arr.splice(i, 2);
			i = 0;
		} else {
			done = true;
		}
	}
    console.log(done);
    return dirReduc(arr, done);
	// console.log(done);
	// console.log(arr);
}

// function dirReduc(arr){

// }

console.log(
	dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
	['WEST']
);
