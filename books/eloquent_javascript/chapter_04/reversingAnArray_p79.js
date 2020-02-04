const reverseArray = (array) => {
    let newArray = []
    for (let index = array.length - 1; index >= 0 ; index--) {
        const element = array[index];
        newArray.push(element)
    }
    return newArray
}

const test = reverseArray([1,2,3,4,5, 'd', 'f', 'g', 'h'])
console.log( 'reverseArray ' +
    test
);

const reverseArrayInPlace = (arr) => {
    var i = 0;
    while (i < arr.length - 1) {
        arr.splice(i, 0, arr.pop());
        i++;
    }
    return arr;
}

const arrayTest = [1,2,3,4,5]
reverseArrayInPlace(arrayTest)
console.log('reverseArrayInPlace ' + 
    arrayTest
);
