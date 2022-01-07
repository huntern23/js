// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додатив об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`
//         model: ${this.model}
//         producer: ${this.producer}
//         year: ${this.year}
//         max speed: ${this.maxSpeed}
//         engine capacity: ${this.engineCapacity}
//         driver: ${this.driver.name}`
//         );
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car(`TT`, `AUDI`, 2020, 300, 2.0);
// car.increaseMaxSpeed(111);
// car.changeYear(2022);
// car.addDriver({name: prompt(`enter a driver name`)});
// car.drive();
// car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     };
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info() {
//         console.log(`
//         model: ${this.model}
//         producer: ${this.producer}
//         year: ${this.year}
//         max speed: ${this.maxSpeed}
//         engine capacity: ${this.engineCapacity}
//         driver: ${this.driver.name}`
//         );
//     };
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car(prompt(`enter the car model`),prompt(`enter the producer of the car`),prompt(`enter the year of manufacture of the machine`),prompt(`enter the max speed`), prompt(` enter the engine capacity`));
// car.increaseMaxSpeed(121);
// car.changeYear(2022);
// car.addDriver({name: prompt(`enter a driver name`)});
// car.drive();
// car.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, size) {
//         super(name, age);
//         this.size = size;
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, shoe) {
//         super(name, age);
//         this.shoe = shoe;
//     }
//
//     findPrincess(arr) {
//         let princess = 0;
//         for (const girl of arr) {
//             if (girl.size === this.shoe) {
//                 princess = girl;
//             }
//         }
//         princess ? console.log('Cinderella is ' + princess.name) : console.log('No one is Cindarella');
//     }
// }
//
// let array = [
//     new Cinderella(`olya`, 20, 36),
//     new Cinderella(`katya`, 18, 35),
//     new Cinderella(`liza`, 17, 37.5),
//     new Cinderella(`nastya`, 23, 38.5),
//     new Cinderella(`sofia`, 30, 39),
//     new Cinderella(`solomia`, 19, 38),
//     new Cinderella(`anna`, 21, 35),
//     new Cinderella(`marta`, 21, 36.5),
//     new Cinderella(`sasha`, 22, 40),
//     new Cinderella(`dina`, 18, 37),
// ]
// let prince = new Prince(`kirill`, 20, +prompt(`enter a number`));
// prince.findPrincess(array);