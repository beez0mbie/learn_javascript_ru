"use strict"

var salaries = {
    "Vasya" : 250,
    "Dasha" : 300,
    "Petya" : 100
};

var none = {};

function sumOfSalaries(object) {
    var sum = 0;
    for (const key in object) {
        sum += object[key];
    }
    return sum;
}

console.log(sumOfSalaries(salaries));
console.log(sumOfSalaries(none));