// function domainName(url) {
//     let match = url.match(/(https?:\/\/)?(w{3}\.)?([\w\d-]+)(\.[\w\.]+)/);
//     console.log(match);
//     return url.replace(/(https?:\/\/)?(w{3}\.)?([\w\d-]+)\.[\w\.]+/, "$3");
// }



function domainName(url) {
	let match = url.match(/(https?:\/\/)?(w{3}\.)?([\w\d-]+)/);
	console.log(match);
	return url.replace(/(https?:\/\/)?(w{3}\.)?([\w\d-]+)\.[\w\.]+/, '$3');
}








console.log(domainName('http://www.google.co.jp'));

// function domainName(url) {
//     return url.match(/(https?:\/\/)?(w{3}\.)?([\w\d]+)/)[3];
// }

// console.log(domainName('http://www.google.co.jp'));

// function domainName(url) {
// 	let match = url.match(/(?<=(http:\/\/)|(http:\/\/www\.)).+(?=(\.[\.\w+]))/);
//     console.log(match[0]);
// }

// console.log(domainName('http://google.co.jp'));
