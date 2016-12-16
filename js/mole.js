$( document ).ready(function() {
  console.log("document is ready");

  var INITIAL_TIME = 20;
  var time = INITIAL_TIME;
  var SHOW_INTERVAL = 250;
  var HIDE_DELAY = 500;
  var countdown;
  // var mole1Position;
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1; //player one starts
  document.getElementById("timeRemaining").textContent = "Time remaining: " +time;


  //iniital dialog contains button to start the game
  $(function() {
  $("#dialog-instructions").dialog({
    autoOpen: true,
    resizable: false,
    draggable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Player 1 Ready!": function() {
        $(this).dialog("close");
        startGame();
      }
      }
    });
  } );


  resetGame();

  function resetGame() {
    time = INITIAL_TIME;
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    document.getElementById("play1Score").textContent = "Player 1 Score: "+player1Score;
    document.getElementById("play2Score").textContent = "Player 2 Score: "+player2Score;
  }

  function startGame() {
    countDown = setInterval(tick, SHOW_INTERVAL);
  }

  function tick() {
    time = time - (SHOW_INTERVAL/1000); //only subtracts 0.250 becuase interval runs 4x per second. Needed to keep the seconds count accurate.
    document.getElementById("timeRemaining").textContent = "Time remaining: " + Math.round(time);
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
    $("#molePatch div").removeClass("MoleShow");
    $("#molePatch div").addClass("MoleGrass");
    if (currentPlayer === 1) {
      currentPlayer = 2;
      $("#dialog-player1Result").dialog("open");
      $("#dialog-player1Result" ).text("Go get 'em gophers, ya great git! The little brown furry rodents!");
    } else {
      $("#dialog-finalGameResult").dialog("open");
      checkWinner();
    }
    return currentPlayer;
  }

  function startPlayer2() {
    time = INITIAL_TIME;
    countDown = setInterval(tick, SHOW_INTERVAL);
  }

  function checkWinner() {
    if (player1Score > player2Score) {
      $("#dialog-finalGameResult").text("Player 1 Wins--Great big globs of greasy, grimy, gopher guts!");
    } else if (player2Score > player1Score) {
        $("#dialog-finalGameResult").text("Player 2 Wins--Great big globs of greasy, grimy, gopher guts!");
    } else {
        $("#dialog-finalGameResult").text("Time for a shoot out! Tie Game.");

    }
  }

  function incrementScore() {
    if (currentPlayer === 1) {
      player1Score++;
      document.getElementById("play1Score").textContent = "Player 1 Score: "+player1Score;
    } else {
      player2Score++;
      document.getElementById("play2Score").textContent = "Player 2 Score: "+player2Score;
    }
  }

  function showMole() {
    var mole1Position;
    if (Math.random() > 0.5 ) {
      mole1Position = Math.round(Math.random()*15);
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


  $("#molePatch").children().click(function() {
    if ( $(this).hasClass("moleShow") ) {
      $(this).removeClass("moleShow");
      $(this).addClass("moleGrass");
      incrementScore();
    }
  });



  $(function() {
  $("#dialog-player1Result").dialog({
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

  $(function() {
  $("#dialog-finalGameResult").dialog({
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
        }
      }
    });
  } );

//Start document ready brackets
});
//End document ready brackets
