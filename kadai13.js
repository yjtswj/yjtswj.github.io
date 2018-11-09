let tweetsHTML = "<ul>";

// let i = 0;
// while(i < tweets.length){
//   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//   i++;
// }

for(let i = 0; i < tweets.length;i++){
  tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
}

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;