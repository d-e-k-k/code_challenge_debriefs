function arrayDiff(a, b) {

    return a.filter(ele => !b.includes(ele))

}

console.log(arrayDiff([3, 4], [3]));
