
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const digitTimer = document.querySelector('.digit');

function setDate(){
  const now = new Date();
  const seconds= now.getSeconds();
  const secondsDegrees = ((seconds/60)*360 )+ 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondHand.style.background = `red`;

  const minutes = now.getMinutes();

  const minDegrees = ((minutes/60)*360)+90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();

  const hourDegrees = ((hour/12)*360)+90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;


if(seconds < 10 && minutes > 10 && hour > 10 ){
  digitTimer.innerText = hour + " : " +  minutes + " : " + "0" + seconds;
}else if(seconds < 10 && minutes< 10 && hour > 10){
    digitTimer.innerText = hour + " : " + "0" +minutes + " : " + "0" + seconds;
}else if (seconds < 10 && minutes < 10 && hour < 10){
  digitTimer.innerText = "0"+hour + " : " + "0" +minutes + " : " + "0" + seconds;
}else if(seconds > 10 && minutes > 10 && hour < 10 ){
  digitTimer.innerText = "0"+hour + " : " + minutes + " : " + seconds;
}else if (seconds > 10 && minutes<10 && hour < 10){
  digitTimer.innerText = "0"+hour + " : " + "0" + minutes + " : " + seconds;
}else if(seconds > 10 && minutes < 10 && hour > 10){
  digitTimer.innerText = hour + " : " + "0" + minutes + " : " + seconds;
}
else{
  digitTimer.innerText =  hour + " : " + minutes + " : " +seconds;
}
  console.log(seconds);
  console.log("to sa minuty: "+ minutes);
  console.log("to sa godziny: "+ hour);
}

setInterval(setDate,1000);
