$( document ).ready(function() {
    console.log("document is ready");

    var initialTime = 30;
    time = initialTime;
    var countdown;
    player1Score = 0;
    player2Score = 0;

    countDown = setInterval(tick, 1000);

    function tick() {
      time--;
      console.log(time);
      document.getElementById('timeRemaining').textContent = time;
      if (time <= 0) {
        clearInterval(countDown);
      } else {
        showMole();
      }
    }


});

//this function shows the mole
function showMole() {
  var mole1Position = Math.round(Math.random()*15);
  console.log("mole 1 position: " + mole1Position);
  document.getElementById(mole1Position).innerHTML = "<button onclick='score()'>Mole!</button>";
  return mole1Position;
}

function hideMoles() {
  document.getElementById(mole1Position).className = "moleHide";
}

function score() {
  player1Score++;
  console.log("player 1 score:" + player1Score);

}
