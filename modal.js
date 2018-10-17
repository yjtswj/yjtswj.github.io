

function showModal(){
  document.querySelector("#modal").innerHTML = "押された！！！";
}

function changeRed() {
  document.querySelector("#modal").style.backgroundColor= "red";
}




function changeYellow() {
  document.querySelector("#modal").style.backgroundColor= "yellow";
}

function changeGreen() {
  document.querySelector("#modal").style.backgroundColor= "green";
}




function appendCircle(){
  document.querySelector("#modal").innerHTML =
      document.querySelector("#modal").innerHTML + "○";
}

function appendCross(){
  document.querySelector("#modal").innerHTML =
      document.querySelector("#modal").innerHTML + "×";
}

// function appendCircle(){
//   document.querySelector("#modal").append("○");
// }
//
// function appendCross(){
//   document.querySelector("#modal").append("×");
// }

//appendの逆もある。

function plusOne(){
  document.querySelector("#modal").innerHTML =
      Number(document.querySelector("#modal").innerHTML ) + 1;
}

function plusFive(){
  document.querySelector("#modal").innerHTML =
      Number(document.querySelector("#modal").innerHTML) + 5;
}

function plusTen(){
  document.querySelector("#modal").innerHTML =
      Number(document.querySelector("#modal").innerHTML) + 10;
}

//足し算引き算割り算
