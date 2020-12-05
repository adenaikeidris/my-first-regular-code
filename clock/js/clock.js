let clock = document.getElementById('clock');
let clock1 = document.getElementById('clock1');
let clock2 = document.getElementById('clock2');
let clock3 = document.getElementById('clock3');
let clock4 = document.getElementById('clock4');
// let sample = document.getElementById('notif');
function changeColor() {
 document.getElementById('timing').style.background = 'blue';
 document.getElementById('timing').style.color = 'white';
}

function showClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'A.M';
    if (hours >= 12){ meridian = 'P.M';};
    let time = `${hours} : ${minutes} : ${seconds} ${meridian}`;
     clock.innerHTML = time;
     if (hours>24){
       hours= hours - 24;
     }
     if (hours<10){
       hours=`0${hours}`;
     }
     if (minutes<10){
      minutes=`0${minutes}`;
     }
     if (seconds<10){
       seconds=`0${seconds}`;
     }
     }
    // if (seconds == 50) {
    //   notif.play();}
    
function showClock1() {
    let currentTime1 = new Date();
    let hours1 = currentTime1.getHours() +2;
    let minutes1 = currentTime1.getMinutes();
    let seconds1 = currentTime1.getSeconds();
    let meridian1 = 'A.M';
    if (hours1 >= 12){ meridian1 = 'P.M';};
    let time1 = `${hours1} : ${minutes1} : ${seconds1} ${meridian1}`;
     clock1.innerHTML = time1;
     if (hours1>24){
       hours1=  hours1 - 24;
     }
     if (hours1<10){
       hours1=`0${hours1}`;
     }
     if (minutes1<10){
       minutes1=`0${minutes1}`;
     };
     if (seconds1<10){
       seconds1=`0${seconds1}`;
     }
    }

function showClock2() {
     let currentTime2 = new Date();
     let hours2 = currentTime2.getHours() +8;
     let minutes2 = currentTime2.getMinutes();
     let seconds2 = currentTime2.getSeconds();
     let meridian2 = 'A.M';
     if (hours2 >= 12){ meridian2 = 'P.M';};
     let time2 = `${hours2} : ${minutes2} : ${seconds2} ${meridian2}`;
     clock2.innerHTML = time2;
       if (hours2>=24){
       hours2= hours2 - 24;
       }
     if (hours2<10){
       hours2=`0${hours2}`;
     }
     if (minutes2<10){
       minutes2=`0${minutes2}`;
     }
     if (seconds2<10){
       seconds2=`0${seconds2}`;
     }
     }
function showClock3() {
  let currentTime3 = new Date();
  let hours3 = currentTime3.getHours() -4;
  let minutes3 = currentTime3.getMinutes();
  let seconds3 = currentTime3.getSeconds();
  let meridian3 = 'A.M';
  if (hours3 >= 12){ meridian3 = 'P.M';};
  let time3 = `${hours3} : ${minutes3} : ${seconds3} ${meridian3}`;
  clock3.innerHTML = time3;
  if (hours3>24){
  hours3= hours3 - 24;
  }
     if (hours3<10){
       hours3=`0${hours3}`;
     }
     if (minutes3<10){
       minutes3=`0${minutes3}`;
     }
     if (seconds3 <10){
       seconds3=`0${seconds3}`;
     }
     }
 function showClock4() {
     let currentTime4 = new Date();
     let hours4 = currentTime4.getHours() -5;
     let minutes4 = currentTime4.getMinutes();
     let seconds4 = currentTime4.getSeconds();
     let meridian4 = 'A.M';
     if (hours4 >= 12){ meridian4 = 'P.M';};
     let time4 = `${hours4} : ${minutes4} : ${seconds4} ${meridian4}`;
     clock4.innerHTML = time4;
     if (hours4>24){
       hours4 = hours4 - 24;
     }
     if (hours4 <10){
       hours4 =`0${hours4}`;
     }
     if (minutes4<10){
       minutes4=`0${minutes4}`;
     }
     if (seconds4<10){
       seconds4=`0${seconds4}`;
     }
     }


setInterval( function()
{showClock()}, 1);
setInterval( function(){showClock1()}, 1);
setInterval( function(){showClock2()}, 1);
setInterval( function() {showClock3()}, 1);
setInterval( function() {showClock4()}, 1);