function checkUserInput(){
  let input = document.querySelector("#user_input");
  let answer = document.querySelector("#answer");
  if(input.value == "隣の客はよく柿食う客だ"){
    answer.innerHTML = "○";
  }else{
    answer.innerHTML = "×";
  }
}


///汎用版
//
// function checkUserInput(){
//   let input = document.querySelector("#user_input");
//   let answer = document.querySelector("#answer");
//   let question = document.querySelector("#question");
//   if(input.value == question.innerHTML){
//     answer.innerHTML = "○";
//   }else{
//     answer.innerHTML = "×";
//   }
// }