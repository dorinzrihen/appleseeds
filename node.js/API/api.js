const request = require("request");
const axios = require('axios');

const getSpellWithRequest = (item) => {
  const url = `https://www.dnd5eapi.co/api/spells/${item}/`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("cant find it");
    } else {
      console.log(response.body.name);
      console.log(response.body.desc);
    }
  });
};


const getSpellWithAxios = (item) => {
    axios.get(`https://www.dnd5eapi.co/api/spells/${item}/`)
    .then(function (response) {
      // handle success
      console.log(response.data.name);
      console.log(response.data.desc);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

getSpellWithRequest("acid-arrow");
getSpellWithAxios("acid-arrow");

