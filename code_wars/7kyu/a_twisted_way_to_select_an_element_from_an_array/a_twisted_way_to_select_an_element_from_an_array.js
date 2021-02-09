function select(arrSearch, arrTake) {
    return (
			arrTake.find((ele) => ele[0] === arrSearch.sort().reverse()[2][2]) ||
			'Nothing here'
		); 
    

}


console.log(
	select(
		['banana', 'rose', 'orange', 'apple'],
		[]
	)
);