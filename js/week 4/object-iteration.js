

const obj1 = {
    one: "hi",
    two: "hi2 ",
    tree: "hi3 oowo",
}

let newObj={}



function swapsObj(obj){
    for (const data in obj){
        newObj[obj[data]] = data;
    }
}

swapsObj(obj1);
console.log(newObj)