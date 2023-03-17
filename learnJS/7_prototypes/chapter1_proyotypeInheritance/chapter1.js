//task 1 Работа с прототипами
//true, берётся из rabbit.
// null, берётся из animal.
// undefined, такого свойства больше нет.

//task 2 Алгоритм поиска
//1
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined
//2
//ответ: не имеет значения

//task 3 Куда будет произведена запись?
//Ответ: rabbit.

//task 4 Почему наедаются оба хомяка?
let hamster = {
    stomach: [],

    eat(food) {
        // тут исправляется проблема одного живота на двоих хомяков
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};


speedy.eat("apple");
alert( speedy.stomach ); // apple

alert( lazy.stomach ); // <ничего>