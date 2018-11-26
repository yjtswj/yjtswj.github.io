function checkUserInput() {
  let input = document.querySelector("#user_input");
  let answer = document.querySelector("#answer") ;
  let question = document.querySelector("#question");
  if (input.value == question.innerHTML){
    answer.innerHTML = "○";
  } else {
    answer.innerHTML = "×";
  }

}