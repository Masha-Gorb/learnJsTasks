//task 1 Обязателен ли "else"?
//обе функции работают одинаково, отличий нет, можно и без else
function checkAgeOne(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

function checkAgeTwo(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

//task 2 Перепишите функцию, используя оператор '?' или '||'
const checkAgeFirstVar = (age) => age > 18 ? true : confirm('Родители разрешили?');
const checkAgeSecondVar = (age) => (age > 18) || confirm('Родители разрешили?');

//task 3 Функция min(a, b)
const min = (a, b) => a > b ? b : a;
console.log(min(2, 5));

//task 4 Функция pow(x,n)
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень должна быть натуральным числом`);
} else {
    alert( pow(x, n) );
}