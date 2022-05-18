/**
 * Write a JavaScript function to truncate a string to a certain number of words.
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
 */

function truncate (string , number) {
 let array = string.split(" ");
 let arrayTruncate = []
 for (i=0; i < number; i++) {
   arrayTruncate.push(array[i])
 }
 return arrayTruncate.join(" ")
}
console.log(truncate("The quick brown fox jumps over the lazy dog", 4))

