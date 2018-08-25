const j = "aA", stonesStr = "aAAbbbb";
let count = 0;
let jewelMap = new Map(j.split('').map((jewel): [string, boolean]=>[jewel,true]));

count = stonesStr
    .split('')
    .reduce((count, stone)=> jewelMap.get(stone)?++count:count,0);

console.log(count);



