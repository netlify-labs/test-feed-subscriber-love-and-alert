const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');

var url = `https://data-feeds.netlify.com/announcements.json`;

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        seed(JSON.stringify(response.data), `${__dirname}/../dev/breaking.json`)
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  })
}
