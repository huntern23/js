// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return Math.pow(r, 2) * 3.14;
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return 2 * 3.14 * h * r;
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function arr(arr0, arr1, arr2, arr3, arr4) {
    let arr = [arr0, arr1, arr2, arr3, arr4];
    for (let i = 0; i < 5; i++) {
        console.log(arr[i]);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function li(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function li2(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arr2(arr0, arr1, arr2, arr3, arr4) {
    let arr = [arr0, arr1, arr2, arr3, arr4];
    for (let i = 0; i < 5; i++) {
        document.write(`<ul>`);
        document.write(`<li>${arr[i]}</li>`);
        document.write(`</ul>`);
    }
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arr3(id1, name1, age1, id2, name2, age2, id3, name3, age3) {
    let arr = [
        {
            id: id1,
            name: name1,
            age: age1
        },
        {
            id: id2,
            name: name2,
            age: age2
        },
        {
            id: id3,
            name: name3,
            age: age3
        }
    ]
    document.write(`<div>`)
    document.write(`${id1} `)
    document.write(`${name1} `)
    document.write(`${age1}`)
    document.write(`</div>`)
    document.write(`<div>`)
    document.write(`${id2} `)
    document.write(`${name2} `)
    document.write(`${age2}`)
    document.write(`</div>`)
    document.write(`<div>`)
    document.write(`${id3} `)
    document.write(`${name3} `)
    document.write(`${age3}`)
    document.write(`</div>`)
}










