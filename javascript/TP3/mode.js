
/*
TP 3 : Mystery number

This file handle the mode selection : " is the user player 1 or player 2 ? "

only one fonctionnability per file to make it clearer and easier to work on

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  22 / 01 / 2025
    last updated :  22 / 01 / 2025
*/


import "./mode/player1.js";


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var player1Button = document.getElementById("player_1_button"),
        player2Button = document.getElementById("player_2_button");


    function chooseModeHandler(e, player_number) {
        // No need for a case statement since we wont add new cases in the futur

        if (player_number == 1) {
            // The computer has to find the user's number
        }
        else if (player_number == 2) {
            // The User has to find the user's number
        }
        else {
            // There's a problem, for now let's do nothing
        }
    }


    player1Button.addEventListener("click", function (e) { chooseModeHandler(e, 1) });
    player2Button.addEventListener("click", function (e) { chooseModeHandler(e, 2) });
})()
