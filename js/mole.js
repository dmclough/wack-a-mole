$( document ).ready(function() {
    console.log("document is ready");

    var initialTime = 5;
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
        endGame();
      } else {
        showMole();
      }
    }

    function endGame() {
      clearInterval(countDown);
      for (i = 0; i <15; i++) {
        document.getElementById(i).innerHTML = "";
      }
      currentPlayer = 2;
      console.log(currentPlayer);
      return currentPlayer;
    }


});

    //this function shows the mole
    function showMole() {
      var mole1Position = Math.round(Math.random()*15);
      console.log("mole 1 position: " + mole1Position);
      document.getElementById(mole1Position).innerHTML = '<img src="img/mole.jpeg" alt="mole image" style="width:42px;height:42px;border:0" onclick="score()">';
      //Old button: "<button onclick='score()'>Mole!</button>";

      hideMoles(mole1Position);
      return mole1Position;
    }

    function hideMoles(mole1Position) {
      var hideDelay = 3000;
      setTimeout(function() {
        document.getElementById(mole1Position).innerHTML = "";
      }, hideDelay);
    }





    function score(mole1Position) {
      // document.getElementById(this).innerHTML = "";
      if (currentPlayer === 1) {
        player1Score++;
        document.getElementById('play1Score').textContent = "Player 1: "+player1Score;
      } else {
        player2Score++;
        document.getElementById('play2Score').textContent = "Player 2: "+player2Score;
      }
      console.log("player 1 score:" + player1Score);
    }
