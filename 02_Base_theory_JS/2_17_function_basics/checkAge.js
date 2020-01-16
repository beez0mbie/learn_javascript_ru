function checkAge(age){
    return age > 18 ? true : 'Родители разрешили?';
}

function checkAge2(age){
    return (age > 18) || 'Родители разрешили?';
}
console.log(checkAge2(18))