/*

//fetch(url).then(function).then(function)....

fetch("http://morimorihoge.github.io/teu2018f/tweets.json").then(
  function (response) {
    return response.json();
  }
).then(
    function (json) {
      let answerHtml = "";
      let imggHtml = "";
      json.forEach(function (tweet) {
        answerHtml += `<li>${tweet.name}</li>`;
        answerHtml += `${tweet.message}`;
        answerHtml += `${tweet.tweetedAt}`;
        imggHtml += `${tweet.avatar}`;


      });
      document.querySelector("#answer").innerHTML = answerHtml;
      document.querySelector("#imagg").innerHTML = imggHtml;

    }


);*/


fetch("http://morimorihoge.github.io/teu2018f/tweets.json").then(
    function (response) {
      return response.json();
    }
).then(
    function (json) {
      let answerHtml = "";
      let imggHtml = "";
      json.forEach(function (tweet) {
        imggHtml = tweet.avatar;
        answerHtml += `<li><img src="${tweet.avatar}" width="100">${tweet.name}</li>`;
        answerHtml += tweet.message;
        answerHtml += tweet.tweetedAt;
      });
      document.querySelector("#answer").innerHTML = answerHtml;

    }


);