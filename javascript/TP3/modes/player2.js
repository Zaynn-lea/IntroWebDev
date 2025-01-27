
/*
TP 3 : Mystery number

This file handles the game when the user is player two, meaning that the user has to find the computer's number

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  22 / 01 / 2025
    last updated :  27 / 01 / 2025
*/


// Everything goes into the function to avoid namespace bleeding
//  and because we need all of it as once
//  but it will never be called outside of the scope of player1Handler()

export function player2Handler() {
    var submitButton = document.getElementById("submit_button"),
        modeButton   = document.getElementById("mode_button");

    var gameTitle = document.getElementById("game_title"),
        dialogBox = document.getElementById("game_status"),
        endDialog = document.getElementById("end_dialog_2");

    var input = document.getElementById("dialog_box_input");

    var modeChoiceSection = document.getElementById("mode_choice"),
        player1Section    = document.getElementById("player_1"),
        player2Section    = document.getElementById("player_2");


    var numberToGuess = Math.round(100 * Math.random()),
        guessedNumber = -1,
        lower         = 0,
        upper         = 100;

        var isFound = false;


    function createLayout () {
        gameTitle.innerHTML = "You play as player 2";


        // Hiding the section we don't need 
        player1Section.classList.add("hidden");
        modeChoiceSection.classList.add("hidden");

        // This only shows when the computer has won 
        endDialog.classList.add("hidden");

        // Making sure we see the correct section
        player2Section.classList.remove("hidden");
        modeButton.classList.remove("hidden");

        dialogBox.innerHTML = "";
        input.value         = "";
    }


    /*****************\
    |   Game phases   |
    \*****************/

    function reset() {
        isFound = false;

        numberToGuess = Math.round(100 * Math.random());
        lower         = 0;
        upper         = 100;

        createLayout();
    }

    function submit() {
        guessedNumber = input.value;

        if (isFound) { reset(); }
        
        else if (guessedNumber == numberToGuess) {
            isFound = true;

            dialogBox.innerHTML = "You guessed right ! The number was : " + numberToGuess;

            endDialog.classList.remove("hidden");
        }
        else if (guessedNumber > numberToGuess)  {
            dialogBox.innerHTML = "You guessed too big...";
        }
        else {
            // The user guessed too low

            dialogBox.innerHTML = "You guessed too small...";
        }
    }


    submitButton.addEventListener("click", function (e) { submit() });

    createLayout();
}
