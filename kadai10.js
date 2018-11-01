//1から100までの値について、各値につき1行ずつ以下のルールに従って表示
// 値が3で割り切れる場合はFizz
// 値が5で割り切れる場合はBuzz
// 値が3と5両方で割り切れるFizzBuzz
// 上記どれでもない場合はその値を表示
function doFizzBuzz(){
  let answer = document.querySelector("#answer");
  let i = 1;
  while(i <= 100){
    // if(i % 3 == 0 && i % 5 == 0){
    // 3と5の最小公倍数は15
    if(i % 15 == 0){
      answer.innerHTML += `FizzBuzz<br>`;
    }else if(i % 3 == 0){
      answer.innerHTML += `Fizz<br>`;
    }else if(i % 5 == 0){
      answer.innerHTML += `Buzz<br>`;
    }else{
      answer.innerHTML += `${i}<br>`;
    }
    i++;
  }
}