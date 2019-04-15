/*
if (a + b < 4) {
    result = 'Мало';
  } else {
    result = 'Много';
};
*/

var a = 1;
var b = 2;

result = a + b < 4 ? 'Мало' : 'Много';
console.log(result)

/*
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

var login = 'хуй'

message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'нет логина': 
    '';

console.log(message)
