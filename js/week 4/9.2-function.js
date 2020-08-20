



const randomNum = () => Math.floor(Math.random() * 20) + 1; 

const callbackFun = () => randomNum();


const fun = (num, random) =>{
    let counter = 0;
    let randomNum = random()
    while(randomNum !== num){
        randomNum = random();
        counter ++;
    }
    console.log(`${counter} attempts`)
}

fun(5,callbackFun);