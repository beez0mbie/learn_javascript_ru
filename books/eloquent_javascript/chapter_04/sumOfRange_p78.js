let range = (start, end, step) => {
    let array = []
    if (start < end) {
        for (start; start <= end; step !== undefined ? start+= step: start++) {
            array.push(start)
            }
    } else {
        for (start; start >= end; step !== undefined ? start+= step: start--) {
            array.push(start)
            }
    }
    return array.reduce((a,b) => a + b)
}

const test = range(10,1,-2)
console.log(test);