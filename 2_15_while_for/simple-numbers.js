function isSimpleNumber(num){
    var countZero = 0
    for (let index = 2; index < num; index++) {
        if (num % index == 0){
            countZero += 1;
            return false;
        };
    };
    if (countZero === 0 && num > 1){
        return true;
    }
};

function findSimpleNumbers(start,end){
    for (let index = start; index <= end; index++) {
        if (isSimpleNumber(index)){
            console.log(index);
        }
    }
}
findSimpleNumbers(0,111)
