

function leapYear(year){
    if(year%4 === 0){
        if((year% 100 === 0) && (year% 400 !== 0)){
            return "This is not a leap year."
        }
        return "It is indeed a leap year"
    }
    return "This is not a leap year.";
}


// console.log(leapYear(2012));
// console.log(leapYear(2100));
// console.log(leapYear(2400));
// console.log(leapYear(4));
// console.log(leapYear(400));
// console.log(leapYear(100));
