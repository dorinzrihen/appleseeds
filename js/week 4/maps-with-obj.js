
const obj1 = {
    name: "bob",
}


const obj2 = {
    name: "eli",
}


const obj3 = {
    name: "dorin",
}

const myMap = new Map();
myMap.set(obj2,"4356");

//for..of loop.
for (const value of myMap){
    console.log(`name: ${value[0].name} ID: ${value[1]}`);
}

console.log(myMap)

//forEach loop
myMap.forEach(([key,value]) => {
    console.log(`name: ${key} ID: ${value}`);
})