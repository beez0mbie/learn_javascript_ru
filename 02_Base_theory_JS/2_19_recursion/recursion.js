function sumTo(n){
    var sum = n;
    for (let index = 0; index < n; index++) {
        sum += index
    }
    return sum;
}

function sumToR(n){
    if (n != 1){
        return n + sumToR(n-1)
    } else {
        return n
    }
}
function sumToProgression(n){
    return (((1 + n)*n/2));
}

console.log(sumTo(100000))