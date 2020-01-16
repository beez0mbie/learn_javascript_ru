//Сделать первый символ заглавным
function ucFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst('2332'))