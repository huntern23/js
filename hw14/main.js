//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// Promise

// function wakeUp(isWorkingDay = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 console.log('wake up!!');
//                 resolve('wake up!!');
//             }
//             reject('sleep');
//         },100);
//     })
// }
//
// function goBreakfast(food) {
//     return new Promise((resolve, reject) =>{
//      setTimeout(() => {
//          if (food) {
//              resolve(`go eat ${food}`);
//          }
//          reject('nothing have');
//      },300);
//     })
// }
//
// function takeShower(isTakeShower = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTakeShower) {
//                 resolve('you are clean');
//             }
//             reject('Oops');
//         }, 800);
//     })
// }
//
// function goWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('work');
//         },2000);
//     })
// }
//
// function waitForBus(isOurBus = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOurBus) {
//                 resolve('you will not late');
//             }
//             reject('waiting more');
//         }, 200);
//     })
// }
//
// function goLunch(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve(`go lunch ${food}`);
//             }
//             reject('Oops');
//         }, 800);
//     })
// }
//
// function continueWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//                 resolve('ohh, this work');
//         }, 3000);
//     })
// }
//
// function goHome(isThatRight = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isThatRight) {
//                 resolve('you are clean');
//             }
//             reject('continue woork, oh nooo');
//         }, 400);
//     })
// }
//
// function goDinner(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve(`go eat ${food}`);
//             }
//             reject('nothing have');
//         }, 300);
//     })
// }
//
// function readingBook(isReadingBook = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isReadingBook) {
//                 resolve('this book is cool');
//             }
//             reject();
//         }, 2000);
//     })
// }
//
// function listeningToMusic(isListening = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isListening) {
//                 resolve('...');
//             }
//             reject('go sleep');
//         }, 700);
//     })
// }
//
// function goSleep(isTakeShower = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTakeShower) {
//                 resolve('go to the bed');
//             }
//             reject('Oops');
//         }, 100);
//     })
// }
//
//
// wakeUp(true)
//     .then(morning => {
//         console.log(morning);
//
//         return goBreakfast('milk');
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return takeShower();
//     })
//     .then(shower => {
//         console.log(shower);
//
//         return goWork();
//     })
//     .then(work => {
//         console.log(work);
//
//         return waitForBus(true);
//     })
//     .then(bus => {
//         console.log(bus);
//
//         return goLunch('salad');
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return continueWork();
//     })
//     .then(work => {
//         console.log(work);
//
//         // return goHome(false);
//         return goHome(true);
//     })
//     .then(walk => {
//         console.log(walk);
//
//         return goDinner('meat');
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return readingBook(true);
//     })
//     .then(book => {
//         console.log(book);
//
//         return listeningToMusic(true);
//     })
//     .then(music => {
//         console.log(music);
//
//         return goSleep(true);
//     })
//     .then(sleep => {
//         console.log(sleep);
//     })
//     .catch(reason => {
//         console.error('error',reason);
//     })

// Async await

// function wakeUp(isWorkingDay = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 console.log('wake up!!');
//                 resolve('wake up!!');
//             }
//             reject('sleep');
//         }, 100);
//     })
// }
//
// function goBreakfast(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 console.log(`go eat ${food}`);
//                 resolve(`go eat ${food}`);
//             }
//             reject('nothing have');
//         }, 300);
//     })
// }
//
// function takeShower(isTakeShower = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTakeShower) {
//                 console.log('you are clean');
//                 resolve('you are clean');
//             }
//             reject('Oops');
//         }, 800);
//     })
// }
//
// function goWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('work');
//             resolve();
//         }, 2000);
//     })
// }
//
// function waitForBus(isOurBus = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOurBus) {
//                 console.log('you will not late');
//                 resolve('you will not late');
//             }
//             reject('waiting more');
//         }, 200);
//     })
// }
//
// function goLunch(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 console.log(`go lunch ${food}`);
//                 resolve(`go lunch ${food}`);
//             }
//             reject('Oops');
//         }, 800);
//     })
// }
//
// function continueWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('ohh, this work');
//             resolve();
//         }, 3000);
//     })
// }
//
// function goHome(isThatRight = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isThatRight) {
//                 console.log('you are clean');
//                 resolve('you are clean');
//             }
//             reject('continue woork, oh nooo');
//         }, 400);
//     })
// }
//
// function goDinner(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 console.log(`go eat ${food}`);
//                 resolve(`go eat ${food}`);
//             }
//             reject('nothing have');
//         }, 300);
//     })
// }
//
// function readingBook(isReadingBook = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isReadingBook) {
//                 console.log('this book is cool');
//                 resolve('this book is cool');
//             }
//             reject();
//         }, 2000);
//     })
// }
//
// function listeningToMusic(isListening = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isListening) {
//                 console.log('musiiic');
//                 resolve('...');
//             }
//             reject('go sleep');
//         }, 700);
//     })
// }
//
// function goSleep(isTakeShower = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTakeShower) {
//                 console.log('go to the bed');
//                 resolve('go to the bed');
//             }
//             reject('Oops');
//         }, 100);
//     })
// }
//
//
// async function day() {
//     try {
//         const resultWakeUp = await wakeUp(true);
//         const resultBreakfast = await goBreakfast('milk');
//         const resultTakeShower = await takeShower(resultBreakfast);
//         const resultGoWork = await goWork(resultTakeShower);
//         const resultWaitForBus = await waitForBus(resultGoWork);
//         const resultGoLunch = await goLunch('meat');
//         const resultContinueWork = await continueWork(resultGoLunch);
//         const resultGoHome = await goHome(resultContinueWork);
//         const resultGoDinner = await goDinner('salad');
//         const resultReadingBook = await readingBook(resultGoDinner);
//         const resultListeningToMusic = await listeningToMusic(resultReadingBook);
//         const resultGoSleep = await goSleep(resultListeningToMusic);
//
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// day();

// Callback

function wakeUp(isWorkingDay, callback) {

    setTimeout(() => {
        if (isWorkingDay) {
            callback(null, 'wake up!!');
            return;
        }
        callback('error', null);
    }, 100);
}

function goBreakfast(food, callback) {

    setTimeout(() => {
        if (food) {
            callback(null, `go eat ${food}`);
            return;
        }
        callback('error');
    }, 100);
}

function takeShower(isTakeShower, callback) {

    setTimeout(() => {
        if (isTakeShower) {
            callback(null, 'you are clean');
            return;
        }
        callback('error');
    }, 800);
}

function goWork(callback) {

    setTimeout(() => {
        callback(null, 'oh, i have to work');
    }, 2000);
}

function waitForBus(isOurBus, callback) {
    setTimeout(() => {
        if (isOurBus) {
            callback(null, 'you will not late');
            return;
        }
        callback('waiting more');
    }, 200);
}

function goLunch(food, callback) {
    setTimeout(() => {
        if (food) {
            callback(null, `go lunch ${food}`);
            return;
        }
        callback('Oops');
    }, 800);
}

function continueWork(callback) {
    setTimeout(() => {
        callback(null, 'ohh, this work');
    }, 3000);
}

function goHome(isThatRight, callback) {
    setTimeout(() => {
        if (isThatRight) {
            callback(null, 'you are clean');
            return;
        }
        callback('continue woork, oh nooo');
    }, 400);
}

function goDinner(food, callback) {
    setTimeout(() => {
        if (food) {
            callback(null, `go eat ${food}`);
            return;
        }
        callback('nothing have');
    }, 300);
}

function readingBook(isReadingBook, callback) {
    setTimeout(() => {
        if (isReadingBook) {
            callback(null, 'this book is cool');
            return;
        }
        callback('error');
    }, 2000);
}

function listeningToMusic(isListening, callback) {
    setTimeout(() => {
        if (isListening) {
            callback(null, 'musiic');
            return;
        }
        callback('go sleep');
    }, 700);
}

function goSleep(sleep, callback) {
    setTimeout(() => {
        if (sleep) {
            callback(null, 'go to the bed');
            return;
        }
        callback('Oops');
    }, 100);
}

wakeUp(true, (err, morning) => {
    if (err) {
        console.error('mmm', err);
        return;
    }
    console.log(morning);

    goBreakfast('milk', (err, eat) => {
        if (err) {
            console.error('mmm', err);
            return;
        }
        console.log(eat);

        takeShower(true, (err, shower) => {
            if (err) {
                console.error('mmm', err);
                return;

            }
            console.log(shower);

            goWork((err, work) => {
                if (err) {
                    console.error('mmm', err);
                    return;
                }
                console.log(work);

                waitForBus(true, (err, bus) => {
                    if (err) {
                        console.error('mmm', err);
                        return;
                    }
                    console.log(bus);

                    goLunch('fish', (err, eat) => {
                        if (err) {
                            console.error('mmm', err);
                            return;
                        }
                        console.log(eat);

                        continueWork((err, enoughWork) => {
                            if (err) {
                                console.error('mmm', err);
                                return;
                            }
                            console.log(enoughWork);

                            goHome(true, (err, walk) => {
                                if (err) {
                                    console.error('mmm', err);
                                    return;
                                }
                                console.log(walk);

                                goDinner('meat', (err, eat) => {
                                    if (err) {
                                        console.error('mmm', err);
                                        return;
                                    }
                                    console.log(eat);

                                    readingBook(true, (err, book) => {
                                        if (err) {
                                            console.error('mmm', err);
                                            return;
                                        }
                                        console.log(book);

                                        listeningToMusic(true, (err, music) => {
                                            if (err) {
                                                console.error('mmm', err);
                                                return;
                                            }
                                            console.log(music);

                                            goSleep(true, (err, x) => {
                                                if (err) {
                                                    console.error(err);
                                                }
                                                console.log(x);
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    })
});