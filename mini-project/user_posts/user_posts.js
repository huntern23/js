// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');
// buttons.style.marginTop = '20px';

let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back';
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

let buttonBackToUsers = document.createElement('button');
buttonBackToUsers.innerText = 'Back to users';
buttonBackToUsers.setAttribute('class', 'button');

// buttonBackToUsers.style.boxShadow = '3px 4px 5px 1px darkGrey';
// buttonBackToUsers.style.border = '.1px solid lightGrey';
// buttonBackToUsers.style.padding = '10px';
// buttonBackToUsers.style.margin = '10px';
// buttonBackToUsers.style.borderRadius = '4px';
// buttonBackToUsers.style.width = '115px';
// buttonBackToUsers.style.height = '40px';
// buttonBackToUsers.style.fontWeight = 'bold';
// buttonBackToUsers.style.background = 'linear-gradient( 160deg,#fff 10%,#EEEEEEFF 40%, #b7b7b7 )';
//
// buttonBackToUsers.onmouseover = (e) => {
//     buttonBackToUsers.style.background = 'linear-gradient( 160deg, #EEEEEEFF 30%, lightGrey, #A1A1A1FF )';
//     buttonBackToUsers.style.transition = '.3s';
//     buttonBackToUsers.style.height = '50px';
//     buttonBackToUsers.style.width = '125px';
// };
// buttonBackToUsers.onmouseout = (e) => {
//     buttonBackToUsers.style.background = 'linear-gradient( 160deg, #fff 10%, #EEEEEEFF 40%, #b7b7b7 )';
//     buttonBackToUsers.style.height = '40px';
//     buttonBackToUsers.style.width = '115px';
//     buttonBackToUsers.style.transition = '.3s';
// };

buttonBackToUsers.onclick = () => {
    location.pathname = '/js-module/mini_project/index.html';
}

let mainWrap = document.createElement('div');
mainWrap.setAttribute('class', 'mainWrap');
// mainWrap.style.display = 'flex';
// mainWrap.style.background = 'linear-gradient(#fff, #d2d1d1)';
// mainWrap.style.height = '100vh';
// mainWrap.style.flexDirection = 'column';
// mainWrap.style.alignItems = 'center';
// mainWrap.style.marginTop = '100px';

let userId = localStorage.getItem('user_id');

fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(response => response.json())
    .then(posts => {

        let postWrap = document.createElement('div');
        postWrap.setAttribute('class', 'postWrap');
        // postWrap.style.display = 'flex';
        // postWrap.style.justifyContent = 'center';
        // postWrap.style.flexWrap = 'wrap';

        for (const post of posts) {

            let divPost = document.createElement('div');
            divPost.setAttribute('class', 'div');

            // divPost.style.width = '13%';
            // divPost.style.height = '200px';
            // divPost.style.margin = '15px';
            // divPost.style.padding = '20px';
            // // divPost.style.border = '1px solid darkGrey';
            // divPost.style.borderRadius = '10px';
            // divPost.style.display = 'flex';
            // divPost.style.textAlign = 'center';
            // divPost.style.alignItems = 'center';
            // divPost.style.justifyContent = 'space-between';
            // divPost.style.flexDirection = 'column';
            // // divPost.style.fontWeight = 'bold';
            // divPost.style.boxShadow = '6px 8px 10px 0 darkGrey';
            // divPost.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';
            //
            // divPost.onmouseover = (e) => {
            //     divPost.style.background = 'linear-gradient( 160deg, #f1f1f1 70%, #f6f6f6 )';
            //     divPost.style.transition = '.3s';
            // };
            // divPost.onmouseout = (e) => {
            //     divPost.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';
            //     divPost.style.transition = '.3s';
            // };

            divPost.innerHTML = `<b>Title:</b> ${post.title}`;

            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'Post details';
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
            // }

            buttonPost.onclick = () => {
                location.href = '../post_details/post_details.html';
                localStorage.setItem('post_id', post.id);
            }

            divPost.appendChild(buttonPost);
            postWrap.appendChild(divPost);
        }

        mainWrap.appendChild(postWrap);
        buttons.append(buttonBack, buttonBackToUsers);
        mainWrap.appendChild(buttons);
        document.body.appendChild(mainWrap);
    })