function enforceTruth() {
    var query = document.getElementById('cwles');
    var result = document.getElementById('cwos');
    if (query.innerText.trim() === '2 + 2 =') {
        result.innerText = 5;
    }
}
