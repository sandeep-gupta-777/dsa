/*
* this is O(n2) solution
*
* */
var J = "aA", S = "aAAbbbb";
var numJewelsInStones = function (J, S) {
    var count = 0;
    if (!J || !S)
        return 0;
    S.split('').forEach(function (charS) {
        J.split('').forEach(function (charJ) {
            if (charJ === charS)
                ++count;
        });
    });
    return count;
};
console.log(numJewelsInStones(J, S));
;
