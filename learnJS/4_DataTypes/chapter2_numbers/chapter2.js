//task 1 Сумма пользовательских чисел
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

//task 2 Почему 6.35.toFixed(1) == 6.3?
//потому что 6.35 — бесконечная двоичная дробь
alert( (6.35 * 10).toFixed(20) );

//task 3 Ввод числового значения
function readNumber() {
    let num;

    do {
        num = prompt("Введите, пожалуйста, число", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Введенное число: ${readNumber()}`);

//task 4 Бесконечный цикл по ошибке
// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }
//цикл никогда не завершится потому что i не станет никогда равным 10 (происходит потеря точности)

//task 5 Случайное число от min до max
function random(min, max) {
    return min + Math.random() * (max - min);
}

//task 6 Случайное целое число от min до max
function randomInteger(min, max) {
    let result = min + Math.random() * (max + 1 - min);
    return Math.floor(result);
}

alert( randomInteger(1, 3) );
