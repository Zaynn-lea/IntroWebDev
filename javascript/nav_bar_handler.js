
/*
file to handle the appearance and disapearance of the sub nav bar
___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  05 / 02 / 2025
    last updated :  05 / 02 / 2025
*/


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var subNavBarButton = document.getElementById("sub_nav_bar_button"),
        subNavBar       = document.getElementById("sub_nav_bar");

    var isNavBarHidden = true;


    function navBarLayoutHandler() {
        if (isNavBarHidden) {
            subNavBar.classList.remove("hidden");

            isNavBarHidden = false;
        }
        else {
            subNavBar.classList.add("hidden");

            isNavBarHidden = true;
        }
    }


    subNavBarButton.addEventListener("click", function (event) { navBarLayoutHandler() });
    
    subNavBar.classList.add("hidden");
})();
