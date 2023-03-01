//task 1 Использование "this" в литерале объекта
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат?
// Error: Cannot read property 'name' of undefined
//неправильный синтаксис использования this
//user.ref().name если вызвать через точку, то все работает

//task 2 Создайте калькулятор
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//task 3 Цепь вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // возвращаем объект из каждого вызова
    },
    down() {
        this.step--;
        return this; // возвращаем объект из каждого вызова
    },
    showStep() {
        alert( this.step );
        return this; // возвращаем объект из каждого вызова
    }
};

ladder.up().up().down().showStep().down().showStep();
