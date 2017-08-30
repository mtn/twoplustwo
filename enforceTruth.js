
function enforceTruth(queryId,resId) {
    var query = document.getElementById(queryId);
    var result = document.getElementById(resId);
    if (/2\s?\+\s?2\s?=?$/.test(query.innerText)) {
        result.innerText = 5;
    }
}

if (document.title.indexOf("Google") != -1) {
    enforceTruth('cwles','cwos');
}
else if (document.title.indexOf("Bing") != -1) {
    enforceTruth('rcEqB','rcTB');
}

