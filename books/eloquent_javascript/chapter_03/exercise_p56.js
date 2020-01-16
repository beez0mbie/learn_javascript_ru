let minFunc = (a,b) => a < b ? a : b;

console.log(minFunc(5,1), minFunc(3, 11), minFunc(2,2));

let isEven = (a) => {
    a = Math.abs(a)
    if (a === 1) {
        return false
    } else if (a === 0) {
        return true
    } else {
        return isEven(a - 2)
    }
}

console.log(isEven(50),isEven(75), isEven(-1));

let countChars = (word, char) => {
    let count = 0
    for (let index = 0; index < word.length; index++) {
        if(word[index] === char){
            count += 1
        }
    }
    return count;
}
console.log(countChars('skjajdlBBBBBkhladf', 'a'));
 
