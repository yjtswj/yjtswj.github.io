function checkYear(){
  let year = document.querySelector("#year");
  let yNumber = Number(year.value);
  let answer = document.querySelector("#answer");

  if(yNumber % 400 == 0){
    answer.innerHTML = "閏年";
  }
  else if(yNumber % 100 == 0){
    answer.innerHTML = "平年";
  }
  else if(yNumber % 4 == 0){
    answer.innerHTML = "閏年";
  }
  else{
    answer.innerHTML = "平年";
  }


  // if(yearNumber % 4 == 0){
  //   answer.innerHTML = "閏年";
  // }ｓ
  // else if(yearNumber % 3 == 0){
  //   answer.innerHTML = "平年";
  // }
  // else if(yearNumber % 400 == 0){
  //   answer.innerHTML = "閏年";
  // }


}