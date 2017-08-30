
function enforceTruth(queryId,resId) {
    var query = document.getElementById(queryId);
    var result = document.getElementById(resId);
    if(!query || !result) {
        query = document.getElementsByClassName(queryId)[0];
        result = document.getElementsByClassName(resId)[0];
    }
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
else if (document.title.indexOf("DuckDuckGo") != -1) {
    enforceTruth('expression','display');
    enforceTruth('tile__past-formula one-line','tile__past-result one-line');
}

