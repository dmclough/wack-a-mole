$( document ).ready(function() {
    console.log("document is ready");

    var initialTime = 20;
    time = initialTime;
    var showInterval = 250;
    var countdown;
    var mole1Position;
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1; //player one starts
    document.getElementById('timeRemaining').textContent = "Time remaining: " +time;




    function resetGame() {
      time = initialTime;
      player1Score = 0;
      player2Score = 0;
      currentPlayer = 1;
      document.getElementById('play1Score').textContent = "Player 1 Score: "+player1Score;
      document.getElementById('play2Score').textContent = "Player 2 Score: "+player2Score;
    }

    function startGame() {
      countDown = setInterval(tick, showInterval);
    }

    function tick() {
      time = time - 0.25;
      console.log(time);
      document.getElementById('timeRemaining').textContent = "Time remaining: " + Math.round(time);
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
      for (i = 0; i <=15; i++) {
        $("#mole"+i).removeClass("moleShow");
        $("#mole"+i).addClass("moleGrass");
      }
      if (currentPlayer === 1) {
        currentPlayer = 2;
        $('#dialog-player1Result').dialog('open');
          $( "#dialog-player1Result" ).text("Player 2's Turn: Go get 'em gophers, ya great git! The little brown furry rodents!");
      } else {
        $('#dialog-finalGameResult').dialog('open');
        checkWinner();
      }
      return currentPlayer;
    }

    function startPlayer2() {
      console.log("player 2's turn");
      time = initialTime;
      countDown = setInterval(tick, showInterval);
    }



    function checkWinner() {
      if (player1Score > player2Score) {
        console.log("player 1 wins!");
        $( "#dialog-finalGameResult" ).text("Player 1 Wins--Great big globs of greasy, grimy, gopher guts!");

        } else if (player2Score > player1Score) {
          console.log("player 2 wins!");
          $( "#dialog-finalGameResult" ).text("Player 2 Wins--Great big globs of greasy, grimy, gopher guts!");
        } else {
          console.log("It's a tie!");
          $( "#dialog-finalGameResult" ).text("Time for a shoot out! Tie Game.");

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
        document.getElementById('play1Score').textContent = "Player 1 Score: "+player1Score;
      } else {
        player2Score++;
        document.getElementById('play2Score').textContent = "Player 2 Score: "+player2Score;
      }
    }


    //this function shows the mole
    function showMole() {
      if (Math.random() > 0.5 ) {
        var mole1Position = Math.round(Math.random()*15);
        // console.log("mole 1 position: " + mole1Position);
        $("#mole"+mole1Position).addClass("moleShow");
        $("#mole"+mole1Position).removeClass("moleGrass");
        hideMoles(mole1Position);
        return mole1Position;
      }


    }

    function hideMoles(mole1Position) {
      var hideDelay = Math.random()*2000 + 500;
      setTimeout(function() {
        $("#mole"+mole1Position).removeClass("moleShow");
        $("#mole"+mole1Position).addClass("moleGrass");
      }, hideDelay);
    }

    $( function() {
    $( "#dialog-instructions" ).dialog({
      autoOpen: true,
      resizable: false,
      draggable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Player 1 Ready!": function() {
          $( this ).dialog( "close" );
          startGame();
        }
        }
      });
    } );

    // $( "#dialog-instructions" ).text("asdf asdf");


    $( function() {
    $( "#dialog-player1Result" ).dialog({
      autoOpen: false,
      resizable: false,
      draggable: false,
      modal: true,
      buttons: {
        "Start Player 2!": function() {
          $( this ).dialog( "close" );
          startPlayer2();
          }
        }
      });
    } );

    $( function() {
    $( "#dialog-finalGameResult" ).dialog({
      autoOpen: false,
      resizable: false,
      draggable: false,
      modal: true,
      buttons: {
        "Restart Game": function() {
          checkWinner();
          $( this ).dialog( "close" );

          resetGame();
          startGame();
          // resetGame();
          }
        }
      });
    } );

//Start document ready brackets
});
//End document ready brackets
