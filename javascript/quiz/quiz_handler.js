
/*
file to handle the navigation between the question cards
and to compute the final score
___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  23 / 02 / 2025
    last updated :  23 / 02 / 2025
*/


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var prevButtons = document.getElementsByClassName("prev"),
        nextButtons = document.getElementsByClassName("next"),
        resetButton = document.getElementById("reset_button");

    var resultSlide = document.getElementById("quiz_result");

    var dialogBox = document.getElementById("dialog_box");

    var questionsSlides = document.getElementsByClassName("question_slides");

    // Tells you the number of the question, -1 being the score slide
    // Had to be a string because json don't accept numbers as keys
    var currentSlide = "1";

    var questionsjson;


    fetch('/javascript/quiz/questions.json')
        .then((response) => response.json())
        .then((json) => questionsjson = json);


    function prev() {
        document.getElementById("question_" + currentSlide).classList.add("hidden");

        currentSlide = questionsjson[currentSlide]["prev"];

        document.getElementById("question_" + currentSlide).classList.remove("hidden");

        console.log("test");
    }


    function next() {
        document.getElementById("question_" + currentSlide).classList.add("hidden");

        currentSlide = questionsjson[currentSlide]["next"];

        if (currentSlide != "-1")
            document.getElementById("question_" + currentSlide).classList.remove("hidden");
        else {
            resultSlide.classList.remove("hidden");
            displayScore();
        }
    }


    function displayScore() {
        // The for loop could be refactor to be more readable by using a pointer variable in the json
        //  instead of calling the full json access path each and every time

        var score = 0,
            temp  = 0;
        
        var state = true;

        for (const [key1, value1] of Object.entries(questionsjson)) {
            switch (questionsjson[key1]["type"]) {
                case "radio":
                    if (document.getElementById(questionsjson[key1]["correct"]).checked)
                        score += 1;
                    break;

                case "check":
                    temp = 0;
                    for (const [key2, value2] of Object.entries(questionsjson[key1]["answers"])) {
                        // A correct answer is checked
                        if      (document.getElementById(value2).checked && questionsjson[key1]["correct"].includes(value2))
                            temp += 1;

                        // A checked answer isn't correct
                        else if (document.getElementById(value2).checked)
                            temp -= 1;
                    }
                    // no negativ points, let's be gentle
                    score += Math.max(temp / questionsjson[key1]["correct"].length, 0);
                    break;
                
                case "select":
                    temp = 0;
                    while (state && (i < questionsjson[key1]["answers"].length)) {
                        state = (document.getElementById(questionsjson[key1]["answers"][i]).value == questionsjson[key1]["correct"][i]);
                        i++;
                    }
                    if (state)
                        score += 1;
                    break;
            }
        }
        
        dialogBox.innerHTML = ((score / Object.entries(questionsjson).length) * 100) + "% !";
    }


    function reset() {
        // Everything disapear
        for (i = 0; i < questionsSlides.length; i++)
            questionsSlides[i].classList.add("hidden");
        resultSlide.classList.add("hidden");

        // we re-start the counter and get back to the first question
        currentSlide = "1";
        document.getElementById("question_" + currentSlide).classList.remove("hidden");
    }


    for (i = 0; i < prevButtons.length; i++)
        prevButtons[i].addEventListener("click", function (event) { prev() });
    for (i = 0; i < nextButtons.length; i++)
        nextButtons[i].addEventListener("click", function (event) { next() });

    resetButton.addEventListener("click", function (event) { reset() });

    reset();
})();
