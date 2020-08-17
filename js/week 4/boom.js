


function boom(num){
    for (let i = 1; i<num+1 ; i++){
        if(i%7 === 0){
            if((i.toString()).includes('7')){
                console.log("BOOM-BOOM");
            }
            else{
                console.log("boom");
            }
        }
        else{
            console.log(i);
        }
    }
}


boom(100);