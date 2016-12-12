$( document ).ready(function() {
    console.log("document is ready");

    var initialTime = 5;
    time = initialTime;
    var showInterval = 1000;
    var countdown;
    var mole1Position;
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1; //player one starts

    countDown = setInterval(tick, showInterval);

    function showInstructionState() {

    }


    function tick() {
      time--;
      console.log(time);
      document.getElementById('timeRemaining').textContent = "Time remaining: " +time;
      gameOverCheck(time);
    }

    function gameOverCheck(time) {
      if (time <= 0) {
        endGame();
      } else {
        showMole();
      }
    }

    function endGame() {
      clearInterval(countDown);
      for (i = 0; i <16; i++) {
        $("#mole"+mole1Position).removeClass("moleShow");
        $("#mole"+mole1Position).addClass("moleGrass");
      }
      if (currentPlayer === 1) {
        currentPlayer = 2;
        startPlayer2();
      } else {
        checkWinner();
      }
      return currentPlayer;
    }

    //alert("player 2 turn"); //confirm, allows yes or no . Jquery dialog http://jqueryui.com/dialog/#modal-confirmation

    // tick();// restart the interval and then give it function tick

    function startPlayer2() {
      alert("player 2's turn");
      time = initialTime;
      countDown = setInterval(tick, showInterval);
    }

    function checkWinner() {
      if (player1Score > player2Score) {
        alert("player 1 wins!");
        } else if (player2Score > player1Score) {
          alert("player 2 wins!");
        } else {
          alert("it's a tie!");
        }
      }


    $( "#molePatch" ).children().click(function() {
      if ( $( this ).hasClass( "moleShow" ) ) {
        console.log("you wacked a mole");
        $(this).removeClass("moleShow");
        $(this).addClass("moleGrass");
        incrementScore();
      }
    });

    function incrementScore() {
      if (currentPlayer === 1) {
        player1Score++;
        document.getElementById('play1Score').textContent = "Player 1: "+player1Score;
      } else {
        player2Score++;
        document.getElementById('play2Score').textContent = "Player 2: "+player2Score;
      }
    }


    //this function shows the mole
    function showMole() {
      var mole1Position = Math.round(Math.random()*15);
      // console.log("mole 1 position: " + mole1Position);
      $("#mole"+mole1Position).addClass("moleShow");
      $("#mole"+mole1Position).removeClass("moleGrass");
      hideMoles(mole1Position);
      return mole1Position;
    }

    function hideMoles(mole1Position) {
      var hideDelay = Math.random()*1000 + 500;
      setTimeout(function() {
        $("#mole"+mole1Position).removeClass("moleShow");
        $("#mole"+mole1Position).addClass("moleGrass");
      }, hideDelay);
    }

//Start document ready brackets
});
//End document ready brackets
