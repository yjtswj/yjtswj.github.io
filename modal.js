

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