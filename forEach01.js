let renHTML ="<ul>";

let nori = function (shinya) {
  renHTML += `<li><b>${shinya.name}</b> ${shinya.message} <i>${shinya.tweetedAt}</i></li>`;
};
ren.forEach(nori);

renHTML += "</ul>";
document.querySelector("#answer").innerHTML = renHTML;