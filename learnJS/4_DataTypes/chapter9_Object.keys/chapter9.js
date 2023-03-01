//task 1 Сумма свойств объекта
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

//task 2 Подсчёт количества свойств объекта
function count(obj) {
    return Object.keys(obj).length;
}