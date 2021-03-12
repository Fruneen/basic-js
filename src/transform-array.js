const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw Error;
	let array = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "--double-next") {
			array.push(arr[i + 1]);
		} else if (arr[i] == "--double-prev") {
			array.push(array[array.length - 1]);
		} else if (arr[i - 1] == "--discard-next") {
			array.push("Empty value");
		} else if (arr[i + 1] == "--discard-prev") {
			array.push("Empty value");
		} else array.push(arr[i]);
	}
	let finalArray = array.filter(
		(each) =>
			each != "Empty value" &&
			each != "--discard-next" &&
			each != "--discard-prev" &&
			each != undefined
	);

	return finalArray;
};