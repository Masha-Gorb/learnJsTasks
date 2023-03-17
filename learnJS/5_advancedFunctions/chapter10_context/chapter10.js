//task 1 Связанная функция как метод
//функция выведет null

//task 2 Повторный bind
//код выведет Вася


//task 3 Свойство функции после bind
// undefined.
//у sayHi.bind нет свойства test

//task 4 Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//task 5 Использование частично применённой функции для логина
askPassword(() => user.login(true), () => user.login(false));
