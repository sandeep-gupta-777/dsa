var j = "aA", stonesStr = "aAAbbbb";
var count = 0;
var jewelMap = new Map(j.split('').map(function (jewel) { return [jewel, true]; }));
count = stonesStr
    .split('')
    .reduce(function (count, stone) { return jewelMap.get(stone) ? ++count : count; }, 0);
console.log(count);
