



const contents = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode('.comment_container');

function createComment(user,value){
    const template = /* html */ `
        <div class="id" data-comment-id="${Date.now()}">
            <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
            <div class="comment_field">
                <div class="text_container">
                    <div class="name"><a href="#">${user}</a></div>
                    <div class="text_field"> ${value} </div>
                </div>
            </div>
        </div>
    `
    return template;
}

function endScroll(target) {
    commentContainer.scrollTop = commentContainer.scrollHeight
}

function clearContents(target) {

    if(target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA'){
        target.value = ''
        return;
    }
    target.textContents = ''
}


const handleArcticle = (e) => {

    let target = e.target;
    let name = target.dataset.name

    while(!name){
        target = target.parentElement;
        name = target.dataset.name

        if(target.nodeName === 'BODY'){
            target = null;
            return;
        }
    }

    if(name === 'like'){
        //target.classList.add('active');

        toggleClass(target,'active');
    }

    if(name === 'more'){
        //target.classList.add('active');

        toggleClass(target,'active');
    }

    if(name === 'comment'){
        textField.focus();
    }

    if(name === 'send'){
        e.preventDefault();

        let value = textField.value;

        if(value ==='') return;

        insertLast('.comment_container',createComment('전진승',value));

        endScroll()
        clearContents(textField);
    }
}


contents.addEventListener('click',handleArcticle)