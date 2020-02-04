const everyLoop = (array, testFunc) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!testFunc(element)) return false
    }
    return true
}

console.log(everyLoop([1,1,1,1,10], n => n < 10));

//from book:
function everyBook(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }

/*
To build every on top of some, we can apply De Morgan’s laws, 
which state that a && b equals !(!a || !b). This can be generalized to arrays, 
where all elements in the array match if there is no element in the array that 
does not match.
*/
const everySomeBook = (array, testFunc) => {    
    return !array.some(element => !testFunc(element))
}

console.log(everySomeBook([1, 3, 5], n => n < 10));