function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function styleText() {
    var textArea = document.getElementById("textArea");
    var fancy = document.getElementById("fancyShmancy").checked;
    var boring = document.getElementById("boringBetty").checked;

    if (fancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boring) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooFunction() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i] + "-Moo";
        }
    }
    textArea.value = sentences.join(".");
}
