// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');
// buttons.style.marginTop = '20px';

let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back to users';
buttonBack.setAttribute('class', 'button');

// buttonBack.style.boxShadow = '3px 4px 5px 1px darkGrey';
// buttonBack.style.border = '.1px solid lightGrey';
// buttonBack.style.padding = '10px';
// buttonBack.style.margin = '10px';
// buttonBack.style.borderRadius = '4px';
// buttonBack.style.width = '115px';
// buttonBack.style.height = '40px';
// buttonBack.style.fontWeight = 'bold';
// buttonBack.style.background = 'linear-gradient( 160deg,#fff 10%,#EEEEEEFF 40%, #b7b7b7 )';
//
// buttonBack.onmouseover = (e) => {
//     buttonBack.style.background = 'linear-gradient( 160deg, #EEEEEEFF 30%, lightGrey, #A1A1A1FF )';
//     buttonBack.style.transition = '.3s';
//     buttonBack.style.height = '50px';
//     buttonBack.style.width = '125px';
// };
// buttonBack.onmouseout = (e) => {
//     buttonBack.style.background = 'linear-gradient( 160deg, #fff 10%, #EEEEEEFF 40%, #b7b7b7 )';
//     buttonBack.style.height = '40px';
//     buttonBack.style.width = '115px';
//     buttonBack.style.transition = '.3s';
// };

buttonBack.onclick = () => {
    history.back();
}

let buttonPost = document.createElement('button');
buttonPost.innerText = 'Posts of user';
buttonPost.setAttribute('class', 'button');

// buttonPost.style.boxShadow = '3px 4px 5px 1px darkGrey';
// buttonPost.style.border = '.1px solid lightGrey';
// buttonPost.style.padding = '10px';
// buttonPost.style.margin = '10px';
// buttonPost.style.borderRadius = '4px';
// buttonPost.style.width = '115px';
// buttonPost.style.height = '40px';
// buttonPost.style.fontWeight = 'bold';
// buttonPost.style.background = 'linear-gradient( 160deg,#fff 10%,#EEEEEEFF 40%, #b7b7b7 )';
//
// buttonPost.onmouseover = (e) => {
//     buttonPost.style.background = 'linear-gradient( 160deg, #EEEEEEFF 30%, lightGrey, #A1A1A1FF )';
//     buttonPost.style.transition = '.3s';
//     buttonPost.style.height = '50px';
//     buttonPost.style.width = '125px';
// };
// buttonPost.onmouseout = (e) => {
//     buttonPost.style.background = 'linear-gradient( 160deg, #fff 10%, #EEEEEEFF 40%, #b7b7b7 )';
//     buttonPost.style.height = '40px';
//     buttonPost.style.width = '115px';
//     buttonPost.style.transition = '.3s';
// };

buttonPost.onclick = () => {
    location.href = '../user_posts/user_posts.html';
}

function userDetails(user, wrapper) {
    for (const key in user) {
        let div = document.createElement('div');
        div.setAttribute('class', 'div');
        // div.style.marginBottom = '5px';
        // div.style.fontSize = '20px';
        // div.style.fontWeight = 'bold';

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
// mainWrap.style.display = 'flex';
// mainWrap.style.flexDirection = 'column';
// mainWrap.style.alignItems = 'center';
// mainWrap.style.marginTop = '100px';
// mainWrap.style.height = '100vh';
// mainWrap.style.background = 'linear-gradient(#fff, #d2d1d1)';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let userId = localStorage.getItem('user_id');

        let wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');

        // // wrap.style.width = '33%';
        // wrap.style.margin = '15px';
        // wrap.style.padding = '20px 50px';
        // // wrap.style.border = '1px solid darkGrey';
        // wrap.style.borderRadius = '10px';
        // wrap.style.boxShadow = '6px 8px 10px 0 darkGrey';
        // wrap.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';

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