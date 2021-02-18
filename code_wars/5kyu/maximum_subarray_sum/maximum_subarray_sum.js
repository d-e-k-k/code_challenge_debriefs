const maxSequence = function (arr) {
	let maxSum = 0;
    arr.forEach((num, i) => {
        const subArr = arr.slice(i);
        for(let j = subArr.length; j>0; j--){
            const sectionSum = subArr.slice(0, j).reduce((a,b) => a + b)
            if(sectionSum > maxSum) maxSum = sectionSum;
        }
    })
	return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
