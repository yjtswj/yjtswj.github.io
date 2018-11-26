
//fetch(url).then(function).then(function)....

fetch("http://yjtswj.github.io/TyukanMinami/site/tweets.json").then(
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


);