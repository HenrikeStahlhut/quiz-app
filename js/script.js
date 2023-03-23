const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answer = document.querySelector('[data-js="answer"]');
const showAnswerButton = document.querySelector('[data-js="solutionButton"]');

// Toggle Bookmark

function bookmarkToggle (){
    bookmarkButton.classList.toggle("bookmark--toogle");
}

bookmarkButton.addEventListener("click",() => {
    bookmarkToggle();
});

// Show/Hide Answer

function showAnswer(){
    if (answer.style.display === "none") {
        answer.style.display = "block";
        showAnswerButton.textContent="Hide Answer";
      } else {
        showAnswerButton.textContent="Show Answer";
        answer.style.display = "none";
      }
}

showAnswerButton.addEventListener("click", ()=>{
    showAnswer();
})


