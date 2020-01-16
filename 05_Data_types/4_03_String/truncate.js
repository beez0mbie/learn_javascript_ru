/*Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str,
и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

Результатом функции должна быть (при необходимости) усечённая строка.
*/

function truncate(str, maxlength) {
    var shortStr;
    if (str.length > maxlength){
        shortStr = str.slice(0, maxlength - 3) + "...";
        return shortStr;
    } 
    return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20))

//Shorter

function truncate2(str, maxlength) {
    return (str.length > maxlength) ? 
        str.slice(0, maxlength - 3) + "..." : str;
}

console.log(truncate2("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate2("Всем привет!", 20))