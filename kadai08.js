// 0から10000までの総和を計算して表示する
function doLoop() {
  let answer = document.querySelector("#answer");

  let i = 0;
  let sum = 0;
  while(i <= 10000){
    sum = sum + i;
    // sum += i; // ↑と同じ意味
    console.log(`sum: ${sum}, i: ${i}`);
    i++;
  }
  answer.innerHTML = sum;
}