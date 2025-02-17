
/*
TP 5 : Interactive Grocery List

It's a mix of Exercice 1 and 2, merging both functionalities

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  17 / 02 / 2025
    last updated :  17 / 02 / 2025
*/


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var clearButton = document.getElementById("clear_button"),
        addButton   = document.getElementById("add_button");

    var input   = document.getElementById("input_box"),
        listBox = document.getElementById("list_box");


    function submit() {
        // to assure we don't get any empty list elements
        if (input.value) {
            var newItem = document.createElement("li");

            newItem.innerHTML = "<button><i class=\"fa-solid fa-trash-can\"></i></button> " + input.value;
            newItem.addEventListener("click", function (event) {event.target.parentNode.parentNode.remove()});

            listBox.appendChild(newItem);

            // To be ready for the next element
            input.value = '';
        }
    }


    function reset() {
        input.value = '';

        while (listBox.hasChildNodes())
            listBox.removeChild(listBox.firstChild);

    }

    
    clearButton.addEventListener("click", function (event) { reset()  });
    addButton.addEventListener("click",   function (event) { submit() });

    input.addEventListener("keydown", function (event) { if (event.key.toLowerCase() == "enter") { submit() } });
})();
