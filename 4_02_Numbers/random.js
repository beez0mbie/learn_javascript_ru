//Случайное из интервала (0, max)
function randomFromZeroToMax(max){
    return Math.round(Math.random() * max);
}

console.log(randomFromZeroToMax(11))

//Случайное из интервала (min, max)
function randomMinToMax(min, max){
    return Math.round(min + Math.random() * (max - min));
}

console.log(randomMinToMax(10,15))

function randomFloorMixToMax(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min)); // более правильное решение, все числа выпадают с одинаковой вероятностью
}

console.log(randomFloorMixToMax(1, 3))