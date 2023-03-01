//task 1 Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
    return str
        .split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

//task 2 Фильтрация по диапазону
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

//task 3 Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

//task 4 Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

//task 5 Скопировать и отсортировать массив
function copySorted(arr) {
    return arr.slice().sort();
}

//task 6 Создать расширяемый калькулятор
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

//task 7 Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert( names );

//task 8 Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин

//task 9 Отсортировать пользователей по возрасту
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//task 10 Перемешайте массив
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

//task 11 Получить средний возраст
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28

//task 12 Оставить уникальные элементы массива
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

//task 13 Создайте объект с ключами из массива
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}