const liMaker = (text, listElement) => {
    const li = document.createElement('li');
    li.textContent = text;
    listElement.appendChild(li);
}

const addComment = (e) => {
    e.preventDefault();
    let form = e.target
    let inputElement = form.getElementsByTagName('input')[0];

    let commentArray= JSON.parse(localStorage.getItem(form.id));
    commentArray.push(inputElement.value);
    localStorage.setItem(form.id, JSON.stringify(commentArray));
    
    // Get ul element from form's parent ancestor element
    let listElement = form.parentNode.parentNode.getElementsByTagName('ul')[0];

    liMaker(inputElement.value, listElement);
    inputElement.value =""
}

const clearComments = (e) =>{
    e.preventDefault();
    // remove li tags
    let listElement = e.target.parentNode.getElementsByTagName('ul')[0];
    while(listElement.firstChild) {
        listElement.removeChild(listElement.firstChild)
    }
    // Delete from local storage
    let form = e.target.parentNode.getElementsByTagName('form')[0];
    localStorage.setItem(form.id, JSON.stringify([]));
}


let formArray = document.getElementsByClassName("comment-form");
for( form of formArray) {
    if(!localStorage.getItem(form.id)){
        localStorage.setItem(form.id, JSON.stringify([]));
    } else {
        // Get ul element from form's parent ancestor element
        let listElement = form.parentNode.parentNode.getElementsByTagName('ul')[0];
        let commentsArray = JSON.parse(localStorage.getItem(form.id));
        commentsArray.forEach(comment => {
            liMaker(comment, listElement);
        });
    }
    form.addEventListener('submit', addComment);
}

let clearCommentBtnArray = document.getElementsByClassName("delete-comments-btn")
for( clearCommentBtn of clearCommentBtnArray) {
    clearCommentBtn.addEventListener('click', clearComments)   
}
