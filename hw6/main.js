// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let length1 = "hello world";
let lenghLength1 = length1.length;
console.log(lenghLength1);
let length2 = "lorem ipsum";
let lenghLength2 = length2.length;
console.log(lenghLength2);
let length3 = "javascript is cool"
let lenghLength3 = length3.length;
console.log(lenghLength3);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up1 = "hello world";
let strUp1 = up1.toUpperCase();
let up2 = "lorem ipsum";
let strUp2 = up2.toUpperCase();
let up3 = "javascript is cool"
let strUp3 = up3.toUpperCase();
console.log(strUp1);
console.log(strUp2);
console.log(strUp3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1 = "HELLO WORLD";
let lowStr1 = str1.toLowerCase();
let str2 = "LOREM IPSUM";
let lowStr2 = str2.toLowerCase();
let str3 = "JAVASCRIPT IS COOL"
let lowStr3 = str3.toLowerCase();
console.log(lowStr1);
console.log(lowStr2);
console.log(lowStr3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let cleanStr = str.trim();
console.log(cleanStr);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToarray = (str) => {
        return str.split(' ');
    }
    let str4 = 'Каждый охотник желает знать';
    let arr = stringToarray(str4);
    console.log(arr);
    document.writeln(arr);
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, index) => {
    return str.substr(0, index);
};
let str5 = 'Каждый охотник желает знать';
document.writeln(delete_characters(str5, 7));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    return str.split(' ').join('-').toUpperCase();
    }
    let string = "HTML JavaScript PHP";
    console.log(insert_dash(string));
    document.writeln(insert_dash(string)); // 'HTML-JAVASCRIPT-PHP'
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstUp = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
};
document.write(firstUp('hello okten'));
console.log(firstUp('hello okten'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize("кожне слово починається з великої літери"));
console.log(capitalize("кожне слово починається з великої літери"));