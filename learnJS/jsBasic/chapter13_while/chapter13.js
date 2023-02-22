//task 1  Последнее значение цикла
let i = 3;

while (i) {
    alert( i-- ); //1, так как 0 равен false
}

//task 2 Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert( i );
//1, 2, 3, 4


let i = 0;
while (i++ < 5) alert( i );
// 1, 2, 3, 4, 5
// вар с постфиксным вариантом успеет записать i=5 до сравнения 5 < 5

//task 3 Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4
//оба цикла вывели одинаковые значения

//task 4 Выведите чётные числа
for (let i = 0; i <= 10; i++) {
    if(i%2 === 0) {
        alert(i)
    }
}

//task 5 Замените for на while
let i = 0;
while (i <= 3) {
    alert( `number ${i}!` );
    i++
}

//task 6 Повторять цикл, пока ввод неверен
while (true) {
    let value = prompt ('Введите пожалуйста число, больше 100', '')
    if (value > 100) break;
    if (value === null) break;
}

//task 7 Вывести простые числа
const num = (i,n) =>

{
    for( i; i<=n; i++) {
        if( i % 2 === 0 ){
            alert(i)
        }
    }}

num(1,10);

