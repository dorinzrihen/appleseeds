const people = ["Greg", "Mary", "Devon", "James"];


// //1

// for (const name of people){
//     console.log(name);
// }

//2

// const people2 = [...people];
// people2.splice(people2.indexOf("Greg"),1);
// console.log(people2);

// const people1 = [...people];
// people1.shift();
// //3

// people1.pop();

// //4

// people1.unshift("Matt");

// //5

// people1.push("Dorin");

//6

// const people3 = [...people];


// for (const name of people3){
//     if (name === "Mary"){
//         return;
//     }
// }


// // 7 need matt so i make new array

// const people4 = [...people];
// people4.push("Dorin");
// people4.unshift("Matt");

// const arrayCopy = [...people4].slice(1,2).concat([...people4].slice(3));

//8 
// const maryIndex = people.indexOf("Mary");

// //9
// const fooIndex = people.indexOf("Foo");

//10
// const people5 = [...people];
// people5.splice(people5.indexOf("Devon"),1, ...["Elizabeth","Artie"]);
// console.log(people5);

//11

const withBob = people.concat("Bob");


console.log(withBob);