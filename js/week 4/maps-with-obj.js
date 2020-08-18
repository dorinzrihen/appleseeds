
const obj1 = {
    name: "bob",
}


const obj2 = {
    name: "eli",
}


const obj3 = {
    name: "dorin",
}

const myMap = ([[obj1,123],[obj2,456],[obj3,567]]);


//for..of loop.
for (const value of myMap){
    console.log(`name: ${value[0].name} ID: ${value[1]}`);
}

//forEach loop
myMap.forEach(function(current){
    console.log(`name: ${current[0].name} ID: ${current[1]}`);
})