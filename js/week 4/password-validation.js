
// if/else
function passwordValidation(pass){
    if (pass.length > 7){
        return `Strong`
    }
    else{
        return `weak`
    }
}


//ternary conditional expression
const myPass = "12";

const pass2 = myPass.length > 7? `Strong`: `weak`;
console.log(pass2);

console.log(passwordValidation(myPass));

// i dont know the 3.


const pass4 =  (myPass) => {
    return myPass.length > 7 && /[A-Z]/.test(myPass)
        ?"Very Strong."
        : myPass.length > 7 ? "Strong" :"weak";
}
 

console.log(pass4(myPass));