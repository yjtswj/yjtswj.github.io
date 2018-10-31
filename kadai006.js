function checkAge(){
  let age = document.querySelector("#age");
  let ageNumber = Number(age.value);
  let answer = document.querySelector("#answer");

  // 下から条件を書いていった場合
  if(ageNumber <= 0){
    answer.innerHTML = "エラー";
  }else if(ageNumber < 20){
    answer.innerHTML = "未成年";
  }else if(ageNumber < 65){
    answer.innerHTML = "成人";
  }else{
    answer.innerHTML = "高齢者";
  }

  // // 上から条件を書いていた場合
  // if(ageNumber >= 65){
  //   answer.innerHTML = "高齢者";
  // }else if(ageNumber >= 20){
  //   answer.innerHTML = "成人";
  // }else if(ageNumber > 0){
  //   answer.innerHTML = "未成年";
  // }else{
  //   answer.innerHTML = "エラー";
  // }
}