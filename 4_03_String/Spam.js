/* Проверьте спам
Напишите функцию checkSpam(str), которая возвращает true, 
если строка str содержит „viagra“ или „XXX“, а иначе false.
Функция должна быть нечувствительна к регистру:
*/

function checkSpam(str){
    var spam = str.toUpperCase();
    return !!(~spam.indexOf("VIAGRA") || ~spam.indexOf("XXX")); // !! - двойное отрицание - приводит к Boolean
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))