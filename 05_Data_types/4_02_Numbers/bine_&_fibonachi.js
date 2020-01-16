function fibonachi(n) {
    var a = 1,
        b = 0,
        c;
    for (let index = 1; index <= n; index++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonachi(77))

function bine(n){
    phi = (1 + Math.sqrt(5))/2
    return Math.pow(phi, n)/Math.sqrt(5); // Нужно использовать округление Math.round
}

console.log(bine(77));