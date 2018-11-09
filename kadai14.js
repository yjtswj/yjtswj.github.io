let fruitsHTML = "<ul>";

// Array#forEach()版
let appendFruit = function(fruit){
  fruitsHTML += `<li>${fruit}</li>`;
};
fruitNames.forEach(appendFruit);

fruitsHTML += "</ul>";
document.querySelector("#answer").innerHTML = fruitsHTML;