
let a=document.getElementById("a");
let b=document.getElementById("b");
let c=document.getElementById("c");
const element = document.getElementById("set");
 let flag1=true;
const audio = new Audio("mixkit-retro-game-emergency-alarm-1000.wav");

function myFunction() {
    const d = new Date();
    let hour=d.getHours();
    let minute=d.getMinutes();
    let second=d.getSeconds();
    if (hour<10){
        hour="0"+hour;
    }
    if (minute<10){
        minute="0"+minute;
    }
    if (second<10){
        second="0"+second;
    }
    a.innerHTML=hour;
    b.innerHTML=minute;
    c.innerHTML=second;

}
function music( ){
    let h=document.getElementById("h").value;
    let m=document.getElementById("m").value;
    const d = new Date();
    let hour=d.getHours();
    let minute=d.getMinutes();
    console.log("yes 1");

if(h==hour&& m==minute){
    console.log("yes");
  
    audio.play();
}
}


setInterval(myFunction, 1000);

element.addEventListener("click", button);
var ab=null;
function myStop() {
    clearInterval(ab);
  }
function button() {
    if(flag1){
  document.getElementById("set").innerHTML="clear alaram";

    // console.log(h);
    // console.log(m);
    ab=setInterval(music, 1000);
    flag1=false;
  
ab;
}
    else{
        document.getElementById("set").innerHTML="set alaram";
        flag1=true;
        audio.pause();
        myStop();
    }
}

