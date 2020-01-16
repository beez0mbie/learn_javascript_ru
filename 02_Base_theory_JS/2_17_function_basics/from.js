var from = "Маша";

function showMessage(from, text) { // параметры from, text

    from = "** " + from + " **"; // здесь может быть сложный код оформления
  
    console.log(from + ': ' + text);
}

showMessage(from, 'Привет!');

console.log(from)