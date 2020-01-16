function fibonachi(n){
    var a = 1;
    var b = 0;
    for (let index = 3; index <=n; index++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonachi(4));