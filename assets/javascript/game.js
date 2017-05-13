

      // Our array of possible computer choices.
      var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero

      // Variables for tracking our wins, losses and ties. They begin at 0.
      var wins = 0;
      var losses = 0;
      var guessLeft = 9 ;
      
      

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {
      
      guessLeft--;

        // Determine which key was pressed
      var userGuess = event.key;

        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // If the user presses "r" or "p" or "s", run the game logic.
          if (guessLeft>=0){

          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate counter.
          if (userGuess === computerGuess ) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins ;
          }
          
          else {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses ;
          }
          

          
          var html = "Guessesleft: " + guessLeft;

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#guessLeft").innerHTML = html;
          

          var html1 = "ComputerChoices: " + computerGuess;
          document.querySelector("#computerChoices").innerHTML = html1 ;


          var html2 = "UserGuess: " + userGuess ;
          document.querySelector("#userGuess").innerHTML = html2 ;
        }
        
      };

  
