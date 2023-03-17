//task 1 Декоратор-шпион
function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

//task 2 Задерживающий декоратор
function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(alert, 1000);

//task 3 Декоратор debounce
function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}

