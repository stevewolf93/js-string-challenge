/**
 * Write a JavaScript function to alphabetize a given string.
 *Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
 *console.log(alphabetize_string("United States"));
 *"SUadeeinsttt"
 */

function alphabetize(string) {
  return string.split('').sort().join('').trim();
}
console.log(alphabetize("United States"));
console.log(alphabetize("Rindfleisch etikettierungs überwachungs aufgaben übertragungs gesetz"));
console.log(alphabetize("Pneumonoultramicroscopicsilicovolcanoconiosis"));
console.log(alphabetize("الجمال"));
console.log(alphabetize("美麗的"));
console.log(alphabetize("美しい"));
