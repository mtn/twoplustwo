
// Google

function enforceTruthGoogle() {
    var query = document.getElementById('cwles');
    var result = document.getElementById('cwos');
    if (query.innerText.trim() === '2 + 2 =') {
        result.innerText = 5;
    }

}

// Bing

function enforceTruthBing() {
    var query = document.getElementById('rcEqB');
    var result = document.getElementById('rcTB');
    if (query.innerText.trim() === '2+2=') {
        result.innerText = 5;
    }
}
if (document.title.indexOf("Google") != -1) {
    enforceTruthGoogle();
}
if (document.title.indexOf("Bing") != -1) {
    enforceTruthBing();
} else {
    console.log("nope");
}

