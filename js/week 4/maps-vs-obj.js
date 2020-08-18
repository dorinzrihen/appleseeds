
console.time("body");
const obj1 = {};

const map1 = new Map();

const nameArr = ["dana","momi","dorin","assaf","roni","ross","manor","ofek","yoni","bob"];

for(let i = 0; i<nameArr.length; i++){
    map1.set(i,nameArr[i]);
    obj1[i] = nameArr[i];
}
console.timeEnd("body");

console.time("obj");
obj1["5"];
console.timeEnd("obj");


console.time("map");
map1.get(5);
console.timeEnd("map");


// map: 0.076ms
// obj: 0.006ms