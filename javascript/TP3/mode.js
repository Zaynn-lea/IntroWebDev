
/*
TP 3 : Mystery number

This file handle the mode selection : " is the user player 1 or player 2 ? "

only one fonctionnability per file to make it clearer and easier to work on

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  22 / 01 / 2025
    last updated :  27 / 01 / 2025
*/


import { player1Handler } from "./modes/player1.js";
import { player2Handler } from "./modes/player2.js";


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var player1Button = document.getElementById("player_1_button"),
        player2Button = document.getElementById("player_2_button"),
        modeButton    = document.getElementById("mode_button");

    var gameTitle = document.getElementById("game_title");

    var modeChoiceSection = document.getElementById("mode_choice"),
        player1Section    = document.getElementById("player_1"),
        player2Section    = document.getElementById("player_2");


    function createLayout () {
        gameTitle.innerHTML = "Mode selection :";


        // Hiding the section we don't need 
        player1Section.classList.add("hidden");
        player2Section.classList.add("hidden");
        modeButton.classList.add("hidden");

        // Making sure we see the correct section
        modeChoiceSection.classList.remove("hidden");
    }


    player1Button.addEventListener("click", function (e) { player1Handler(e) });
    player2Button.addEventListener("click", function (e) { player2Handler(e) });

    modeButton.addEventListener("click", function (e) { createLayout(e) });

    createLayout();
})()
