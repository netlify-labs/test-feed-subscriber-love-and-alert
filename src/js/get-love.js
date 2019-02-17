
(function(){

  showRandomLove = function(){
    var newLove = Math.floor(Math.random() * loveStash.length);
    if(newLove == oldLove) {
      showRandomLove();
    } else {
      oldLove = newLove;
      document.querySelector('.tweet-text').textContent = loveStash[newLove].text;
      document.querySelector('.tweet-attribution a').textContent = loveStash[newLove].name;
      document.querySelector('.tweet-attribution a').setAttribute('href', loveStash[newLove].url);
    }
  },

  btnHandler('.btn-more-love', function(){
    // use the stash if we already requested the data
    if(loveStash) {
      showRandomLove();
      return;
    }
    // or get the data
    fetch('/love.json').then(function(response) {
      return response.json();
    }).then(function(response) {
      loveStash = response;
      showRandomLove();
    });
  });

})();
