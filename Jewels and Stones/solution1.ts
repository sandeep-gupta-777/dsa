/*
* this is O(n2) solution
*
* */
const J = "aA", S = "aAAbbbb"
let numJewelsInStones = function(J, S) {
    let count = 0;
    if(!J || !S) return 0;

    S.split('').forEach(function (charS) {
        J.split('').forEach(function (charJ) {
            if (charJ === charS)
                ++count;
        });
    });
    return count;

};
console.log(numJewelsInStones(J,S));;