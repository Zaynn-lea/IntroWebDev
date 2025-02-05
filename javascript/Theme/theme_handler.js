
/*
file to handle the themes and switching between them
___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  03 / 02 / 2025
    last updated :  05 / 02 / 2025
*/


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var themeButton  = document.getElementById("theme_button"),
        themeDisplay = document.getElementById("theme_display");

    var themeState = themeDisplay.textContent.toLowerCase();

    var root_variables = document.querySelector(":root");

    var themesjson;


    fetch('/javascript/Theme/themes.json')
        .then((response) => response.json())
        .then((json) => themesjson = json);


    function themeSwitchingHnadler() {
        themeState = themesjson[themeState]["next"];

        themeDisplay.innerHTML = themeState;

        for (const cssVariables in themesjson[themeState])
            root_variables.style.setProperty(cssVariables, themesjson[themeState]["variables"][cssVariables]);
    }


    themeButton.addEventListener("click", function (event) { themeSwitchingHnadler() });
})();
