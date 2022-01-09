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
    location.href = '../index.html';
}

let mainWrap = document.createElement('div');
mainWrap.setAttribute('class', 'mainWrap');
// mainWrap.style.display = 'flex';
// mainWrap.style.flexDirection = 'column';
// mainWrap.style.alignItems = 'center';
// mainWrap.style.background = 'linear-gradient(#fff, #d2d1d1)';

let userId = localStorage.getItem('user_id');
let postId = localStorage.getItem('post_id');

let commentsTitle = document.createElement('div');
commentsTitle.setAttribute('class', 'div');
commentsTitle.innerHTML = '<h2>Comments</h2>';

// commentsTitle.style.width = '1400px';
// commentsTitle.style.margin = '15px';
// commentsTitle.style.padding = ' 0 20px';
// // commentsTitle.style.border = '1px solid darkGrey';
// commentsTitle.style.borderRadius = '10px';
// commentsTitle.style.textAlign = 'center';
// commentsTitle.style.boxShadow = '6px 8px 10px 0 darkGrey';
// commentsTitle.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';

fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(response => response.json())
    .then(posts => {

        let postWrap = document.createElement('div');
        postWrap.setAttribute('class', 'wrap');
        // postWrap.style.display = 'flex';
        // postWrap.style.justifyContent = 'center';
        // postWrap.style.flexWrap = 'wrap';

        for (const post of posts) {
            if (post.id == postId) {

                let divPost = document.createElement('div');
                divPost.setAttribute('class', 'div');

                // divPost.style.width = '1400px';
                // divPost.style.margin = '15px';
                // divPost.style.padding = '20px';
                // // divPost.style.border = '1px solid darkGrey';
                // divPost.style.borderRadius = '10px';
                // divPost.style.textAlign = 'center';
                // divPost.style.boxShadow = '6px 8px 10px 0 darkGrey';
                // divPost.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';

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
        // commentsWrap.style.display = 'flex';
        // commentsWrap.style.justifyContent = 'center';
        // commentsWrap.style.flexWrap = 'wrap';

        for (const comment of comments) {
            if (postId == comment.postId) {
                let divComment = document.createElement('div');
                divComment.setAttribute('class', 'divCom');

                // divComment.style.width = '17%';
                // divComment.style.margin = '15px';
                // divComment.style.padding = '20px';
                // // divComment.style.border = '1px solid darkGrey';
                // divComment.style.borderRadius = '10px';
                // divComment.style.textAlign = 'center';
                // divComment.style.boxShadow = '6px 8px 10px 0 darkGrey';
                // divComment.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';
                //
                // divComment.onmouseover = (e) => {
                //     divComment.style.background = 'linear-gradient( 160deg, #f1f1f1 70%, #f6f6f6 )';
                //     divComment.style.transition = '.3s';
                // };
                // divComment.onmouseout = (e) => {
                //     divComment.style.background = 'linear-gradient( 160deg, #fff 40%, #EEEEEEFF )';
                //     divComment.style.transition = '.3s';
                // };

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