//task 1 createTextNode vs innerHTML vs textContent
// 1 elem.append(document.createTextNode(text)) //работает как и 3 (добавляет текст в elem)
// 2 elem.innerHTML = text
// 3 elem.textContent = text //работает как и 1 (добавляет текст в elem)

//task 2 Очистите элемент
function clear(elem) {
    elem.innerHTML = '';
}

//task 3 Почему остаётся "aaa"?
// внутри <table> не может быть текста
//брайзер сам вынес текст за таблицу
// удалив таблицу текст остался виден

//task 4 Создайте список
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

//task 5 Создайте дерево из объекта
//in index.html
//<div id="field"></div>

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(field, obj) {
    field.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
    let li = '';
    let ul;
    for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
        ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

createTree(field, data);

//task 6 Выведите список потомков в дереве
// in index.html
//<ul>
//     <li>Животные
//       <ul>
//         <li>Млекопитающие
//           <ul>
//             <li>Коровы</li>
//             <li>Ослы</li>
//             <li>Собаки</li>
//             <li>Тигры</li>
//           </ul>
//         </li>
//         <li>Другие
//           <ul>
//             <li>Змеи</li>
//             <li>Птицы</li>
//             <li>Ящерицы</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//     <li>Рыбы
//       <ul>
//         <li>Аквариумные
//           <ul>
//             <li>Гуппи</li>
//             <li>Скалярии</li>
//           </ul>
//         </li>
//         <li>Морские
//           <ul>
//             <li>Морская форель</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//   </ul>
let lis = document.getElementsByTagName('li');

for (let li of lis) {
    // получить количество всех <li> ниже этого <li>
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    // добавить непосредственно к текстовому узлу (добавить к тексту)
    li.firstChild.data += ' [' + descendantsCount + ']';
}

//task 7 Создайте календарь в виде таблицы
//in index.html
//<div id="calendar"></div>
//<style>
//     table {
//       border-collapse: collapse;
//     }
//
//     td,
//     th {
//       border: 1px solid black;
//       padding: 3px;
//       text-align: center;
//     }
//
//     th {
//       font-weight: bold;
//       background-color: #E6E6E6;
//     }
//   </style>

function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() === mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 === 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) !== 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2012, 9);

//task 8 Цветные часы с использованием setInterval
// in index.html
//<head>
//   <style>
//     .hour {
//       color: red
//     }
//
//     .min {
//       color: green
//     }
//
//     .sec {
//       color: blue
//     }
//   </style>
// </head>
//<div id="clock">
//     <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
//   </div>
//   <input type="button" onclick="clockStart()" value="Start">
//   <input type="button" onclick="clockStop()" value="Stop">

//script
let timerId;

function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    if (!timerId) {
        timerId = setInterval(update, 1000);
    }
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}

//task 9 Вставьте HTML в список
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

//task 10 Сортировка таблицы
//in index.html
//<table id="table">
//     <tr>
//       <th>Имя</th>
//       <th>Фамилия</th>
//       <th>Возраст</th>
//     </tr>
//     <tr>
//       <td>John</td>
//       <td>Smith</td>
//       <td>10</td>
//     </tr>
//     <tr>
//       <td>Pete</td>
//       <td>Brown</td>
//       <td>15</td>
//     </tr>
//     <tr>
//       <td>Ann</td>
//       <td>Lee</td>
//       <td>5</td>
//     </tr>
//   </table>


let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);

