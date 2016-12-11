

$( document ).ready(function() {
    console.log( "document is ready!" );

    setInterval(printTime, 1000);

});

var time = 30; //initializes the start time

function printTime() {
  time -= 1;
  $( "#timeRemaining" ).text( "Time remaining:" + time );
  console.log(time);
  showMole();
  // console.log("show mole in position" + showMole());
}


function showMole() {
  var mole1Position = Math.round(Math.random()*16);
  console.log("mole 1 position: " + mole1Position);
  document.getElementById(mole1Position).className = "moleShow";

  return mole1Position;
}


//create a timer that runs at a set interval


//create a function to tell if cursor clicked on a div


//determine if mole should be shown/hidden


//
