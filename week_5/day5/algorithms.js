// Algorithm one: Create a function that will check if two arguments are anagrams of each other (a word or phrase that is formed by rearranging the letters of another word).
/*
1. need to get each letter
2. see if you can build the other word with the letters
*/

const isAnagram = (string1, string2) => {
	word1 = string1.split(", ");
	word2 = string2.split(", ");

	for (let i = 0; i <= string1.lenth; i++) {
		let newWord1 = word1[i];
		let sortedWord1 = newWord1.split("").sort().join("");

		for (let n = 0; n <= string2.length; n++) {
			if (i === n) {
				continue;
			}

			let newWord2 = word2[j];
			if (sortedWord1 === newWord2.split("").sort().join("")) {
				return true;
			} else {
				return false;
			}
		}
	}
};

// if (word2 == string2) {
// 	return word2;
// } else {
// 	return word2;
// }
// };
// Pure letter strings
console.log(isAnagram("hello", "olleh")); // true
// console.log(isAnagram("listen", "lidfje")); // false
// console.log(isAnagram("Listen", "silent")); // true
// // String phrases with spaces (Needs to ignore spaces)
// console.log(isAnagram("dorMITORY", "dirty room")); // true
// // String phrases with punctuation (Needs to ignore punctuation).
// console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true
// console.log(isAnagram("dkj fsdjfh", "this doesn't work")); // false
