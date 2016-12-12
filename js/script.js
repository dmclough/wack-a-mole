$( document ).ready(function() {
    console.log( "document is ready" );

    var initialTime = 30;
    time = initialTime;

    var countDown = setInterval(function(){
        console.log("time running");
        var timeRemaining = document.getElementById('timer');
        time--;
        console.log(time);
        document.getElementById('timeRemaining').textContent = time;
          if (time <= 0) {
            clearInterval(countDown);
          } else {
            showMole();
          }
      },1000
    );





});




function showMole() {
  // hideMole();
  var mole1Position = Math.round(Math.random()*15);
  console.log("mole 1 position: " + mole1Position);
  document.getElementById(mole1Position).className = "moleShow";
  return mole1Position;
}

hideMole();
function hideMole() {
  $( "#molePatch" ).children().class( "background-color", "blue" );
}
