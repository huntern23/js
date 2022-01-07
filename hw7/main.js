// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// const users = [];
// for (let i = 0; i < 10; i++) {
//     let name = prompt(`enter user name`);
//     let surname = prompt(`enter user surname`);
//     let email = prompt(`enter user email`);
//     let phone = prompt(`enter user phone`);
//     users.push(new User(i+1, name, surname,email,phone));
// }
// console.log(users);

const users = [
    new User(9, 'KOLYA', 'POPOV', 'POPOV@MAIL.COM', `+380974536947`),
    new User(2, 'TANYA', 'DIDENKO', 'DIDENKO@MAIL.COM', `+380968736038`),
    new User(1, 'OLYA', 'DIDUCH', 'DIDUCH@MAIL.COM', `+380974536947`),
    new User(6, 'VLAD', 'SLOBODYAN', 'SLOBODYAN@MAIL.COM', `+380974536947`),
    new User(5, 'KOSTYA', 'GUROV', 'GUROV@MAIL.COM', `+380974536947`),
    new User(10, 'VOVA', 'OLEXUK', 'OLEXUK@MAIL.COM', `+380974536947`),
    new User(4, 'LILYA', 'RUDINOVA', 'RUDINOVA@MAIL.COM', `+380974536947`),
    new User(8, 'KIRILL', 'SAFONOV', 'SAFONOV@MAIL.COM', `+380974536947`),
    new User(7, 'SASHA', 'FEDOROVA', 'FEDOROVA@MAIL.COM', `+380974536947`),
    new User(3, 'DIMA', 'DEMCHUK', 'DEMCHUK@MAIL.COM', `+380974536947`),

]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(users.filter(value => !(value.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(9, 'KOLYA', 'POPOV', 'POPOV@MAIL.COM', `+380974536947`, [`car`, `hoover`, `snake`, `cat`]),
    new Client(2, 'TANYA', 'DIDENKO', 'DIDENKO@MAIL.COM', `+380968736038`, [`car`, `hoover`, `snake`, `cat`, `phone`]),
    new Client(1, 'OLYA', 'DIDUCH', 'DIDUCH@MAIL.COM', `+380974536947`, [`car`, `hoover`]),
    new Client(6, 'VLAD', 'SLOBODYAN', 'SLOBODYAN@MAIL.COM', `+380974536947`, [`car`, `hoover`, `snake`, `cat`, `phone`, `washing machine`]),
    new Client(5, 'KOSTYA', 'GUROV', 'GUROV@MAIL.COM', `+380974536947`, [`car`, `washing machine`]),
    new Client(10, 'VOVA', 'OLEXUK', 'OLEXUK@MAIL.COM', `+380974536947`,[`car`]),
    new Client(4, 'LILYA', 'RUDINOVA', 'RUDINOVA@MAIL.COM', `+380974536947`, [`car`, `hoover`, `snake`]),
    new Client(8, 'KIRILL', 'SAFONOV', 'SAFONOV@MAIL.COM', `+380974536947`, [`car`, `hoover`, `snake`, `cat`, `phone`, `washing machine`, `drugs`]),
    new Client(7, 'SASHA', 'FEDOROVA', 'FEDOROVA@MAIL.COM', `+380974536947`, [`car`, `hoover`, `snake`, `cat`, `phone`, `washing machine`, `pen`, `watch`]),
    new Client(3, 'DIMA', 'DEMCHUK', 'DEMCHUK@MAIL.COM', `+380974536947`, [`car`, `hoover`, `snake`, `cat`, `phone`, `washing machine`]),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients.sort((a, b) => a.order.length - b.order.length));
