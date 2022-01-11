// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');


let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back to users';
buttonBack.setAttribute('class', 'button');

buttonBack.onclick = () => {
    history.back();
}

let buttonPost = document.createElement('button');
buttonPost.innerText = 'Posts of user';
buttonPost.setAttribute('class', 'button');

buttonPost.onclick = () => {
    location.href = '../user_posts/user_posts.html';
}

function userDetails(user, wrapper) {
    for (const key in user) {
        let div = document.createElement('div');
        div.setAttribute('class', 'div');


        if (typeof user[key] === 'object') {
            userDetails(user[key], div);
        } else {
            div.innerHTML += `<b>${key}:</b> ${user[key]}`;
        }

        wrapper.appendChild(div);
    }
}

let mainWrap = document.createElement('div');
mainWrap.setAttribute('class', 'mainWrap');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let userId = localStorage.getItem('user_id');

        let wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');


        for (const user of users) {

            let divUser = document.createElement('div');

            if (user.id == userId) {

                userDetails(user, divUser);
                wrap.appendChild(divUser);

            }
        }

        mainWrap.appendChild(wrap);
        buttons.append(buttonBack, buttonPost)
        mainWrap.appendChild(buttons);
    })
document.body.appendChild(mainWrap);