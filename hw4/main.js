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
console.log(rectangleArea(20,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    return Math.pow(r, 2) * 3.14;
}
console.log(areaCircle(4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return 2 * 3.14 * h * r;
}
console.log(areaCylinder(10,5))
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=[1,true,'wgegegew', 5,2]
function arr1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
arr1(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function li(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
li('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function li2(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
li2('text',4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [2,true,'ogoegwog', false, 5]
function arr2(arr) {
    for (let i = 0; i < 5; i++) {
        document.write(`<ul>`);
        document.write(`<li>${arr[i]}</li>`);
        document.write(`</ul>`);
    }
}
arr2(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array2 = [{id: 1, name: 'Oleg', age: 27}, {id: 2, name: 'Andrii', age: 10}, {id: 3, name: 'Inna', age: 41}];
function arr3(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name}  ${arrayElement.age}</div>`);
    }
}
arr3(array2)










