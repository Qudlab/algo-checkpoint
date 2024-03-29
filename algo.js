// Step 1: Initialize Counters
let lengthCounter = 0;
let wordCounter = 0;
let vowelCounter = 0;

//Step 2: Read the input sentence character by character
let sentence = "hello world; my name is Qudus a web developer.";

for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
// Step 3: Increment lengthCounter by 1
lengthCounter++;

//Step 4: Check if the character is a space
if (character === ''){
    //Increment wordCounter by 1
    wordCounter++;
}

//Step 5: Check if the character is a vowel
if (character.match(/[aeiou]/i)) {
    //increment vowelCounter by 1
    vowelCounter++;
}

//Step 6: Check if the character is the point
if (character === '.') {
    //increment lengthCounter by 1 to account for the point
    lengthCounter++;
}
}
//Step 7: Print the results
console.log("length of the sentence:", lengthCounter);
console.log("Number of the words in the sentence:", wordCounter + 1);
console.log("Number of the vowels in the sentence:", vowelCounter);

