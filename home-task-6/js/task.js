//  Task 1
// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

function f1() {
    let out_1 = document.querySelector(".out-1");

    res = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            res += `*`;
        }
        res += `_`;
    }
    out_1.innerHTML = res;
}
document.querySelector(".btn-1").onclick = f1;


//  Task 2
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
//Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

function f2() {
    let out_2 = document.querySelector(".out-2");

    result = '';
    for (let i = 1; i < 4; i++) {
        result += `${i} <br>`;
        for (let k = 0; k < 3; k++) {
            result += `*_`;
        }
        result += `<br>`;
    }
    out_2.innerHTML = result;
}
document.querySelector(".btn-2").onclick = f2;




//  Task 3
// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.

function f3() {
    let out_3 = document.querySelector(".out-3");

    result = '';
    for (let i = 0; i < 4; i++) {
        result += `<br>`;
        for (let k = 0; k < 3; k++) {
            result += `*_`;
        }

    }
    out_3.innerHTML = result;
}
document.querySelector(".btn-3").onclick = f3;



//  Task 7
// *
// **
// ***
// ****
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.

function f4() {
    let out_4 = document.querySelector(".out-4");

    result = '';
    for (let i = 0; i < 5; i++) {
        result += `<br>`;
        for (let k = 0; k < i; k++) {
            result += `*`;
        }

    }
    out_4.innerHTML = result;
}
document.querySelector(".btn-4").onclick = f4;
// Task 8
//Создайте массив arr8 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn8
// Вывод в out8
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function f8() {
    let out_8 = document.querySelector(".out-8");
    sum = arr8[0] + arr8[2] + arr8[3];
    out_8.textContent = sum;
}
document.querySelector(".btn-8").onclick = f8;

// Task 9
//Создайте массив arr9, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div9. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn9
// Вывод в out9

let arr9 = ["телец", "13", "май"];

function f9() {
    let out_9 = document.querySelector(".out-9");
    let out = ""
    for (let i = 0; i < arr9.length; i++) {
        out += arr9[i] + " ";
    }
    out_9.textContent = out;
}
document.querySelector(".btn-9").onclick = f9;


// Task 10
// Выведите последний элемент массива arr10. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn10
// Вывод в out10

let arr10 = [100, 200, 300, 400, 700, 121];

function f10() {
    let out_10 = document.querySelector(".out-10");

    out_10.textContent = arr10[arr10.length - 1];
}
document.querySelector(".btn-10").onclick = f10;


// Task 11
// Выведите массив arr11 в out11 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn11
// Вывод в out11
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3

let arr11 = ["one", "two", "three", "four", "five"];

function f11() {
    let out_11 = document.querySelector(".out-11");
    result = "";
    for (let i = 0; i < arr11.length; i++) {
        result += `${i} ${arr11[i]} `
    }

    out_11.textContent = result;
}
document.querySelector(".btn-11").onclick = f11;


// Task 12
// Используя цикл выведите в .out12 количество элементов arr12, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn12
// Вывод в out12

let arr12 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f12() {
    let out_12 = document.querySelector(".out-12");
    counter = 0;
    for (let i = 0; i < arr12.length; i++) {
        if (arr12[i] > 3) {
            counter++
        }
    }

    out_12.textContent = counter;
}
document.querySelector(".btn-12").onclick = f12;


// Task 13
// Выведите в .out13 сумму элементов в массиве arr13
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn13
// Вывод в out13

let arr13 = [4, 5, 6, 7, 8, 9, 10];

function f13() {
    let out_13 = document.querySelector(".out-13");
    let sum_13 = 0;
    for (i = 0; i < arr13.length; i++) {
        sum_13 += arr13[i]
    }
    out_13.innerHTML = sum_13;

}

document.querySelector(".btn-13").onclick = f13;


// Task 14
/*  Дан массив arr14= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив arr14_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив arr14_res. Действия должны запускаться при вызове функции f14.*/

let arr14 = [2, 3, 4, 5, 10, 11, 12];

function f14() {
    let out_14 = document.querySelector(".out-14");
    let arr14_res = arr14.map(item => Math.pow(item, 2));
    out_14.innerHTML = arr14_res;
}

document.querySelector(".btn-14").onclick = f14;

// Task 15
/*  Функция f15 должна с помощью filter отфильтровать массив f15 и создать новый массив arr15_res, куда добавить только числа из массива f15.  Функция должна возвращать arr15_res. */

let arr15 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

function f15() {
    let out_15 = document.querySelector(".out-15");
    let arr15_res = arr15.filter((item) => typeof item === "number")
    out_15.innerHTML = arr15_res;
}

document.querySelector(".btn-15").onclick = f15;


// Task 16
/*  Дан массив arr16 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal']. С помощью forEach, переберите массив a9 и преобразуйте все записи в массиве в нижний регистр. Действия должны запускаться при вызове функции f16. Функция должна возвращать arr16. */

let arr16 = [
    "Quantum Break",
    "Gears of War 4",
    "Mass Effect: Andromeda",
    "Far Cry Primal",
];

function f16() {
    let out_16 = document.querySelector(".out-16");
    let arr16_res = "";
    arr16.forEach((item) => {
        arr16_res += `${item.toLowerCase()}<br>`;
    })
    out_16.innerHTML = arr16_res;
}

document.querySelector(".btn-16").onclick = f16;



// Task 17
/*  Дан массив arr17 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода includes функция f17 должна определить, есть ли значение из переменной arr17_num в массиве. Если да - то функция возврaщает true, если нет false.*/

let arr17 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
let arr17_num = 9;
function f17() {
    let out_17 = document.querySelector(".out-17");
    let arr17_res = arr17.includes(arr17_num)
    out_17.innerHTML = arr17_res;
}

document.querySelector(".btn-17").onclick = f17;