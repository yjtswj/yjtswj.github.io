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


      });
      document.querySelector("#answer").innerHTML = answerHtml;

    }


);