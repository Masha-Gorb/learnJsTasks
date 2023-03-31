//task 1
//Можно ли "перевыполнить" промис?
//Ответ: выведется 1, тк учитывается только первый вызов resolve

//task 2
//Задержка на промисах
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
