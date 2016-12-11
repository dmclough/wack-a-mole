

$( document ).ready(function() {
    console.log( "document is ready!" );

    setInterval(printTime, 1000);


});

var time = 3; //initializes the start time

function printTime() {
  time -= 1;
  $( "#timeRemaining" ).text( "Time remaining:" + time );
  console.log(time);
  showMole();
}



function showMole() {
  var mole1Position = Math.round(Math.random()*16);
  console.log("mole position 1: " + mole1Position);
  return mole1Position;
}


//create a timer that runs at a set interval


//create a function to tell if cursor clicked on a div


//determine if mole should be shown/hidden


//
