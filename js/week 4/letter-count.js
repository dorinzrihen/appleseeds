const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const objOutput = {};


let newArr = array.join(" ");
newArr = newArr.toLowerCase();
newArr = newArr.split("");



for (const char of newArr){
    if((/[a-z]/).test(char)){
        if(objOutput[char]){
            objOutput[char] ++ ;
        }
        else{
            objOutput[char] = 1;
        }
    }
}

//Extra:
const highFrequency = (obj) => {
    let max =  Math.max(...Object.values(obj));
    let index = (Object.values(obj)).indexOf(max);
    let char = Object.keys(obj)[index];
    return [`${char} have ${max}`];
   
} 


console.log(objOutput)
console.log(highFrequency(objOutput))