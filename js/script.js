const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

function bookmarkToggle (){
    bookmarkButton.classList.toggle("bookmark--toogle");
}

bookmarkButton.addEventListener("click",() => {
    bookmarkToggle();
});