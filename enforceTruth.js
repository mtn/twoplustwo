
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
enforceTruthGoogle();
enforceTruthBing();
