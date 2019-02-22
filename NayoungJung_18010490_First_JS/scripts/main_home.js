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

var mars = 54600000;
var ran = Math.floor((now % (1000 * 60)) / 72);
var distanceToMars = mars - ran;
document.getElementById("distanceM").innerHTML = Math.round(distanceToMars)+" km has left";
}, 1000); 


document.getElementById('addIdea').onclick = function(){
  var idea= document.getElementById('newIdea').value;
  alert('you filled in  ' + idea);
  alert('Oops! The Raccoon just rejected your idea!');
};
