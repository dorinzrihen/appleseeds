

function stringCallBack(str){
    console.log(str);
}


const fun = (str,callbackbunc) =>{
    if(typeof callbackbunc === 'function'){
        callbackbunc(str);
    }
}


fun('YO', stringCallBack);