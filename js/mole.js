$( document ).ready(function() {
    console.log("document is ready");

    var initialTime = 30;
    time = initialTime;
    var showInterval = 1000;
    var countdown;
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1; //player one starts

    countDown = setInterval(tick, showInterval);

    function tick() {
      time--;
      console.log(time);
      document.getElementById('timeRemaining').textContent = "Time remaining: " +time;
      gameOverCheck();
    }

    function gameOverCheck() {
      if (time <= 0) {
        clearInterval(countDown);
        currentPlayer = 2;
        console.log(currentPlayer);
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
      // setTimeout(hideMoles(mole1Position), hideDelay);

      // hideMoles(mole1Position);
      hideMoles(mole1Position);
      return mole1Position;
    }

    function hideMoles(mole1Position) {
      var hideDelay = 1100;
      setTimeout(function() {
        document.getElementById(mole1Position).innerHTML = "";
      }, hideDelay);
    }





    function score() {
      if (currentPlayer === 1) {
        player1Score++;
        document.getElementById('play1Score').textContent = "Player 1: "+player1Score;
      } else {
        player2Score++;
        document.getElementById('play2Score').textContent = "Player 2: "+player2Score;
      }
      console.log("player 1 score:" + player1Score);
    }
