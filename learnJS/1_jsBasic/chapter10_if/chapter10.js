//task 1 выведется ли алерт?

// if ("0") {
//     alert( 'Привет, это было первое задание' ); // да, так как не пустая строка это true
// }

//task 2
//     alert( 'Привет, это задание два' )
//     let receivedName = prompt('Какое "официальное" название JavaScript?', '');
//     if (receivedName === 'ECMAScript') {
//         alert('Верно!')
//     } else {
//         alert ('Не знаете? "ECMAScript"!')
//     }

//task 3
alert( 'Привет, это задание три' )
let receivedNumber = prompt('Введите любое число', '');
if (+receivedNumber > 0) {
    alert('1')
} else if (+receivedNumber < 0){
    alert ('-1')
} else {
    alert ('0')
}

//task 4 (переписать с оператором "?")
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

let result = a + b < 4 ? 'Мало' : 'Много';

//task 5 (переписать с оператором "?")

// let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';



