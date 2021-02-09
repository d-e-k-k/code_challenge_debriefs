function humanReadable(seconds) {    
	return [Math.floor(seconds/(60*60)), Math.floor(seconds%(60*60)/60) , seconds%60].map(ele => {
        if (ele < 10) {
			return `0${ele.toString()}`;
		} else {
			return ele.toString();
		}
    }).join(":");
}

console.log(humanReadable(86399));
