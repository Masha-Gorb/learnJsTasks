//task 1 Найти размер прокрутки снизу
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//task 2 Узнать ширину полосы прокрутки
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);

//task 3 Поместите мяч в центр поля
//см файл chapter9_task3.html

//task 4 В чём отличие CSS-свойств width и clientWidth
//В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
//1. clientWidth включает внутренние отступы
//2. getComputedStyle не всегда даст ширину
//3. clientWidth возвращает число, а getComputedStyle(elem).width строку

