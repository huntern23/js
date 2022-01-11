// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let wrap = document.createElement('div');
wrap.setAttribute('class', 'wrap');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userWrap = document.createElement('div');
        userWrap.setAttribute('class', 'userWrap');


        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.setAttribute('class', 'divUser');
            divUser.innerHTML = `
            <h3>ID: ${user.id}</h3>
            <h2>Name: ${user.name}</h2>`;


            let buttonDetails = document.createElement('button');
            buttonDetails.innerText = 'Details';
            buttonDetails.setAttribute('class', 'button');


            buttonDetails.onclick = () => {
                location.href = 'user_details/user_details.html';
                localStorage.setItem('user_id', user.id);
            }


            divUser.appendChild(buttonDetails);
            userWrap.appendChild(divUser);
        }

        wrap.appendChild(userWrap);
    })
document.body.appendChild(wrap);

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//