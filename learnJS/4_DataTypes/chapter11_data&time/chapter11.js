//task 1 Создайте дату
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

//task 2 Покажите день недели
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date) ); // ПТ

//task 3 День недели в европейской нумерации
function getLocalDay(date) {
    let day = date.getDay();
    if (day === 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }
    return day;
}

//task 4 Какой день месяца был много дней назад?
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//task 5 Последнее число месяца?
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

//task 6 Сколько сегодня прошло секунд?
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
}

alert(getSecondsToday());

//task 7 Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

//task 8 Форматирование относительной даты
function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // меньше 1 секунды
        return 'прямо сейчас';
    }
    let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды
    if (sec < 60) {
        return sec + ' сек. назад';
    }
    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
        return min + ' мин. назад';
    }
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );