    var sumNumber = 0;

function uniTotal(string) {
    var sumNumber = 0;

    if (string === '' || string === null) {
        string = 0;
    };

    for (i = 0; i < string.length; i++) {
        sumNumber += string.charCodeAt(i);
    }
    return sumNumber;
}

// прошли все тесты
