//task 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//task 2 Проверка на пустоту
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//task 3 Объекты-константы?
const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete"; // да, тк const защищает от изменений саму переменную user, а не вложенные св-ва

//task 4 Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

//task 5 Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
