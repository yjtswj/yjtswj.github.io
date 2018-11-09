let fruitsHTML = "<ul>";

// fruitsNamesからliタグを作ってfruitsHTMLに
// += で追加していく
//
//// while版
// let i = 0;
// while(i < fruitNames.length){
//   fruitsHTML += `<li>${fruitNames[i]}</li>`;
//   i++;
// }

// for版
for(let i = 0;i < fruitNames.length;i++){
  fruitsHTML += `<li>${fruitNames[i]}</li>`;
}

fruitsHTML += "</ul>";
document.querySelector("#answer").innerHTML = fruitsHTML;

