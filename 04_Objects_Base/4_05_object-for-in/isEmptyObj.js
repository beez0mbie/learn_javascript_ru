/*
Определите, пуст ли объект
Создайте функцию isEmpty(obj), которая возвращает true,
если в объекте нет свойств и false – если хоть одно свойство есть.
*/

function isEmpty(obj) {
    for (var key in obj) {
        return !obj[key];
    }
    return true;
}

var schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'подъем';

console.log(isEmpty(schedule));