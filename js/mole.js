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
      for (i = 0; i <16; i++) {
        document.getElementById(i).innerHTML = "";
      }
      if (currentPlayer == 1) {
        currentPlayer = 2;
        //alert("player 2 turn"); //confirm, allows yes or no . Jquery dialog http://jqueryui.com/dialog/#modal-confirmation

        tick();// restart the interval and then give it function tick
      }
      // currentPlayer = 2;
      console.log(currentPlayer);
      return currentPlayer;
    }

    // $( "#molePatch" ).children().click(function() {
    //     $( "#"+this.id ).hasClass( "moleShow" );
    //     console.log("howdy");
    //     alert( "Handler for .click() called." );
    // });

    $( "#molePatch" ).children().click(function() {
      if ( $( this ).hasClass( "moleShow" ) ) {
        console.log("you wacked a mole");
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

//Start document ready brackets
});
//End document ready brackets


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
      var hideDelay = Math.random()*2000 + 500;
      setTimeout(function() {
        $("#mole"+mole1Position).removeClass("moleShow");
        $("#mole"+mole1Position).addClass("moleGrass");
      }, hideDelay);
    }





    // function score(mole1Position) {
    //   $('#'+mole1Position).click(function() {
    //       $(this).removeClass('moleShow');
    //       $(this).addClass('moleGrass');
    //   });
    //
    //
    //
    //   if (currentPlayer === 1) {
    //     player1Score++;
    //     document.getElementById('play1Score').textContent = "Player 1: "+player1Score;
    //   } else {
    //     player2Score++;
    //     document.getElementById('play2Score').textContent = "Player 2: "+player2Score;
    //   }
    //   console.log("player 1 score:" + player1Score);
    // }
