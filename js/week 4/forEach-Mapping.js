

// 1. Write a function called doubleValues which accepts an array and returns a
// new array with all the values in the array passed to the function doubled.

// const myArr = [1,3,4,5,6,7,8,4,5,6,3,5,6];

// function doubleValues(arr){
//     return arr.map(function(num) {return num*2});
// }

// const myNewArr = doubleValues(myArr);
// console.log(myNewArr);

// 2. Write a function called onlyEvenValues which accepts an array and returns
// a new array with only the even values in the array passed to the function.


// function onlyEvenValues(arr){
//     const newArr = [];
//     arr.forEach(element => {
//         element % 2 === 0 && newArr.push(element);
//     })
//     return newArr;
// }

// const evenValue = onlyEvenValues(myArr);
// console.log(evenValue);

// 3. Write a function called addKeyAndValue which accepts an array of objects,
// a key and a value as arguments. The function should return the array passed
// to the function with the new key and value added to each object.

// const arrOfObj = [{key: "val",key1:"val1",key3: "val",key14:"val1",},
// {key: "BOB1",key1:"BOB11",key3: "BOB1",key14:"BOB11",},
// {key: "BILL",key1:"BILL1",key3: "BILL",key14:"BILL1",},
// {key: "Dorin",key1:"Dorin1",key3: "Dorin",key14:"Dorin1",},];

// function addKeyAndValue (arr, key, value ) {
//     arr = arr.map(element => {
//         element[key] = value;
//     });
// }
// addKeyAndValue(arrOfObj,"Hi","WORK")
// console.log(arrOfObj);


// 4. Write a function shiftLetters that takes a string and uses .map to return an
// encoded string with each letter shifted down the alphabet by one.

const myStr = "dsgsvrgHhsdfvJJfhdf";

function shiftLetters(string){
    let list = string.split("");
    let x =  list.map(function(x){
        return String.fromCharCode(x.charCodeAt(0)-1)
    })
    return x.join('');
}

const x = shiftLetters(myStr);
console.log(x)