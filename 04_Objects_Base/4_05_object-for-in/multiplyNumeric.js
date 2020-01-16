var menu = {
    weigth : 200,
    heigth : 300,
    title : "My menu"
};

function multiplyNumeric(obj){
    for (const key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;     
        }
    }
    return obj;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

console.log(multiplyNumeric(menu));