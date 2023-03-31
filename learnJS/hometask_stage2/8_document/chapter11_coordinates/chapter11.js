//task 1 Найдите координаты точек относительно окна браузера
//Внешние углы
let coords = elem.getBoundingClientRect();
let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];
//Верхний левый внутренний угол
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
//Нижний правый внутренний угол
let answer4 = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
];

//task 2 Покажите заметку рядом с элементом
