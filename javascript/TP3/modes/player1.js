
/*
TP 3 : Mystery number

This file handles the game when the user is player one, meaning that the computer has to find the user's number

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  22 / 01 / 2025
    last updated :  26 / 01 / 2025
*/


export function player1Handler(e) {
    var smallerButton = document.getElementById("smaller_button"),
        foundButton   = document.getElementById("found_button"),
        biggerButton  = document.getElementById("bigger_button"),
        modeButton    = document.getElementById("mode_button");;

    var gameTitle = document.getElementById("game_title");

    var modeChoiceSection = document.getElementById("mode_choice"),
        player1Section    = document.getElementById("player_1"),
        player2Section    = document.getElementById("player_2");


    function createLayout () {
        gameTitle.innerHTML = "You play as player 1";


        // Hiding the section we don't need 
        player2Section.classList.add("hidden");
        modeChoiceSection.classList.add("hidden");

        // Making sure we see the correct section
        player1Section.classList.remove("hidden");
        modeButton.classList.remove("hidden");
    }


    smallerButton.addEventListener("click", function (e) { player1Handler(e) });
    foundButton.addEventListener("click",   function (e) { player2Handler(e) });
    biggerButton.addEventListener("click",  function (e) { player1Handler(e) });

    createLayout();
}