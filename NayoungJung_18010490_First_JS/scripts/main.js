// -----TIMER ------------------------------------//
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function() { // Update the count down every 1 second

  var now = new Date().getTime(); 
  var distance = countDownDate - now; // future-now

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }

// ----DISTANCE--------FUEL------VELOCITY---------//  DOM
var mars = 54600000;
var ran = Math.floor((now % (1000 * 60)) / 72);
var distanceToMars = mars - ran;
document.getElementById("distanceM").innerHTML = Math.round(distanceToMars)+" km has left";

var fuel=100-Math.floor((now %(1000 *60*60)))/(1000*60);
document.getElementById("fuel").innerHTML = Math.round(fuel)+" %";

var velocity = Math.floor(Math.random()*1000)+246000;
document.getElementById("velocity").innerHTML = Math.round(velocity) + "km/h";

if(fuel==20){ // if condition + Alert
  alert('Fuel is running out! You must find a gas station!');
}
}, 1000); 


function move() {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) { // if else Condition
      width=0;
    } else {
      width+=0.003; 
      elem.style.width = width + '%'; 
    }
  }
}
move();

// ---FOOD-------------------------------// Event
var menu = document.getElementById('menuButton');
menu.onclick = function(){
	alert('Sorry, We are running out of food!');
};

// ---Gravity------------------------------// Arithmatic
var Gr2 = setInterval(function(){
var now = new Date().getTime();
var gr = Math.floor(Math.random()*6)/2.5;
document.getElementById("gravityInfo").innerHTML= gr;
}, 1000);

//--Throttle---//
var th = Math.floor(Math.random()*100);
document.getElementById("th").innerHTML= th;

var h2 = document.getElementById('th2');
h2.onclick = function(){
  alert('A throttle is the mechanism by which fluid flow is managed by the constriction or obstruction.');
};

// ---Ship Info------------------------------// Objects in Console.log
var ship= {
  shipName: "Sheep",
  companyName: "SpaceX",
  age: 10,

  sheep: function(){
  this.age += 10;
  console.log('Oops! In fact, It is '+ this.age +' years old.');
            }
};
console.log(ship);
console.log('The ship is '+ ship.age +' years old');
ship.sheep();

//--FOOD WATER----// For Loop
var chocolate = document.getElementsByTagName('li');

for(var i=0; i<chocolate.length; i++){
  chocolate[i].innerHTML += ' chocoalate';
}
//--ShipInfo----// Array
var shipCon = ['Zeer Slecht', 'Slecht','Goed'];

shipCon[3] = 'Zeer Goed';

document.getElementById("shipInfo").innerHTML= shipCon[Math.floor(Math.random()*3)];

