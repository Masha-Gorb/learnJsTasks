//task 1 Сделать первый символ заглавным
function ucFirst (str) {
    return str[0].toUpperCase() + str.slice(1)
}

//task 2 Проверка на спам
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

//task 3 Усечение строки
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

//task 4 Выделить число
function extractCurrencyValue(str) {
    return +str.slice(1);
}