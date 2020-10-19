const fs = require("fs");
const util = require("util");


const readFile = util.promisify(fs.readFile);
let specialHeaders = {};
let splitRegex = /[,]+/;

//when its not , 
function getSplitChar() {}

//if there is whitespace before or after our data
function checkForWhiteSpace(arr) {
  return arr.map(str => {
    return str.trim();
  })
}

//add header with a tag
function addSpecialHeader(headerName, before, after) {
  specialHeaders[headerName] = [before, after];
}

function getStuff(csv) {
  return readFile(csv, "utf8");
}

//check if header selected need tag, if already have one should not add one more
function checkIfSpecialHeader(header, info) {
  if (specialHeaders.hasOwnProperty(header)) {
    const [first, last] = specialHeaders[header];
    if(info.includes(first) && info.includes(last)){
      return info;
    }
    else{
      return `${first}'${info}'${last}`;
    }
  }
  return info;
}

function updateInfo(header, info) {
  const headerUpdated = checkForWhiteSpace(header);
  let jsonInfo = info.map((row) => {
    let infoAsJson = {};
    const rowUpdated = checkForWhiteSpace(row)
    for (let i = 0; i < rowUpdated.length; i++) {
      infoAsJson[headerUpdated[i]] = checkIfSpecialHeader(headerUpdated[i],rowUpdated[i]);
    }
    return infoAsJson;
  });
  console.log(jsonInfo);
  return jsonInfo;
}

function splitData(csvData) {
  let csvSplited = [];
  for (i = 0; i < csvData.length; i++) {
    csvSplited.push(csvData[i].split(splitRegex));
  }
  const csvHeader = [...csvSplited[0]];
  let cloneInfo = Array.from(csvSplited);
  cloneInfo.shift();
  return [csvHeader, cloneInfo];
}

//create as json
function makeJason(csvFile) {
  fs.exists(csvFile,function(exists) { 
    if (exists) { 
      getStuff(csvFile).then((data) => {
        if (data) {
          const csvData = data.split(/\r?\n/);
          const [header, csvInfo] = splitData(csvData);
          return updateInfo(header, csvInfo);
        }
      })
    } 
    else{
      return -1;
    }
  });   
}

addSpecialHeader("ImageUrl", "<a href=", "</a>");
console.log(makeJason("Test-csvInfo.csv"));

module.exports = {
  addSpecialHeader,
  makeJason,
};
