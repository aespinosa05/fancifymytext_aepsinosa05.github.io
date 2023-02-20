var textArea = document.getElementById("fancyTextBox");
var fancyRadio = document.getElementById("fancyRadio");
var boringRadio = document.getElementById("boringRadio");

function biggerClicked() {
    textArea.style.fontSize = "24px";
}

function radioClicked() {
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        textArea.style.fontWeight = "";
        textArea.style.color = "";
        textArea.style.textDecoration = "";
    }
}

function mooClicked() {
    var string = textArea.value = textArea.value.toUpperCase();
    var parts = string.split(".");
    for (var i = 0; i < parts.length - 1; i++) {
        var words = parts[i].split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        parts[i] = words.join(" ");
    }
    string = parts.join(".");
    textArea.value = string;
}

