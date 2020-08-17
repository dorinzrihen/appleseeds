


function teamWinner(team1,team2){
    let totalTeam1 = 0;
    let totalTeam2 = 0;

    for (let i = 0; i < team1.length; i++) {
        totalTeam1 += team1[i];
    }

    for (let i = 0; i < team2.length; i++) {
        totalTeam2 += team2[i];
    }

    if((totalTeam1/team1.length) > (totalTeam2/team2.length)){
        return `Jhon Team win with ${totalTeam1/team1.length} average score`;
    }

    else if((totalTeam1/team1.length) < (totalTeam2/team2.length)){
        return `Mike Team win with ${totalTeam2/team2.length} average score`;
    }
    return `Same average, you both did well :) `      
}

let jhonTeamScore = [89,120,103];
let mikeTeamScore = [116,94,123];

console.log(teamWinner(jhonTeamScore,mikeTeamScore));





function improveWinner(myList){
    let avg_score = [];
    let calc = 0;

    let bestScore = 0;
    let bestTeams = 0;

    for ( let i = 0; i<myList.length ; i++){
        for ( let j = 0 ; j < myList[i].length ; j ++){
            calc += myList[i][j];
        }
        avg_score[i] = Math.round(calc/myList[i].length);
        calc = 0;
    }
    for ( let i = 0; i<avg_score.length ; i++){
        if (avg_score[i] >= bestScore){
            bestScore = avg_score[i];
            bestTeams = i+1;
        }
    }

    console.log(`the best is TEAM ${bestTeams} have ${bestScore} points`);

}




let one = [23,78,9,25,45,56,76];
let two =  [546,7,75,67,89,675,4];
let tree = [76,76,5,87,32,345,5];
let four = [546,7,75,67,89,23,4];
let five = [1,3,4,5,6,7,8];

improveWinner([one,two,tree,four,five]);