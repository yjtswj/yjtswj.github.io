// 0から10000までを足していき、
// 合計値がはじめに50000を超えた時の値を表示する
function doLoop() {
  let answer = document.querySelector("#answer");

  let i = 0;
  let sum = 0;
  while(i <= 1000){
    sum = sum + i;
    // sum += i; // ↑と同じ意味
    console.log(`sum: ${sum}, i: ${i}`);
    if(sum >= 50000){
      break;
    }
    i++;
  }
  answer.innerHTML = i;
}


// function doLoop() {
//   let answer = document.querySelector("#answer");
//   let i = 0;
//   let sum = 0;
//
//   while (true){
//     sum = sum + i;
//     i++;
//     if (sum >= 50000){
//       break;
//     }
//   }
//   answer.innerHTML = sum;
//
// }