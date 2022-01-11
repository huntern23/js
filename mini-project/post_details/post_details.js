// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');
// buttons.style.marginTop = '20px';

let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back';
buttonBack.setAttribute('class', 'button');

buttonBack.onclick = () => {
    history.back();
}


let buttonBackToUsers = document.createElement('button');
buttonBackToUsers.innerText = 'Back to users';
buttonBackToUsers.setAttribute('class', 'button');


buttonBackToUsers.onclick = () => {
    location.href = '../index.html';
}

let mainWrap = document.createElement('div');
mainWrap.setAttribute('class', 'mainWrap');


let userId = localStorage.getItem('user_id');
let postId = localStorage.getItem('post_id');

let commentsTitle = document.createElement('div');
commentsTitle.setAttribute('class', 'div');
commentsTitle.innerHTML = '<h2>Comments</h2>';


fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(response => response.json())
    .then(posts => {

        let postWrap = document.createElement('div');
        postWrap.setAttribute('class', 'wrap');


        for (const post of posts) {
            if (post.id == postId) {

                let divPost = document.createElement('div');
                divPost.setAttribute('class', 'div');


                divPost.innerHTML = `
                <h2>Title: ${post.title}</h2>
                <p><b>Body:</b> ${post.body}</p>`;

                postWrap.appendChild(divPost);
            }
        }

        mainWrap.appendChild(postWrap);
        mainWrap.appendChild(commentsTitle);
    })


fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
    .then(response => response.json())
    .then(comments => {

        let commentsWrap = document.createElement('div');
        commentsWrap.setAttribute('class', 'wrap');


        for (const comment of comments) {
            if (postId == comment.postId) {
                let divComment = document.createElement('div');
                divComment.setAttribute('class', 'divCom');



                divComment.innerHTML = `
                    <h3>Name: ${comment.name}</h3>
                    <p><b>Email:</b> ${comment.email}</p>
                    <p><b>Body:</b> ${comment.body}</p>`;

                commentsWrap.appendChild(divComment);
            }
        }

        mainWrap.appendChild(commentsWrap);
        buttons.append(buttonBack, buttonBackToUsers);
        mainWrap.appendChild(buttons);

    })

document.body.appendChild(mainWrap);