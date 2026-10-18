function increaseLike(button) {
    const countSpan = button.querySelector(".like-count");
    let currentLikes = parseInt(countSpan.textContent, 10);

    countSpan.textContent = currentLikes + 1;
}

const commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("userEmail").value.trim();
    const commentText = document.getElementById("userComment").value.trim();
    const commentsList = document.getElementById("commentsList");

    if (email === "" || commentText === "") {
        return;
    }

    const newComment = document.createElement("li");
    const emailElement = document.createElement("strong");

    emailElement.textContent = email + ": ";
    newComment.appendChild(emailElement);
    newComment.appendChild(document.createTextNode(commentText));

    commentsList.appendChild(newComment);

    commentForm.reset();
});