function doLoop() {
  let answer = document.querySelector("#answer");
  let i = 0;
  let sum = 0;
  while(i <= 10000){
    sum = sum + i;
    i++;
  }
  answer.innerHTML = sum;

}