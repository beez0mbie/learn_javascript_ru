x = +prompt("enter the X", '')
n = +prompt("enter the exponent", '')

function pow(x,n){
    var exponent = x;
    for (let i = 1; i < n; i++) {
        exponent *= x;
    }
    return exponent;
}

if (n >= 1){
    alert(pow(x,n));
} else {
    alert('exponen is lower then 1')
}
