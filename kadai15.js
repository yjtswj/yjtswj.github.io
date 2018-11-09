let tweetsHTML = "<ul>";

// Array#forEach版
let appendTweet = function(tweet){
  tweetsHTML += `<li><b>${tweet.name}</b> ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
};
tweets.forEach(appendTweet);

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;