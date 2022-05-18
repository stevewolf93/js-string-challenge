/**
 * Write a JavaScript function to convert ASCII to Hexadecimal format.
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
 */

function ascii_to_hexa (string)   {
	let array = [];
	for (let i = 0; i < string.length; i++) 
     {
		let hexaDeci = Number(string.charCodeAt(i)).toString(16);
		array.push(hexaDeci);
	 }
	return array.join('');
}

   console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030