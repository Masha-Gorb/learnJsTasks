//task 1 Изменяем "prototype"
// 1 true.
// 2 false.
//3 true.
//4 undefined.

//task 2 Создайте новый объект с помощью уже существующего
//работающий вариант
function User(name) {
    this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name );