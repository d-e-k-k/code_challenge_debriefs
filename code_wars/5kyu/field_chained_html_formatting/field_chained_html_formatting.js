const curryingFunc = (tag, htmlArray = []) => (...text) => {
	htmlArray.push(tag);
	console.log(htmlArray);
	return `<${tag}>${text.join('')}</${tag}>`;
};

// const curryingFuncTwo = (tag) => (...text) => {
// return `<${tag}>${/* next element */}</${tag}>`;
// }

const Format = { tags: ['div', 'h1', 'p', 'span'] };
// function createTagsFunctions()

Format.tags.forEach((tag) => {
	let htmlArray = [];
	htmlArray.push(tag);
	console.log(htmlArray);
	return (Format[tag] = Format);
});

console.log(Format.h1.div.div.div.div.span);

// Format.tags.forEach((tag) => (Format[tag] = () => {}));

// console.log(Format.div.div.div());

// Format = {
//     tags: ['div', 'h1', 'p', 'span'],
//     div: function(){}(),
//     h1: ,
//     span: ,
//     p: ,

// };

// Format.tags.forEach((tag) => (Format[tag] = curryingFuncTwo(tag)()))

// module.exports = Format;

// Format.h1.div('Foo');

// Format {
//     div: {
//         h1:function(){}(),
//     }
// }

// Format.div.h1()
// Format.div.prop
