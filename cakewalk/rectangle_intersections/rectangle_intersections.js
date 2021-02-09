
// const rec1 = {
//     leftX: 1,
//     bottomY: 1,
//     width: 6,
//     height: 3
// }

// const rec2 = {
// 	leftX: 5,
// 	bottomY: 2,
// 	width: 3,
// 	height: 6,
// };

// rec1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
// rec2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };

rec1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rec2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };

function findRecOverlap(rec1, rec2) {
	let largerX = null;
	let smallerX = null;
	if (rec1.leftX > rec2.leftX) {
		largerX = rec1;
		smallerX = rec2;
	} else {
		largerX = rec2;
		smallerX = rec1;
	}
	if (largerX.leftX - (smallerX.leftX + smallerX.width) >= 0) {
        console.log("X");
		return null;
	}

	let largerY = null;
	let smallerY = null;
	if (rec1.bottomY > rec2.bottomY) {
		largerY = rec1;
		smallerY = rec2;
	} else {
		largerY = rec2;
		smallerY = rec1;
	}
	if (largerY.bottomY - (smallerY.bottomY + smallerY.height) >= 0) {
        console.log("Y");
		return null;
    }

   
    let maxHeight = largerY.bottomY + largerY.height
    let maxWidth = largerX.leftX + largerX.width;
    let xOverlap = largerX.width - (maxWidth - (smallerX.leftX + smallerX.width))
     let yOverlap =
                largerY.height - (maxHeight - (smallerX.bottomY + smallerX.height));
    let Ox = largerX.leftX
    let Oy = largerY.bottomY
    console.log(`Ox: ${Ox}  Oy: ${Oy} WidthO: ${xOverlap} Height0: ${yOverlap}`);
    
    
}
console.log(findRecOverlap(rec1, rec2));
