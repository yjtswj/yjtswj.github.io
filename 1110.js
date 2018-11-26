let fruitHTML = "<ul>";

for (let i = 0;i < fruitNames.length;i++){
  fruitHTML += `<li>${fruitNames[i]}</li>`;
}

fruitHTML += "</ul>";
answer.innerHTML = fruitHTML;