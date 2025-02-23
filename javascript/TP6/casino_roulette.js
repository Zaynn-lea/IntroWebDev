
/*
TP 6 : Roulette !

I find the instructions hard to comprehend, for instance : what is a wining number ?

I took care of this part too late to ask the teacher about it,
thinking it would have been more straight forward

___________________________________________________________________________________________________________________________

made by :
    Gély Léandre :: https://github.com/Zaynn-lea

date :
    started      :  23 / 02 / 2025
    last updated :  23 / 02 / 2025
*/


// We encapsulate it in an anonymous function to avoid namespace conflict

(function () {
    var nbrSpinsInput = document.getElementById("number_spins_input");

    var last30SpinsDisplay = document.getElementById("last_30_spins");

    var simulateButton = document.getElementById("simulate_button");

    var totalQualifiantDisplay   = document.getElementById("total_qualifiant_display"),
        winingQualifiantDisplay  = document.getElementById("winning_qualifiant_display"),
        loosingQualifiantDisplay = document.getElementById("loosing_qualifiant_display"),
        winRateDisplay           = document.getElementById("win_rate_display"),
        winPercentDisplay        = document.getElementById("win_percent_display");

    var totalQualifiant   = 0,
        winingQualifiant  = 0;

    var nbrSpins = 0;

    var spinsArray = [];


    function isQualifiant(nbrIndex) {
        var state    = nbr,
            tempFlag = false;

        var nbr = spinsArray[nbrIndex],
            i   = 1;

        var gaps = [0, 0];

        
        if (state) {
            while (state && (i < 30)) {
                state = nbr != spinsArray[nbrIndex - i];
                i++;
            }
        }

        if (state) {
            state = false;
            i     = 1;

            while (!state && (i < 18)) {
                // Here to catch the 2nd appearance
                if (!tempFlag && (spinsArray[nbrIndex + i] == nbr)) {
                    tempFlag = true;
                    gaps[0]   = i;
                }

                if ( tempFlag && (spinsArray[nbrIndex + i] == nbr)) {
                    state  = true;
                    gaps[1] = i - gaps[0];
                }

                i++;
            }
        }


        if (state) {
            state = Math.abs(gaps[0] - gaps[1]) <= 6;
        }


        if (state) {
            tempFlag = true;
            i        = 0;

            while (tempFlag && (i < nbrSpins - 2)) {
                if      (spinsArray[i] == spinsArray[i + 1] == spinsArray[i + 2]) {
                    i += 3;
                }
                else if (spinsArray[i] == spinsArray[i + 1]) {
                    i += 2;
                }
                else {
                    i++;
                }
            }
        }


        return state;
    }


    function spins() {
        nbrSpins = Math.max(
            Math.min(
                nbrSpinsInput.value,
                1000000
            ),
            1
        );

        for (i = 0; i < nbrSpins; i++) {
            spinsArray.push(Math.floor(Math.random() * 37));
         
            // Didn't hads time to debug the display

            // last30SpinsDisplay.innerHTML = "";
            // for (j = 0; j < Math.min(30, i); j++)
            //     last30SpinsDisplay.innerHTML += "<span>" + spinsArray[j] + "</span>";
        }


    }


    function simulate() {
        spins();

        spinsArray.forEach(element => {
            if (isQualifiant(element))
                totalQualifiant++;
        });
    }


    function result() {
        simulate();

        totalQualifiantDisplay.innerHTML   = "Number of total qualifiying number : "   + totalQualifiant;
        winingQualifiantDisplay.innerHTML  = "Number of winning qualifiying number : " + winingQualifiant;
        loosingQualifiantDisplay.innerHTML = "Number of loosing qualifiying number : " + (totalQualifiant - winingQualifiant);
        winRateDisplay.innerHTML           = "Win rate : "        +  (winingQualifiant / (totalQualifiant - winingQualifiant));
        winPercentDisplay.innerHTML        = "Win percentages : " + ((winingQualifiant / (totalQualifiant - winingQualifiant)) * 100) + "%";
    }

    simulateButton.addEventListener("click", function (event) { result() });
})();
