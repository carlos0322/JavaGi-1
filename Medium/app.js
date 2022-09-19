const sentence = prompt ("type a message");
const upperSentence = sentence.toLocaleUpperCase();
const lowerSentence = sentence.toLowerCase();

if (sentence === upperSentence) {
    console.log ('YELLING')
} else if ( sentence === lowerSentence) {
    console.log('whispering')
} else {
    console.log('neither')
}