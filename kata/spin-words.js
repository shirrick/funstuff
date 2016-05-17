// function spinWords(string) {
//     //бьём строку на слова
//     var splitSentence = string.split(' ');
//     for (i = 0; i < splitSentence.length; i++) { //задаем перебор
//         //проверяем длину
//         if (splitSentence[i].length > 5) {
//             //переворачиваем слово, прошедшее проверку
//             var result = (splitSentence[i].split('').reverse().join(''));
//             // убрать возврат, чтоб не брякало
//             return result;
//         }
//     }
}



function mySpin(string) {
    var splitSentence = string.split(' ');
    var returnString = "";

    for (var i = 0; splitSentence.length - i; returnString += ((splitSentence[i].length > 5) ? (splitSentence[i].split('').reverse().join('')) : splitSentence[i]) + ' ', i++);

    console.log(returnString);
}
