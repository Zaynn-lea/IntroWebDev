
/*
TP 3 : Image Randomizer

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  27 / 01 / 2025
    last updated :  27 / 01 / 2025
*/


// TODO : List of image


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var randomButton = document.getElementById("randomise_button");

    var picture = document.getElementById("pic");

    var imageArray = [
        "04_88rs.jpg",
        "API_2448_006_lg.jpg",
        "electric-bass-guitar.jpg",
        "images.jpeg",
        "images2.jpeg",
        "Marshall BASS STACK- MB450 Head + MB115 Cab + MB410 Cab 1_7763_1.jpg",
        "R.A.Moog_minimoog_2.jpg",
        "SI_78_05_keyboards_large.jpg",
        "ssl-4000-g-88202.jpg",
        "US-Custom-Short-Scale-HomePage-Slider-Mobile.jpg",
        "WEB-11.jpg",
        "YAMAHA_DX7.jpg"
    ];


    function randomiseHandler () {
        var randomNumber = Math.floor(Math.random() * imageArray.length);
        picture.src = "../../images/" + imageArray[randomNumber];
    }


    randomButton.addEventListener("click", function (event) { randomiseHandler() });
    picture.addEventListener("click", function (event) { randomiseHandler() });

    randomiseHandler();
})();
