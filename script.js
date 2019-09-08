function calculate() {
    var input = document.getElementById("input").value
    input = input.toUpperCase()
    var qwerty = 0
    var dvorak = 0
    for (l = 0; l < input.length; l++) {
        i = input[l]
        if (["Q", "W", "E", "R", "U", "I", "O", "P"].indexOf(i) >= 0) {
            qwerty += 1.8*2
        } else if (["G", "H", "'", '"'].indexOf(i) >= 0) {
            qwerty += 1.9*2
        } else if (["Z", "X", "C", "V", "N", "M", "<", ",", ">", ".", "?", "/"].indexOf(i) >= 0) {
            qwerty += 2*2
        } else if (["T", "[", "{"].indexOf(i) >= 0) {
            qwerty += 2.5*2
        } else if (["Y"].indexOf(i) >= 0) {
            qwerty += 3*2
        } else if (["B"].indexOf(i) >= 0) {
            qwerty += 3.5*2
        } else if (["2", "@", "3", "#", "4", "$", "5", "%", "8", "*", "9", "(", "0", ")"].indexOf(i) >= 0) {
            qwerty += 3.7*2
        } else if (["-", "_"].indexOf(i) >= 0) {
            qwerty += 3.8*2
        } else if (["1", "!", "7", "&"].indexOf(i) >= 0) {
            qwerty += 4*2
        } else if (["]", "}", "6", "^"].indexOf(i) >= 0) {
            qwerty += 4.8*2
        } else if (["+", "="].indexOf(i) >= 0) {
            qwerty += 4.5*2
        }
    }

    for (l = 0; l < input.length; l++) {
        i = input[l]
        if (["'", '"', "<", ",", ">", ".", "P", "Y", "F", "G", "C", "R", "L"].indexOf(i) >= 0) {
            dvorak += 1.8*2;
        } else if (["I", "D", "_", '-'].indexOf(i) >= 0) {
            dvorak += 1.9*2;
        } else if ([":", ";", "Q", "J", "K", "B", "M", "W", "V", "Z"].indexOf(i) >= 0) {
            dvorak += 2*2;
        } else if (["Y", "?", "/"].indexOf(i) >= 0) {
            dvorak += 2.5*2;
        } else if (["F"].indexOf(i) >= 0) {
            dvorak += 3*2;
        } else if (["X"].indexOf(i) >= 0) {
            dvorak += 3.5*2;
        } else if (["2", "@", "3", "#", "4", "$", "5", "%", "8", "*", "9", "(", "0", ")"].indexOf(i) >= 0) {
            dvorak += 3.7*2;
        } else if (["[", "{"].indexOf(i) >= 0) {
            dvorak += 3.8*2;
        } else if (["1", "!", "7", "&"].indexOf(i) >= 0) {
            dvorak += 4*2;
        } else if (["+", "=", "6", "^"].indexOf(i) >= 0) {
            dvorak += 4.8*2;
        } else if (["]", "}"].indexOf(i) >= 0) {
            dvorak += 4.5*2;
        }
    }
    
    var h = (Math.max(qwerty, dvorak) / Math.min(qwerty, dvorak)).toFixed(2).toString();

    if (qwerty > dvorak) {
        ha = "<br></br>" + "Dvorak is " + h + " times more efficient";
    } else if (qwerty < dvorak) {
        ha = "<br></br>" + "Qwerty is " + h + " times more efficient";
    } else if (qwerty == 0 && dvorak == 0 && /\S/.test(input) == 0) {
        ha = "";
    } else if (qwerty == dvorak) {
        ha = "<br></br>Qwerty and Dvorak have the same efficiency.";
    }

    document.getElementById("output").innerHTML = "Qwerty distance: " + qwerty.toFixed(1) + " cm" + "<br></br>" + "Dvorak distance: " + dvorak.toFixed(1) + " cm" + ha;
}

document.addEventListener("DOMContentLoaded", function(e) {
    var field = document.getElementById("input");
    field.addEventListener("input", function (e) {
        calculate();
    });
});
