

function steps(n){
    for (i = 1; i<n+1; i++){
        console.log(`${'#'.repeat(i)}${' '.repeat(n-i)}`);
    }
}

steps(10)
