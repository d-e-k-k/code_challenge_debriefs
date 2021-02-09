// function upArray(arr) {
//     if(arr.some(ele => ele < 0 || ele >= 10)){
//         return null
//     }
// 	return (parseInt(arr.join('')) + 1).toString().split("").map(ele => parseInt(ele));
// }

// console.log(upArray([4, 3, 2, 5]));

let arr = [1, 2, 5]

arr.splice(-1,1)

console.log(arr);