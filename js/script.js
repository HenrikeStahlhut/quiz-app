const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answer = document.querySelector('[data-js="answer"]');
const showAnswerButton = document.querySelector('[data-js="solutionButton"]');
const addQuestionButton = document.querySelector('[data-js="addQuestionButton"]');
const form = document.querySelector('[data-js="form"]');
const questionTextarea = document.querySelector('[data-js="questionTextarea"]');
const answerTextarea = document.querySelector('[data-js="answerTextarea"]');
const inputTags = document.querySelector('[data-js="inputTags"]');

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

// Add Questions

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
});
