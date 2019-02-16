const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');

var url = `https://data-feeds.netlify.com/love.json`;

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        seed(JSON.stringify(response.data), `${__dirname}/../dev/love.json`)
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  })
}
