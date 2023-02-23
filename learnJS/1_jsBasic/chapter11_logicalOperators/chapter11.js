// //task 1  что выведет?
// alert( null || 2 || undefined ); //2
//
// //task 2  что выведет?
// alert( alert(1) || 2 || alert(3) ); //1, 2
//
// //task 3  что выведет?
// alert( 1 && null && 2 ); //null
//
// //task 4 что выведет?
// alert( alert(1) && alert(2) ); //1, undefined
//
// //task 5 что выведет?
// alert( null || 2 && 3 || 4 ); //3

//task 6 Проверка значения из диапазона
// let age = 13;
//
// if (age <= 90 && age >= 14) {
//     alert( 'Возраст находится в нужном диапазоне' );
// } else {
//     alert('Возраст не подходит');
// }

//task 7 Проверка значения вне диапазона
//вариант 1
// let age = 13;
// if (age < 14 || age > 90) {
//     alert( 'Возраст находится в нужном диапазоне' );
// } else {
//     alert('Возраст не подходит');
// }
// //вариант 2
// if (!(age >= 14 && age <= 90)) {
//     alert( 'Возраст находится в нужном диапазоне' );
// } else {
//     alert('Возраст не подходит');
// }

//task 8 Вопрос об "if"
// if (-1 || 0) alert( 'first' ); //выполнится
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' ); // выполнится

//task 9 Проверка логина
alert( 'Привет, сейчас проверим логин и пароль' )
let receivedLogin = prompt('Кто там?', '');
if (receivedLogin === 'Админ') {
    let receivedPassword = prompt('Пароль?', '');
    if (receivedPassword === 'Я Главный') {
        alert('Здравствуйте!')
    } else if (receivedPassword === '' || receivedPassword === null) {
        alert('Отмена')
    } else {
        alert('Неверный пароль')
    }
} else if (receivedLogin === '' || receivedLogin === null) {
    alert('Отмена')
} else {
    alert('Я вас не знаю')
}


