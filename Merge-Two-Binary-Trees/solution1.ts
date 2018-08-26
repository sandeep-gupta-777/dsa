let words = ["gin", "zen", "gig", "msg"];

function f(words) {
    let MORSE_CODE_LIST = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let i = 0;
    let ALPHABET_MORSE_CODE_MAP = new Map(MORSE_CODE_LIST.map((morseCode):[string, string]=>{
        let char = String.fromCharCode('a'.charCodeAt(0)+ i++);
        return [char, morseCode];
    }));

    let transformations = words.map((word)=>{
        return word.split('').map((char)=> ALPHABET_MORSE_CODE_MAP.get(char)).join('');
    });
    return new Set(transformations).size;
}

console.log(f(words));