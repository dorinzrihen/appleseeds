function getDate(){
    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(`Today is ${days[d.getDay()]}`);
    console.log(`Current time is ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `);
}

getDate()