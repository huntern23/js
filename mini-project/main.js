// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let wrap = document.createElement('div');
wrap.setAttribute('class', 'wrap');
// wrap.style.display = 'flex';
// wrap.style.justifyContent = 'center';
// wrap.style.background = 'linear-gradient(#fff, #d2d1d1)';


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userWrap = document.createElement('div');
        userWrap.setAttribute('class', 'userWrap');
        // userWrap.style.display = 'flex';
        // userWrap.style.justifyContent = 'center';
        // userWrap.style.flexWrap = 'wrap';
        // userWrap.style.width = '1000px';

        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.setAttribute('class', 'divUser');
            divUser.innerHTML = `
            <h3>ID: ${user.id}</h3>
            <h2>Name: ${user.name}</h2>`;

            // divUser.style.width = '34%';
            // divUser.style.margin = '15px';
            // divUser.style.padding = '20px';
            // // divUser.style.border = '1px solid darkGrey';
            // divUser.style.borderRadius = '10px';
            // divUser.style.display = 'flex';
            // divUser.style.alignItems = 'center';
            // divUser.style.flexDirection = 'column';
            // divUser.style.boxShadow = '6px 8px 10px 0 darkGrey';
            // divUser.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';
            //
            // divUser.onmouseover = (e) => {
            //     divUser.style.background = 'linear-gradient( 160deg, #f1f1f1 70%, #f6f6f6 )';
            //     divUser.style.transition = '.3s';
            // };
            // divUser.onmouseout = (e) => {
            //     divUser.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';
            //     divUser.style.transition = '.3s';
            // };

            let buttonDetails = document.createElement('button');
            buttonDetails.innerText = 'Details';
            buttonDetails.setAttribute('class', 'button');
            // buttonDetails.style.boxShadow = '3px 4px 5px 1px darkGrey';
            // buttonDetails.style.border = '.1px solid lightGrey';
            // buttonDetails.style.padding = '10px';
            // buttonDetails.style.borderRadius = '4px';
            // buttonDetails.style.width = '115px';
            // buttonDetails.style.height = '40px';
            // buttonDetails.style.fontWeight = 'bold';
            // buttonDetails.style.background = 'linear-gradient( 160deg,#fff 10%,#EEEEEEFF 40%, #b7b7b7 )';

            buttonDetails.onclick = () => {
                location.href = 'user_details/user_details.html';
                localStorage.setItem('user_id', user.id);
            }

            // buttonDetails.onmouseover = (e) => {
            //     buttonDetails.style.background = 'linear-gradient( 160deg, #EEEEEEFF 30%, lightGrey, #A1A1A1FF )';
            //     buttonDetails.style.transition = '.3s';
            //     buttonDetails.style.height = '50px';
            //     buttonDetails.style.width = '125px';
            // };
            // buttonDetails.onmouseout = (e) => {
            //     buttonDetails.style.background = 'linear-gradient( 160deg, #fff 10%, #EEEEEEFF 40%, #b7b7b7 )';
            //     buttonDetails.style.height = '40px';
            //     buttonDetails.style.width = '115px';
            //     buttonDetails.style.transition = '.3s';
            // };

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