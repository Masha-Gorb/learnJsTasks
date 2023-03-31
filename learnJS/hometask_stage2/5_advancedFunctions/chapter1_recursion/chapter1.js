//task 1 Вычислить сумму чисел до данного
//вариант с циклом
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert( sumTo(100) );

//вариант через рекурсию
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
}

alert( sumTo(100) );

//вариант по формуле
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert( sumTo(100) );

//task 2 Вычислить факториал
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) );

//task 3 Числа Фибоначчи
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

//task 4 Вывод односвязного списка
//цикл
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}

printList(list);

//рекурсия
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    alert(list.value);

    if (list.next) {
        printList(list.next);
    }

}

printList(list);

//task 5 Вывод односвязного списка в обратном порядке
//цикл
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}

printReverseList(list);

//рекурсия
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}

printReverseList(list);