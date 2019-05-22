"use strict"

var salaries = {
    'Vasya' : 100,
    'Petya' : 300,
    'Dasha' : 250
};

var none = {};

function theBiggestSalary(obj) {
    if (!isEmpty(obj)){
        var bigger = 0;
        for (var key in obj) {
            (obj[key] > bigger) ? bigger = obj[key] : bigger;
        }
        return bigger;
    }
    return "Object has none salaries"
}

function isEmpty(obj) {
    for (var key in obj) {
        return !obj[key];
    }
    return true;
}

console.log(theBiggestSalary(salaries));
console.log(theBiggestSalary(none));