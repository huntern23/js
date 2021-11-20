// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a,b,c){
    if(a<b && a<c){
        document.write(`Найменше число це ${a}`)
    }
    else if(c<b && c<a){
        document.write(`Найменше число це ${c}`)
    }
    else if(b<a && b<c){
        document.write(`Найменше число це ${b}`)
    }
    else{
        document.write('Помилка введення!')
    }
}
min(3,5,2);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(a,b,c){
    if(a>b && a>c){
        document.write(`Найбільше число це ${a}`)
    }
    else if(c>b && c>a){
        document.write(`Найбільше число це ${c}`)
    }
    else if(b>a && b>c){
        document.write(`Найбільше число це ${b}`)
    }
    else{
        document.write('Помилка введення!')
    }
}
document.write('<br>')// відступ від попереднього запису
max(3,5,2);
// - створити функцію яка повертає найбільше число з масиву
let arrMax = [2,5,4,6,10,7];
function arrayMax(array) {
        let max = array[0];
        for (const element of array) {
            if(element > max){
                max = element;
            }
        }
        return max;
    }
    console.log(arrayMax(arrMax));
// - створити функцію яка повертає найменьше число з масиву
let arrMin = [2,5,4,6,10,7];
function arrayMin(array) {
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
console.log(arrayMin(arrMin));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [2,3,4,5];
function sum(array){
    let sum=0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
console.log(sum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr2 = [2,3,4,5];
function seredne(array){
    let sum=0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return (sum)/array.length
}
console.log(seredne(arr2))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arr3 = [2,3,4,5];
function maxminArray(array){
    let min = array[0];
    let max = array[0];
    for (const arrayElement of array) {
        if (arrayElement>max){
            max= arrayElement;
        }
        if (arrayElement<min){
            min = arrayElement;
        }
    }
    document.write(max);
    return min;
   }
   document.write('<br>'); // відступ від попереднього запису
console.log(maxminArray(arr3))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomizer(length){
    let arr= [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random()*100);

    }
    return arr;
}
console.log(randomizer(5))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomizerlimit(length,limit){
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random()*limit);

    }
    return arr;
}
console.log(randomizerlimit(5,10))
   // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr4 = [1,5,6,6,7,87,87]
function reverseArr(array){
        let arrNew = [];
    for (let i = array.length-1; i >= 0; i--) {
        arrNew.push(array[i])

    }
    return arrNew;
  }
  console.log(reverseArr(arr4));






