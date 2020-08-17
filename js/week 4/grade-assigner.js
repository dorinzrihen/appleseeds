

function myGrade(grade){
    if(grade <= 64){
        return "F";
    }
    else if(grade <= 69 && grade >= 65){
        return "D";
    }
    else if(grade <= 79 && grade >= 70){
        return "C";
    }
    else if(grade <= 89 && grade >= 80){
        return "B";
    }
    else{
        return "A";
    }
}
