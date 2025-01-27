
/*
TP 3 : Mystery number

This file handles the game when the user is player one, meaning that the computer has to find the user's number

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

export function player1Handler(e) {
    var smallerButton = document.getElementById("smaller_button"),
        foundButton   = document.getElementById("found_button"),
        biggerButton  = document.getElementById("bigger_button"),
        modeButton    = document.getElementById("mode_button");

    var gameTitle = document.getElementById("game_title"),
        dialogBox = document.getElementById("dialog_box_output"),
        endDialog = document.getElementById("end_dialog_1");

    var modeChoiceSection = document.getElementById("mode_choice"),
        player1Section    = document.getElementById("player_1"),
        player2Section    = document.getElementById("player_2");


    var guessedNumber = 50,
        lower         = 0,
        upper         = 100;
    
    var isFound = false;


    function createLayout () {
        gameTitle.innerHTML = "You play as player 1";


        // Hiding the section we don't need 
        player2Section.classList.add("hidden");
        modeChoiceSection.classList.add("hidden");

        // This only shows when the computer has won 
        endDialog.classList.add("hidden");

        // Making sure we see the correct section
        player1Section.classList.remove("hidden");
        modeButton.classList.remove("hidden");

        dialogBox.innerHTML = "I think this number is " + guessedNumber;
    }


    /*****************\
    |   Game phases   |
    \*****************/

    function reset() {
        isFound = false;

        guessedNumber = 50;
        lower         = 0;
        upper         = 100;

        createLayout();
    }

    function smaller(e) {
        if (isFound) { reset(); }
        else         {
            upper = guessedNumber;
            guessedNumber = Math.round((lower + guessedNumber) / 2);
    
            dialogBox.innerHTML = "I think this number is " + guessedNumber;
        }
    }

    function found(e) {
        dialogBox.innerHTML = "I found it, it was : " + guessedNumber;

        endDialog.classList.remove("hidden");

        if (isFound) { reset(); }
        else       { isFound = true; }
    }

    function bigger(e) {
        if (isFound) { reset(); }
        else         {
            lower = guessedNumber;
            guessedNumber = Math.round((upper + guessedNumber) / 2);

            dialogBox.innerHTML = "I think this number is " + guessedNumber;
        }
    }


    smallerButton.addEventListener("click", function (e) { smaller(e) });
    foundButton.addEventListener("click",   function (e) { found(e) });
    biggerButton.addEventListener("click",  function (e) { bigger(e) });

    createLayout();
}