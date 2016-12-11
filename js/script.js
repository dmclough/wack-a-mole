
$( document ).ready(function() {
    console.log( "document is ready!" );

    // Attempted to hide the instructions on button click
    // $("#playGame").click(function() {
    //   $("#introInfo").slideUp();
    // });

    setInterval(printTime, 1000);

});
var time = 30; //initializes the start time

function printTime() {
  time -= 1;
  $( "#timeRemaining" ).text( "Time remaining:" + time );
  console.log(time);
}

console.log("checking if commit works second time");


//create a timer that runs at a set interval


//create a function to tell if cursor clicked on a div


//determine if mole should be shown/hidden


//
