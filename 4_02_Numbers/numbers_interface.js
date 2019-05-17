//Задача Интерфейс суммы
firstNumber = +prompt('Введите первое число', 0 );
secondNumber = +prompt('Введите второе число', 0);

alert('Простое вложение ' + sumOfNumbers(firstNumber,secondNumber));

function sumOfNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

//Задача Сложение цен

alert('Округленная сумма ' + round(sumOfNumbers(firstNumber,secondNumber)));

function round(fractionalNumber){
    return +fractionalNumber.toFixed(10)
}