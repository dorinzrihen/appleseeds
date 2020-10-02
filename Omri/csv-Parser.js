const fs = require("fs");
const util = require('util');

const readFile = util.promisify(fs.readFile);
let specialHeaders = {imageUrl:['<a href=','</a>']}

function getStuff(csv) {
  return readFile(csv, "utf8")
}

function updateInfo(header,info){
  let jsonInfo = info.map((row,index) =>{
    const splitData = row.split(',')
    let infoAsJson = {}
    for(let i = 0; i<splitData.length;i++){
      infoAsJson[header[i]] = splitData[i];
    }
    return infoAsJson;
  })

  console.log(jsonInfo);
}


//create as json 
function makeJason(){
  getStuff("csv-info.csv").then(data => {
    let csvData = data.split(/\r?\n/); 
    const header = csvData[0].split(',');
    csvData.splice(0,1);
    updateInfo(header,csvData)
  })
}

makeJason();

