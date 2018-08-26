let toLowerCase = function(str) {
    return str.split('').map((char)=>{
        let currentCharCode = char.charCodeAt(0),
            aCharCode = 'a'.charCodeAt(0),
            zCharCode = 'z'.charCodeAt(0),
            ACharCode = 'A'.charCodeAt(0),
            ZCharCode = 'Z'.charCodeAt(0);
        let isCharBetweenAnZ = currentCharCode>=ACharCode && currentCharCode <= ZCharCode,
            isCharBetweenanz = currentCharCode>=aCharCode && currentCharCode<=zCharCode;
        if((!isCharBetweenAnZ && !isCharBetweenanz) ) return char;
        return currentCharCode<aCharCode?String.fromCharCode(currentCharCode+(aCharCode-ACharCode)):char;
    }).join("");
};
console.log(toLowerCase("al&phaBET"));

/*
* Hint
* A-----Z----a----z
* */